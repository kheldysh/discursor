import ws from 'ws'
import http from 'http'
import express from 'express'
import { defaultHost, defaultPort } from './common/config'
var app = express()
var port = process.env.PORT || defaultPort

app.use(express.static(__dirname + "/"))

const server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)

const wsServer = new ws.Server({server: server})
console.log("websocket server created")

wsServer.on("connection", function(socket) {
  console.log("websocket connection open")

  socket.on('message', (message) => {
    console.log(message)
    wsServer.clients.forEach(client => {
      if (client !== socket && client.readyState === ws.OPEN) {
        client.send(message)
      }
    })
  })

  socket.on("close", function() {
    console.log("websocket connection close")
  })
})
