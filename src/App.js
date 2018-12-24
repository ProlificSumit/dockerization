import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.yourName = "Happy";
    this.state = {};
    }
  sayHello(name){
    return "Hello from Container" +name;
  }

  render() {
    const myName = "Joy";

    return (
      <div className="App">
        <h2>Just some sample data: {this.sayHello(myName)}</h2>
        <h2>Just some sample data: {this.yourName}</h2>
      </div>
    );
  }
}

export default App;
