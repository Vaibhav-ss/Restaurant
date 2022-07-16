import './App.css';
import Main from './components/MainComponents';
import React, { Component } from 'react';
import {DISHES} from './shared/dishes';

class App extends Component {

  render(){
  return (
    <div>
      <Main />
    </div>
  );
}
}

export default App;
