import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import './index.css';
import App from './components/App';
import Immutable from 'immutable'
import rootReducer from './rootReducer'
import registerServiceWorker from './registerServiceWorker';
import { init as initWebSocket } from './actions/webSocket'

const initialState = Immutable.Map({
  nick: '',
  comments: Immutable.List()
})

let store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(logger)
)
initWebSocket(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
