const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
const archiver = require('archiver');


const options = {
    host: 'localhost',
    port: 8081,
    path: `/?filename=package.zip`,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
}

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    // res.setEncoding('utf8');
    // res.on('data', (chunk) => {
    //     console.log(`BODY: ${chunk}`);
    // });
    // res.on('end', () => {
    //     console.log('No more data in response.');
    // });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});


let packname = './package';
const archive = archiver('zip', {
    zlib: { level: 9 }
})
archive.directory(packname, false);
archive.pipe(req);
archive.on('finish', () => {
    req.end();
});
archive.finalize();