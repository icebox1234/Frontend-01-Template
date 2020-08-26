const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
const archiver = require('archiver');
const child_process = require('child_process');


let redirect_uri = 'http://localhost:8081/auth';
child_process.exec(`cmd /c start https://github.com/login/oauth/authorize?client_id=Iv1.04d89e286bc2781f&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=read%3Auser&state=123byl`);
const server = http.createServer((request, response) => {
    let token = request.url.match(/token=([^&]+)/);
    if (!token) {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end();
        return;
    }
    token = token[1];
    const options = {
        host: 'localhost',
        port: 8081,
        path: `/?filename=package.zip`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token': token
        }
    }

    const zipRequest = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('publish finished!');
        server.close();
        // res.setEncoding('utf8');
        // res.on('data', (chunk) => {
        //     console.log(`BODY: ${chunk}`);
        // });
        // res.on('end', () => {
        //     console.log('No more data in response.');
        // });
    });

    zipRequest.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    let packname = './package';
    const archive = archiver('zip', {
        zlib: { level: 9 }
    })
    archive.directory(packname, false);
    archive.pipe(zipRequest);
    archive.on('finish', () => {
        zipRequest.end();
        // let redirect_uri = 'http://localhost:8081/auth';
        // child_process.exec(`cmd /c start https://github.com/login/oauth/authorize?client_id=Iv1.04d89e286bc2781f&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=read%3Auser&state=123byl`)
    });
    archive.finalize();
});
server.listen(8080);
server.on('error', e => {
    server.close();
})


// const options = {
//     host: 'localhost',
//     port: 8081,
//     path: `/?filename=package.zip`,
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//     }
// }

// const req = http.request(options, (res) => {
//     console.log(`STATUS: ${res.statusCode}`);
//     console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//     // res.setEncoding('utf8');
//     // res.on('data', (chunk) => {
//     //     console.log(`BODY: ${chunk}`);
//     // });
//     // res.on('end', () => {
//     //     console.log('No more data in response.');
//     // });
// });

// req.on('error', (e) => {
//     console.error(`problem with request: ${e.message}`);
// });


// let packname = './package';
// const archive = archiver('zip', {
//     zlib: { level: 9 }
// })
// archive.directory(packname, false);
// archive.pipe(req);
// archive.on('finish', () => {
//     req.end();
//     let redirect_uri = 'http://localhost:8081/auth';
//     child_process.exec(`cmd /c start https://github.com/login/oauth/authorize?client_id=Iv1.04d89e286bc2781f&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=read%3Auser&state=123byl`)
// });
// archive.finalize();