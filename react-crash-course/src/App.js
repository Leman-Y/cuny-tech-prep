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
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }      

//Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed //toggle
      }
      return todo;
    }) });
  }

  render() {
    console.log(this.state.todos);
    return (
      //Returns jsx, can use vanilla javascript but will be harder
      //Add component like a custom tag
      //Need to climb the tree for markComplete to app.js's state
      <div className="App">
        <h1>App bruh</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>  
      </div>
    );
  }

}

export default App;
