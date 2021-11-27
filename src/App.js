import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {    this.setState({value: event.target.value.length});  }
  render() {
    
    return (
      <div className="container">
        <textarea  onChange={this.handleChange} rows="3"  ></textarea>
        <div value={this.state.value} className="counter">{this.state.value}</div>
      </div>
      
    );
  };
  
 
}

export default App;
