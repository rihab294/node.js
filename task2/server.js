const fs = require("fs");
const http = require('http');
 
const server=http.createServer((request, response)=>{
response.writeHead(200, {'content-type': 'text/html'});
response.write("<h1>Hello Node!!!!</h1>");
response.end();
});
server.listen(3000, ()=>console.log('server running on port 3000'))
