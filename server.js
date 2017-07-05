import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'
import { host, port } from './common/config'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/nick', (req, res) => {
  console.log("nick request with "+req.body.nick)
  res.send('Using nick: '+req.body.nick)
})

app.post('/start_chat', (req, res) => {

})

const server = http.createServer(app)

server.listen(port, host, () => {
  console.log('Discursor server listening on port '+port)
})
