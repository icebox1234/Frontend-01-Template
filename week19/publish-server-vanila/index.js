const http = require('http');
const net = require('net');
const { URL } = require('url');
const fs = require('fs');
const unzip = require('unzipper');

// Create an HTTP tunneling proxy
const proxy = http.createServer((req, res) => {
    // let writeStream = fs.createWriteStream(`../server/public/packages/package`);

    let writeStream = unzip.Extract({ path: '../server/public' });
    req.pipe(writeStream);
    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('okay');
    })
});

proxy.listen(8081);