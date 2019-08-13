import React, { Component } from 'react';

class Log extends Component{
  render(){
    return(
      <div>
        <h4>Previous Rolls:</h4>
        <p>{this.props.log}</p>
      </div>
    )
  }
}

export default Log
