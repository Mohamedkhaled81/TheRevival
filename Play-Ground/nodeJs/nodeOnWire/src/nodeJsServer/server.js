"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var fs = require("fs/promises");
var path_1 = require("path");
var url_1 = require("url");
var ErrorMssgs;
(function (ErrorMssgs) {
    ErrorMssgs["BADREQ"] = "bad-request";
    ErrorMssgs["NOTFOUND"] = "not-found";
})(ErrorMssgs || (ErrorMssgs = {}));
var readFile = function (path) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs.readFile(path, 'utf-8')];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
var server = http.createServer(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var url, pathname, indexTempPath, htmlTemplate, aboutTempPath, htmlTemplate, studentsPath, studentData, err_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 8, , 9]);
                url = new url_1.URL((_a = req.url) !== null && _a !== void 0 ? _a : '/', "http://".concat(req.headers.host));
                pathname = url.pathname;
                if (!(pathname === '/' || pathname.toLowerCase() === '/home')) return [3 /*break*/, 2];
                indexTempPath = path_1.default.join(__dirname, '..', '..', 'Templates', 'index.html');
                return [4 /*yield*/, readFile(indexTempPath)];
            case 1:
                htmlTemplate = _b.sent();
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(htmlTemplate);
                return [3 /*break*/, 7];
            case 2:
                if (!(pathname.toLowerCase() === '/about')) return [3 /*break*/, 4];
                aboutTempPath = path_1.default.join(__dirname, '..', '..', 'Templates', 'about.html');
                return [4 /*yield*/, readFile(aboutTempPath)];
            case 3:
                htmlTemplate = _b.sent();
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(htmlTemplate);
                return [3 /*break*/, 7];
            case 4:
                if (!(pathname.toLowerCase() === '/students')) return [3 /*break*/, 6];
                studentsPath = path_1.default.join(__dirname, '..', '..', 'data', 'students.json');
                return [4 /*yield*/, readFile(studentsPath)];
            case 5:
                studentData = _b.sent();
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(studentData);
                return [3 /*break*/, 7];
            case 6: throw new Error(ErrorMssgs.BADREQ);
            case 7: return [3 /*break*/, 9];
            case 8:
                err_1 = _b.sent();
                if (err_1.message === ErrorMssgs.BADREQ) {
                    res.statusCode = 400;
                    res.end('<h1>Bad Request</h1>');
                }
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end("<h1>Internal Server Error: ".concat(err_1.message, "</h1>"));
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
server.listen(5050, function () {
    console.log("Server Started!");
});
