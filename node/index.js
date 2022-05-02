const router = require('./router/index')
const server = require('./server/server')

server.start(router.route)
