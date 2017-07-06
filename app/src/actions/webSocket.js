import { wsURL } from '../config'

const ws = new WebSocket(wsURL)

const init = (store) => {
  const dispatchAction = (event) => {
    const action = JSON.parse(event.data)
    store.dispatch(action)
  }
  ws.addEventListener('message', dispatchAction)
}

const send = (payload) => {
  ws.send(JSON.stringify(payload))
}

export { init, send }
