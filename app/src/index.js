import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import Immutable from 'immutable'
import rootReducer from './rootReducer'
import registerServiceWorker from './registerServiceWorker';
import { existingComments } from './mockData'

const initialState = Immutable.Map({
  nick: '',
  comments: existingComments
})

let store = createStore(rootReducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
