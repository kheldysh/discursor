import React, { Component } from 'react';
import ChooseNick from '../containers/ChooseNick'
import Chat from './Chat'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Discursor test app</h2>
        </div>
        <div className="App-main">
          <ChooseNick />
          <Chat />
        </div>
      </div>
    );
  }
}

export default App;
