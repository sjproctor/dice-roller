import React, { Component } from 'react';

class Dice extends Component{
  render(){
    let { roll, dice } = this.props
    return(
      <div>
        <h2>Click to Roll the Dice</h2>
        <div id="diceDiv" onClick={roll}>{dice}
        </div>
      </div>
    )
  }
}

export default Dice
