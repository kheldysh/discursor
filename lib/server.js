import * as http from 'http'

const defaultListener = (req, res) => {
  console.log(req.body)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({foo: "you're on your own"}))
}

const server = http.createServer((req, res) => {
  console.log(req.body)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({foo: "you're on your own"}))
})

export default server
