import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About.js'
//import uuid from 'uuid';
import axios from 'axios'

//npm install axios, reacter router dom, uuid

//import uuid to generate random ids

/*
  Create production build w npm run build
  -create extra folder with static folder 
  -This is what is actually going to be run in the browser
  -Loaded by react front end dev server w/ npm start
*/

class App extends Component {
  state = {
    todos: [

    ]
  }     

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));

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
    //this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}) ) 
    //If was real backend. Some kind of REST api, it will delete from database and then delete it from the ui
  }

  //Add Todo
  addTodo = (title) => {
    //Add new todo
    /*
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false 
    }
    */
    //Make request to jsonplaceholder, sent response back with todo info including id and got added to our ui
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data ]}) );
  }

  render() {
    console.log(this.state.todos);
    return (
        //Returns jsx, can use vanilla javascript but will be harder
        //Add component like a custom tag
        //Need to climb the tree for markComplete to app.js's state
        //<h1>App bruh</h1>

        //Use exact path so they dont show up on the same page together
        //Use react router dom for multiple web pages
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>  
              </React.Fragment>
              )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
