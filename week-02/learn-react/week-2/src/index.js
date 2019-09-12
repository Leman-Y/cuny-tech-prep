import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


/*
class App extends React.Component {
  constructor(props) {
    super(props); // required so that props work
    this.state = {
      clicks: 0,
    };
  }

  handleClick(event) {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }


  render() {
    return (
      <div>
        <p>The button has been clicked { this.state.clicks } times</p>
        <button onClick={ (e) => this.handleClick(e) }>{ this.props.btnText }!!!</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App btnText="Click me" />,
  document.getElementById("root")
);
*/

class Board extends React.Component {
  render() {
    let className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
}

class BoardSwitcher extends React.Component {
  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === 0;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }
    
    return (
      <div>
        <div className="boards">{boards}</div>
        <button>Toggle</button>
      </div>
    );
  }
}

ReactDOM.render(
  <BoardSwitcher numBoards={3} />,
  document.getElementById('container')
);