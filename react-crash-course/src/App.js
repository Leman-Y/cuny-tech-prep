import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'

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

  //Delete Todo
  delTodo = (id) => {
    //Spread operator ... removes the todo but when you refresh it goes back because it is not a server
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render() {
    console.log(this.state.todos);
    return (
      //Returns jsx, can use vanilla javascript but will be harder
      //Add component like a custom tag
      //Need to climb the tree for markComplete to app.js's state
      //<h1>App bruh</h1>
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>  
      </div>
    );
  }

}

export default App;
