import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000
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

app.listen(3000, function () {
  console.log('Discursor server listening on port ')
})
