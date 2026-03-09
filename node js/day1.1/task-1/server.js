const http = require('node:http');
const {URL} = require('url');


const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://127.0.0.1`);
    
    if(parsedUrl.pathname !== '/calculate'){
        res.statusCode = 400;
        res.end('<h1>BAD REQUEST ENTER VALID PATH!</h1>');
    }else {
        const calcController = {
            'add': (x, y) => x + y,
            'sub': (x, y) => x - y,
            'mul': (x, y) => x * y,
            'div': (x, y) => x / y
        }
        const AvailModes = ['add', 'sub', 'mul', 'div'];
        
        const mode = parsedUrl.searchParams.get('mode');
        const nums = parsedUrl.searchParams.get('nums');
        const formatedNums = nums.split(',').map((x) => parseInt(x));

        const modeExist = AvailModes.includes(mode);
        const validNums = (formatedNums.length >= 2) && !formatedNums.some((x) => Number.isNaN(x));

        if (!mode || !validNums || !modeExist) {
            res.statusCode = 400;
            res.end('<h1>IMP QUERY PARAMS MISSING/INVALID!</h1>');
        }else {
            const result = {operation: mode, formatedNums, result: formatedNums.reduce(calcController[mode])};
            const formatedResult = JSON.stringify(result, null, 2);
            
            res.setHeader('Content-Type', 'application/json');
            res.end(formatedResult);
        }
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log("Server started");
});
