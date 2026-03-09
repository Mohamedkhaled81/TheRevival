import * as http from 'node:http'

// this function is executed when request hits the server.
const server = http.createServer((request, response) => {
    console.log("New Request Hits..");
    response.end('Hello from the server!');
});

// this function is executed as soon as the server is started and listening to the request..
// server process is always running not stopped..
server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started!')
})