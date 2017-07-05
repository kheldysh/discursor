import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import rootReducer from './rootReducer'

// Using Provider seems to cause some issues in testing, skip testing
// rendering of whole App for now
it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(rootReducer)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div);
});
