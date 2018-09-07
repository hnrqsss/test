import React, { Component } from 'react';
import logo from './logo.svg';
import { Map, fromJS } from 'immutable'
import './App.css';
import update from 'immutability-helper'

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

    const {name, value} = element.target
   
    const nestedArray = name.split('.');

    let user = {...this.state.user}
    
    user = fromJS(user)
    user = user.setIn(nestedArray , value);      
    user = user.toJS()
    
    this.setState({user})
    
  }

  render() {
    return (
      <div className="App">
        <input name='name' placeholder='Name' onInput={this.handlerInput} />
        <input name='age' placeholder='age' onInput={this.handlerInput} />
        <input name='address.street' placeholder='address' onInput={this.handlerInput} />
      </div>
    );
  }
}

export default App;
