"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = __importDefault(require("node:fs"));
const filePath = node_path_1.default.join(process.cwd(), '../../data/largeFile.txt');
const server = node_http_1.default.createServer();
server.listen(5050, '127.0.0.1', () => { console.log('SERVER STARTED!'); });
server.on('request', (req, res) => {
    let readStream = node_fs_1.default.createReadStream(filePath);
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
});
