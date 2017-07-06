const defaultPort = 3001
const defaultHost = 'localhost'
// Uglify can't seem to handle ES6 string templating yet
const defaultAddr = defaultHost + ':' + parseInt(defaultPort)
const httpURL = 'http://' + defaultAddr // `http://${defaultHost}:${defaultPort}`
const wsURL =  'ws://' + defaultAddr // `ws://${defaultHost}:${defaultPort}`

export {
  defaultPort,
  defaultHost,
  httpURL,
  wsURL
}
