import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Source code for React.Component: https://github.com/facebook/react/blob/master/packages/react/src/ReactBaseClasses.js?source=post_page-----ece595fe9e55----------------------
class Square extends React.Component {
  //onClick={function() {alert('click')}}
  //Arrow function - React will only call this function after a click. Forgetting ()=> and writing onCLick={alert('click')} is a common mistake and will fire alert everytime the component rerenders
  render() {
    return (
      <button className="square" onClick={() => alert('click')}> 
        {/* TODO */}
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />; //pass prop called value to the square
    //You create nine instances of Square class. Then for each square you create, you pass in an integer. That integer will be displayed on the board.
  }

  //Will render nine squares 
  render() {
    const status = 'Next player: X';

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

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
