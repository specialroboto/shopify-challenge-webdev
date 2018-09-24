import React, { Component } from 'react';

import AppHeader from "./components/AppHeader.js";
import AppMain from "./components/AppMain.js";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppMain />
      </div>
    );
  }
}

export default App;

