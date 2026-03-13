import * as http from 'http';
import * as fs from 'fs/promises';
import path from 'path';
import { URL } from 'url';

enum ErrorMssgs {
    BADREQ='bad-request',
    NOTFOUND='not-found'
}

interface IStudent {
    id: number;
    name: string;
    email: string;
    age: number;
    isActive: boolean;
}

const readFile = async function(path: string): Promise<string> {
    return await fs.readFile(path, 'utf-8');
}

const server = http.createServer(async (req, res) => {
    try {
        const url = new URL(req.url ?? '/', `http://${req.headers.host}`);
        const pathname = url.pathname;

        if(pathname === '/' || pathname.toLowerCase() === '/home') {
            const indexTempPath = path.join(__dirname, '..', '..', 'Templates', 'index.html');
            
            const htmlTemplate = await readFile(indexTempPath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(htmlTemplate);

        }else if(pathname.toLowerCase() === '/about') {
            const aboutTempPath = path.join(__dirname, '..', '..', 'Templates', 'about.html');
            
            const htmlTemplate = await readFile(aboutTempPath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(htmlTemplate);
            
        }else if(pathname.toLowerCase() === '/students') {
            const studentsPath = path.join(__dirname, '..' ,'..', 'data', 'students.json');
            const studentData = await readFile(studentsPath);

            let formatedData: Array<IStudent> = JSON.parse(studentData);

            const isActiveParam = url.searchParams.get('isActive');

            if(isActiveParam !== null) {
                if(!["true", "false"].includes(isActiveParam)) {
                    throw new Error(ErrorMssgs.BADREQ);
                }
                const isActive = isActiveParam === "true";
                formatedData = formatedData.filter((student) => student.isActive === isActive);
            }

            let responseData = JSON.stringify(formatedData);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(responseData);

        }else {
            throw new Error(ErrorMssgs.BADREQ);
        }
        
    } catch (err) {
        if((err as Error).message === ErrorMssgs.BADREQ) {
            res.statusCode = 400;
            res.end('<h1>Bad Request</h1>');
            return
        }
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`<h1>Internal Server Error: ${(err as Error).message}</h1>`);
    }
});

server.listen(5050, () => {
    console.log("Server Started!")
})