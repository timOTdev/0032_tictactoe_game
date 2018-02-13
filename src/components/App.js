import React, { Component } from 'react'

import Row from './Row'

class App extends Component {
  constructor () {
    super()
    this.state = {
      player: "",
      board: {}
    }
  }

  updatePlayerChoice = () => {
    const playerChoice = prompt("Would you like to be X's or O's? Type x or o.");
    playerChoice === "x" || playerChoice === "o" ? 
      this.setState({ player: playerChoice })
      : this.updatePlayerChoice()
  }

  componentDidMount() {
    this.updatePlayerChoice()
  }

  render() {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe Game</h1>
        <p>You are player "{this.state.player}."</p>
        <Row />
        <Row />
        <Row />
      </div>
    );
  }
}

export default App
