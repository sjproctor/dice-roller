import React, { Component } from 'react';

class Log extends Component{
  render(){
    return(
      <div>
        <h3>Previous Rolls:</h3>
        <p>{this.props.log}</p>
      </div>
    )
  }
}

export default Log
