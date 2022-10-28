const http = require('http');
const fs = require('fs');

const port = 5000;
const hostname = '127.0.0.1';

// Create a server with HTTP variable

const server = http.createServer((req, res) => {
    //Header
    console.log(`Site is running on: ${req.url}`);
    if (res.url === '/home' || req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (res.url === 'contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (res.url === 'about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/about.html').pipe(res);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }

    // Send back some information
    // fs.readFile('index.html', (err, data) =>{
    //     if (err) throw err;
    //     // console.log(data);
    //     res.write(data);
    //     res.end();
    // })  
});

// Create a port
server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}`)
});
