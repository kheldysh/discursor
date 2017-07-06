// import WebSocket from 'ws'
import { fromJS } from 'immutable'
import { wsURL } from '../config'

const ws = new WebSocket(wsURL)

const init = (store) => {
  // ws.addEventListener('open', (event) => ws.send('FOOOOO'))

  const dispatchAction = (event) => {
    const action = JSON.parse(event.data)
    action.comment = fromJS(action.comment)
    console.log(action)
    store.dispatch(action)
  }

  ws.addEventListener('message', dispatchAction)
}

const send = (payload) => {
  console.log(payload)
  ws.send(payload)
}

export { init, send }
