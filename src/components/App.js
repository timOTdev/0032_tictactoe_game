import React, { Component } from 'react'

import Squares from './Squares'

class App extends Component {
  constructor () {
    super()
    this.state = {
      board: ["","","","","","","","",""],
      player: ""
    }
  }
  // Win combos: 012, 345, 678, 036, 147, 258, 048, 246

  componentDidMount() {
    this.updatePlayerChoice()
  }

  updatePlayerChoice = () => {
    const playerChoice = prompt("Would you like to be X's or O's? Type x or o.");
    playerChoice === "x" || playerChoice === "o" ? 
      this.setState({ player: playerChoice })
      : this.updatePlayerChoice()
  }

  markBoard = (newBoard) => {
    let board = [...this.state.board]
    board = newBoard
    this.setState({ board })
  }

  render() {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe Game</h1>
        <p>You are player "{this.state.player}."</p>
        <Squares board={this.state.board} player={this.state.player} markBoard={this.markBoard} />
      </div>
    );
  }
}

export default App