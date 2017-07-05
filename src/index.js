import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './app/index.css';
import App from './app/App';
import rootReducer from './app/rootReducer'
import registerServiceWorker from './app/registerServiceWorker';

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
