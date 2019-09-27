import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }      

  render() {
    //console.log(this.state.todos)
    return (
      //Returns jsx, can use vanilla javascript but will be harder
      //Add component like a custom tag
      <div className="App">
        <h1>App</h1>
        <Todos />  
      </div>
    );
  }

}

export default App;
