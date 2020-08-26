const http = require('http');
const net = require('net');
const { URL } = require('url');
const fs = require('fs');
const unzip = require('unzipper');
const https = require('https');
const { resolveSoa } = require('dns');

// Create an HTTP tunneling proxy
const proxy = http.createServer((req, res) => {
    // let writeStream = fs.createWriteStream(`../server/public/packages/package`);
    if (req.url.match(/^\/auth/)) {
        auth(req, res);
        return;
    }
    if (!req.url.match(/^\/?/)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('not found');
        return;
    }

    // req.headers.Token
    // https://api.github.com/user
    const options = {
        hostname: 'api.github.com',
        port: 443,
        path: `/user`,
        method: 'GET',
        headers: {
            'Authorization': `token ${req.headers.token}`,
            'User-Agent': 'toy-publish-byl'
        }
    };
    const authorizationRequest = https.request(options, authorizationRes => {
        let memo = [];
        authorizationRes.on('data', data => {
            memo.push(data);
        });
        authorizationRes.on('end', () => {
            memo = memo.join();
            let user = JSON.parse(memo);
            console.log(user);
            //权限检查
            let writeStream = unzip.Extract({ path: '../server/public' });
            req.pipe(writeStream);
            req.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('okay');
            });
            // req.on('error', () => {
            //     console.log(123)
            // })
        })
    });
    authorizationRequest.on('error', e => {

    });
    authorizationRequest.end();

    // let writeStream = unzip.Extract({ path: '../server/public' });
    // req.pipe(writeStream);
    // req.on('end', () => {
    //     res.writeHead(200, { 'Content-Type': 'text/plain' });
    //     res.end('okay');
    // });
    // req.on('error', () => {
    //     console.log(123)
    // })
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('okay');
});

function auth(authRequest, authResponse) {
    let code = authRequest.url.match(/code=([^&]+)/)[1];
    let state = '123byl';
    let client_secret = '9daa31d737ca3f704c3f67395e545b1090d20fa1';
    let client_id = 'Iv1.04d89e286bc2781f';
    let redirect_uri = encodeURIComponent('http://localhost:8081/auth');
    let params = `code=${code}&state=${state}&client_secret=${client_secret}&client_id=${client_id}&redirect_uri=${redirect_uri}`;
    let url = `https://github.com/login/oauth/access_token?${params}`;
    const options = {
        hostname: 'github.com',
        port: 443,
        path: `/login/oauth/access_token?${params}`,
        method: 'POST'
    };
    const tokenRequest = https.request(options, tokenRes => {
        let memo = [];
        tokenRes.on('data', data => {
            // let result = data.toString().match(/access_token=([^&]+)/);
            // if (result) {
            //     let token = result[1];
            //     res.writeHead(
            //         200,
            //         {
            //             'Content-Type': 'text/plain',
            //             'access_token': token
            //         }
            //     );
            //     res.end('okay');
            // }
            memo.push(data);
        });
        tokenRes.on('data', () => {
            let result = memo.join().match(/access_token=([^&]+)/);
            if (result) {
                let token = result[1];
                authResponse.writeHead(
                    200,
                    {
                        'Content-Type': 'text/html',
                        'access_token': token
                    }
                );
                authResponse.end(`<a href="http://localhost:8080/publish?token=${token}">publish</a>`);
            } else {
                authResponse.writeHead(400, { 'Content-Type': 'text/plain' });
                authResponse.end('error');
            }
        })
    });
    tokenRequest.on('error', e => {
        // console.log(e);
    });
    tokenRequest.end();



    /**
     * @description node do not support XMLHttpRequest
     * 
     * 
     *let xhr = new XMLHttpRequest();
      xhr.open('POST', `https://github.com/login/oauth/access_token?${params}`, true);
      xhr.send(null);
      xhr.addEventListener('readystatechange', (event) => {
      if (event.readyState === 4) {
          console.log(event.responseText);
      }
    })
     */

    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('okay');
}

proxy.listen(8081);