import React, { Component } from 'react';
import ChooseNick from './containers/ChooseNick'
import Chat from './components/Chat'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Discursor test app</h2>
        </div>
        <ChooseNick />
        <Chat />
      </div>
    );
  }
}

export default App;
