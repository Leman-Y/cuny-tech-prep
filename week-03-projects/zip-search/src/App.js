import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function City(props) {
  return (<div></div>);
}

function ZipSearchField(props) {
  return (
  <div>
    <input 
      type="text"
      placeholder="Try 10001"
      onChange={props.onChange} 
    />   
  </div>);
}


class App extends Component {
  onZipSearchFieldChange = (event) => {
    const zipcode = event.target.value; 
    fetch(`http://ctp-zip-api.herokuapp.com/zip/${zipcode}`)
      .then(response => {
        if(response.ok)
        {
          return response.json();
        }
      })
      .then(cities => {
        console.log(cities);
      })
      .catch(error => {
        console.log(`Error`, error);
      })

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
      {/*    <h3>Zip Code:</h3>   
            <zipSearchField onChange={ (event) => {this.oonZipSearchFieldChange(event) } } />
      */}
        <ZipSearchField onChange={this.onZipSearchFieldChange} />

        <div>
          <City />
          <City />
        </div>
      </div>
    );
  }
}

export default App;
