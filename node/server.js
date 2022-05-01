const http = require('http')
const fs = require('fs')
const url = require('url')

const start = () => {
    http.createServer((request, response) => {
        console.log('server');
        console.log(request.method);
        const pathname = url.parse(request.url).pathname
        if (request.method == 'POST') {
            let str = ''
            request.on('data', (data) => {
                str += data
            })
            request.on('end', () => {
                let postData = JSON.parse(str)
                console.log(postData);
                console.log(pathname);
                response.end('end req')
                switch (pathname) {
                    case '/api/login': {
                        fs.readFile('./db.json', "utf-8", (err, data) => {
                            let msg = {}
                            let users = JSON.parse(data.toString()).users
                            console.log(users);
                            for (let i = 0; i < users.length; i++) {
                                if (postData.userName === users[i].userName) {
                                    if (postData.passWord === users[i].passWord) {
                                        msg = Object.assign({ code: '1' }, msg)
                                        console.log(msg);
                                        break
                                    } else {
                                        msg = Object.assign({ code: '2' }, msg)
                                        console.log(msg);
                                        break
                                    }
                                }
                                if (i === users.length - 1) {
                                    msg = Object.assign({ code: '3' }, msg)
                                    console.log(msg);

                                }
                            }
                            response.writeHead(200, { "Content-Type": "'application/json" })
                            response.end('hello')
                        })
                        break;
                    }
                }

            })
        } else if (request.method === 'OPTIONS') {
            // response.setHeader("Access-Control-Allow-Origin", 'http://localhost:4000')
            response.writeHead(200, {
                "Access-Control-Allow-Origin": "http://localhost:4000",
                "Access-Control-Allow-Headers": "Content-Type",
                // "Access-Control-Allow-Methods": "PUT"
            });
            response.end();
        }
    }).listen(8888)
    console.log("Server has started.");
}

start()




