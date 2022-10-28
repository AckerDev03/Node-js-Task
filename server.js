const http = require('http');
const fs = require('fs');

// Create a server with HTTP variable

const server = http.createServer(function (req, res) {
    //Header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Send back some information
    fs.readFile('index.html', (err, data) =>{
        if (err) throw err;
        // console.log(data);
        res.write(data);
        res.end();
    })  
});

// Create a port
server.listen(5000, '127.0.0.1');

console.log('Yes, you have create a server succesfully!!!')