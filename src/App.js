import React, { Component } from 'react';
import Dice from './components/Dice'
import Log from './components/Log'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        roll: 1,
        diceLog: []
      }
  }

  diceRoll = () => {
    let { diceLog } = this.state
    let randomNum = Math.floor(Math.random() * 6 + 1 )
    diceLog.push(randomNum)
    console.log(diceLog)
    this.setState({roll: randomNum, diceLog: diceLog})
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

export default App;
