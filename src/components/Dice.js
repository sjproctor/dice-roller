import React, { Component } from 'react';

class Dice extends Component{
  render(){
    let { roll, dice } = this.props
    return(
      <div>
        <h2>Click to Roll the Dice</h2>
        <img id="diceDiv" onClick={roll} src={dice} alt="dice"/>
      </div>
    )
  }
}

export default Dice
