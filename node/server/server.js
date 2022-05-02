const http = require('http')

const url = require('url')

const start = (route) => {
    http.createServer((request, response) => {
        console.log('server');
        console.log(request.method);
        const pathname = url.parse(request.url).pathname
        route(pathname, request, response)

    }).listen(8888)
    console.log("Server has started.");
}

exports.start = start




