"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const fs = __importStar(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const url_1 = require("url");
var ErrorMssgs;
(function (ErrorMssgs) {
    ErrorMssgs["BADREQ"] = "bad-request";
    ErrorMssgs["NOTFOUND"] = "not-found";
})(ErrorMssgs || (ErrorMssgs = {}));
const readFile = async function (path) {
    return await fs.readFile(path, 'utf-8');
};
const server = http.createServer(async (req, res) => {
    try {
        const url = new url_1.URL(req.url ?? '/', `http://${req.headers.host}`);
        const pathname = url.pathname;
        if (pathname === '/' || pathname.toLowerCase() === '/home') {
            const indexTempPath = path_1.default.join(__dirname, '..', '..', 'Templates', 'index.html');
            const htmlTemplate = await readFile(indexTempPath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(htmlTemplate);
        }
        else if (pathname.toLowerCase() === '/about') {
            const aboutTempPath = path_1.default.join(__dirname, '..', '..', 'Templates', 'about.html');
            const htmlTemplate = await readFile(aboutTempPath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(htmlTemplate);
        }
        else if (pathname.toLowerCase() === '/students') {
            const studentsPath = path_1.default.join(__dirname, '..', '..', 'data', 'students.json');
            const studentData = await readFile(studentsPath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(studentData);
        }
        else {
            throw new Error(ErrorMssgs.BADREQ);
        }
    }
    catch (err) {
        if (err.message === ErrorMssgs.BADREQ) {
            res.statusCode = 400;
            res.end('<h1>Bad Request</h1>');
        }
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`<h1>Internal Server Error: ${err.message}</h1>`);
    }
});
server.listen(5050, () => {
    console.log("Server Started!");
});
