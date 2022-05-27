import * as ws from './node_modules/ws';
const server = new ws.WebSocketServer({port: 9000})

server.on('connection', socket => {
    console.log('User connected')
    socket.on('message', packet => {
        const res = JSON.parse(packet)
        console.log(res.string)
    })
})
