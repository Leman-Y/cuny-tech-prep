import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'

function App() {
  return (
    //Returns jsx, can use vanilla javascript but will be harder
    //Add component like a custom tag
    <div className="App">
      <h1>App</h1>
      <Todos />  
    </div>
  );
}

export default App;
