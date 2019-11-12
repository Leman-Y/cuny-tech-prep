import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*
Notes:
- You can use React DevTools in chrome, inspect to open dev tools F12, and React Tabs (Components and Profiler) will appear as last tabs to the right. USe Componenets to inspect component tree
*/

//Source code for React.Component: https://github.com/facebook/react/blob/master/packages/react/src/ReactBaseClasses.js?source=post_page-----ece595fe9e55----------------------
/*
class Square extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      value: null, 
    }
  }
  
  //onClick={function() {alert('click')}}
  //Arrow function - React will only call this function after a click. Forgetting ()=> and writing onCLick={alert('click')} is a common mistake and will fire alert everytime the component rerenders
  
        //onClick={() => this.setState({value: 'X'})}> 
        //{this.state.value}
  
  render() {
    return (
      <button 
        className="square" 
        onClick = {() => this.props.onClick()}
      >
        {this.props.value}
      </button>  
    );
  }
}
*/

function Square(props){
  return(
    <button className = "square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleCLick(i){
    const squares = this.state.squares.slice(); //Why do you need to add slice() when it returns the same thing? We are creating a copy to modify instead of modifying existing array
    //const squares = this.state.squares;
    if(calculateWinner(squares) || squares[i]) //If there is a winner or square if full dont do anything
    {
      return; 
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  //Pass down value and onClick props from Board to Square
  renderSquare(i) {
    return (
      <Square 
      value = {this.state.squares[i]} 
      onClick = {() => this.handleCLick(i)}
      />
      )
    //<Square value={i} />; //pass prop called value to the square
    //You create nine instances of Square class. Then for each square you create, you pass in an integer. That integer will be displayed on the board.
  }

  //Will render nine squares 
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    }
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}



// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
