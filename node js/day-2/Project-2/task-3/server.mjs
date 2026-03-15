import http  from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import {parseHtmlTemp, parseUserData, storeData} from './utilities/utilities.mjs'

const formPath = path.join('templates', 'form.html');
const welcomePath = path.join('templates', 'welcome.html');
const formStylePath = path.join('static', 'formStyle.css');
const welcomeStylePath = path.join('static', 'welcomeStyle.css');
const welcomeScriptPath = path.join('static', 'welcomeScript.js');
const storagePath = path.join('data', 'clients.json');


const server = http.createServer();

server.listen(7000, () => {
    console.log('SERVER STARTED :D');
});

server.on('request',async (req, res) => {
    const {method, url: pathName} = req;
    if(method === 'GET') {
        if(pathName === '/static/formStyle.css') {
            const styleFile = await fs.readFile(formStylePath, 'utf-8');
            res.writeHead(200, 'Success', {'content-type': 'text/css'});
            res.end(styleFile);
        }else if(pathName === '/static/welcomeStyle.css') {
            const styleFile = await fs.readFile(welcomeStylePath, 'utf-8');
            res.writeHead(200, 'Success', {'content-type': 'text/css'});
            res.end(styleFile);
        }else if(pathName === '/static/welcomeScript.js') {
            const styleFile = await fs.readFile(welcomeScriptPath, 'utf-8');
            res.writeHead(200, 'Success', {'content-type': 'text/css'});
            res.end(styleFile);
        }else if(pathName === '/form') {
            const formTemplate = await fs.readFile(formPath, 'utf-8');
            res.writeHead(200, 'Success', {'content-type': 'text/html'});
            res.end(formTemplate);
        }else if(pathName === '/users') {
            const allUsers = await fs.readFile(storagePath, 'utf-8');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(allUsers);
        }else{
            res.writeHead(400, 'BAD-REQ', {'content-type': 'text/html'});
            res.end('<h1>INVALID PATH</h1>');    
        }
    }else if(method === 'POST') {
        let bodyData = [];
        if(pathName === '/form') {
            req.on("data", (chunk) => {
                bodyData.push(chunk);
            });
            req.on('end', async () => {
                bodyData = Buffer.concat(bodyData).toString();

                const parsedObject = parseUserData(bodyData);
                await storeData(parsedObject, storagePath);

                const welcomeTemp = await fs.readFile(welcomePath, 'utf-8');
                const formatedTemp = parseHtmlTemp(parsedObject, welcomeTemp);
                res.end(formatedTemp);
            })
        }else{
            res.writeHead(400, 'BAD-REQ', {'content-type': 'text/html'});
            res.end('<h1>INVALID PATH</h1>');    
        }
    }
});