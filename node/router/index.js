const fs = require('fs')
route = (pathname, request, response) => {
    console.log(pathname);
    if (request.method == 'POST') {
        let str = ''
        request.on('data', (data) => {
            str += data
        })
        request.on('end', () => {
            let postData = JSON.parse(str)
            console.log(postData);
            console.log(pathname);
            switch (pathname) {
                case '/api/login': {
                    fs.readFile('./db.json', "utf-8", (err, data) => {
                        if (err) {
                            console.log('err', err);
                            return
                        }
                        let msg = {}
                        let users = JSON.parse(data).users
                        console.log(users);
                        for (let i = 0; i < users.length; i++) {
                            console.log(users[i].userName);
                            if (postData.userName === users[i].userName) {
                                if (postData.passWord === users[i].passWord) {
                                    msg = Object.assign({ code: '1' }, msg)
                                    break
                                } else {
                                    msg = Object.assign({ code: '2' }, msg)
                                    break
                                }
                            }
                            if (i === users.length - 1) {
                                msg = Object.assign({ code: '3' }, msg)
                            }
                        }
                        response.writeHead(200, {
                            "Access-Control-Allow-Origin": "http://localhost:4000",
                            "Access-Control-Allow-Headers": "Content-Type",
                            "Content-Type": "application/json"
                        });
                        response.end(JSON.stringify(msg))
                    })
                    break;
                }
                case '/api/regist': {
                    fs.readFile('./db.json', 'utf-8', (err, data) => {
                        if (err) {
                            console.log('err', err);
                            return
                        }
                        console.log(data);
                        let msg = {}
                        let users = JSON.parse(data.toString()).users
                        let length = users.length
                        console.log(users);
                        for (let i = 0; i < length; i++) {
                            if (users[i].userName === postData.userName) {
                                msg = Object.assign({ code: '3' }, msg)
                                break
                            }
                            if (i === length - 1) {
                                let user = { userName: postData.userName, passWord: postData.passWord }
                                users.push(user)
                                console.log(user);
                                fs.writeFileSync('./db.json', JSON.stringify({ users }), (err) => {
                                    err && console.log('err', err);
                                })
                                msg = Object.assign({ code: '1' }, msg)
                            }
                        }
                        response.writeHead(200, {
                            "Access-Control-Allow-Origin": "http://localhost:4000",
                            "Access-Control-Allow-Headers": "Content-Type",
                            "Content-Type": "application/json"
                        });
                        response.end(JSON.stringify(msg))
                    })
                }
            }

        })

    }
    else if (request.method === 'OPTIONS') {
        // response.setHeader("Access-Control-Allow-Origin", 'http://localhost:4000')
        response.writeHead(200, {
            "Access-Control-Allow-Origin": "http://localhost:4000",
            "Access-Control-Allow-Headers": "Content-Type",
            // "Access-Control-Allow-Methods": "PUT"
        });
        response.end();
    }
}

exports.route = route