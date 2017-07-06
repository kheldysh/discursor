import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from '../App';
import rootReducer from '../../reducers/rootReducer'

// Skip testing the rendering of the whole App for now,
// missing WebSocket needs resolving
it.skip().('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(rootReducer)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div);
});
