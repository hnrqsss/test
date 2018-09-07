import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    user: {
      name: 'ddddd',
      age: 'aaaaa',
      address: {
        street: 'dsds',
      }
    }
  }
  

  handlerInput = (element) => {
    this.setState({
      [element.target.name] : element.target.value
    })
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state)}
        <input name='user.address.street' placeholder='address' onInput={this.handlerInput} />     
      </div>
    );
  }
}

export default App;
