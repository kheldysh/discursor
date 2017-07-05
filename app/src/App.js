import React, { Component } from 'react';
import ChooseNick from './containers/ChooseNick'
import Chat from './components/Chat'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Iä! Iä!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ChooseNick />
        <Chat />
      </div>
    );
  }
}

export default App;
