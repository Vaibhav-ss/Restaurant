import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponents';
import React, { Component } from 'react';

class App extends Component {

  render(){
  return (
    <BrowserRouter>
    <div>
      <Main />
    </div>
    </BrowserRouter>
  );
}
}

export default App;
