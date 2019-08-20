import React, { Component } from 'react';
import Dice from './components/Dice'
import Log from './components/Log'
import diceStart from './components/dice-start.png'
import dice1 from './components/dice-1.png'
import dice2 from './components/dice-2.png'
import dice3 from './components/dice-3.png'
import dice4 from './components/Dice-4.png'
import dice5 from './components/dice-5.png'
import dice6 from './components/dice-6.png'
import './App.css';

class Board extends Component{
  constructor(props){
    super(props)
      this.state = {
        roll: diceStart,
        diceLog: [],
      }
  }

  diceRoll = () => {
    let { diceLog } = this.state
    let diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]
    let randomNum = Math.floor(Math.random() * 6 + 1)
    console.log(randomNum)
    diceLog.push(randomNum)
    let currentImage = diceImages[randomNum-1]
    this.setState({roll: currentImage, diceLog: diceLog})
  }

  render(){
    return (
      <div>
        <Dice
          roll={this.diceRoll}
          dice={this.state.roll}
        />
        <Log log={this.state.diceLog}/>
      </div>
    )
  }
}

export default Board;
