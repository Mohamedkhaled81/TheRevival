import http  from 'node:http';
import path from 'node:path';
import fs from 'node:fs';

const filePath = path.join(process.cwd(), '../../data/largeFile.txt');
const server = http.createServer();
server.listen(5050, '127.0.0.1', () => {console.log('SERVER STARTED!')});

server.on('request', (req, res) => {
    let readStream = fs.createReadStream(filePath);

/*     readStream.on('data', (chunk) => {
        res.write(chunk);
        res.write('\n<------------------->\n');
    });

    readStream.on('end', () => {
        res.end("\nALL DONE\n")
    });

    readStream.on('error', () => {
        res.end("<h1>ERROR ERROR</h1>")
    }) */

    readStream.pipe(res);
})

