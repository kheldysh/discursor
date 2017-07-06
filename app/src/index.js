import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import Immutable from 'immutable'
import './styles/index.css';
import App from './components/App';
import rootReducer from './reducers/rootReducer'
import registerServiceWorker from './registerServiceWorker';
import { init as initWebSocket } from './actions/webSocket'

const initialState = Immutable.Map({
  nick: '',
  comments: Immutable.List()
})

const store = createStore(
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
