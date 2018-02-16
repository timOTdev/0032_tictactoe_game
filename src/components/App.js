import React, { Component } from 'react'

import Squares from './Squares'

class App extends Component {
  constructor () {
    super()
    this.state = {
      board: ["","","","","","","","",""],
      player: "",
      computer: "",
      currentTurn: ""
    }
  }
  
  componentDidMount() {
    this.updatePlayerChoice()
  }
  
  updatePlayerChoice = () => {
    const playerChoice = prompt("Would you like to be X's or O's? Type x or o.")
    const firstTurn = prompt("Want to go first? Type y.")
    if (playerChoice === "x") {
      if(firstTurn === "y") {
        this.setState({ player: "x", computer: "o", currentTurn: "x" })
      } else {
        this.setState({ player: "x", computer: "o", currentTurn: "o" })
      }
    } else if (playerChoice === "o") {
      if(firstTurn === "y") {
        this.setState({ player: "o", computer: "x", currentTurn: "o" })
      } else {
        this.setState({ player: "o", computer: "x", currentTurn: "x" })
      }
    } else {
      this.updatePlayerChoice();
    }
  }
  
  // Win combos: 012, 345, 678, 036, 147, 258, 048, 246
  checkWinConditions = (updatedBoard) => {
    if (updatedBoard.every(item => item !== "")) {
      let board = [...this.state.board]
      setTimeout(() => {
        alert("It's a tie game!")
        board = ["","","","","","","","",""]
        this.setState({ board })
      }, 200)
    } else if (updatedBoard[0] === "x" && updatedBoard[1] === "x" && updatedBoard[2] === "x") {
      let board = [...this.state.board]
      setTimeout(() => {
        alert("Player X wins!")
        board = ["","","","","","","","",""]
        this.setState({ board })
      }, 200)
    } else if (updatedBoard[3] === "x" && updatedBoard[4] === "x" && updatedBoard[5] === "x") {
      let board = [...this.state.board]
      setTimeout(() => {
        alert("Player X wins!")
        board = ["","","","","","","","",""]
        this.setState({ board })
      }, 200)
    } else if (updatedBoard[6] === "x" && updatedBoard[7] === "x" && updatedBoard[8] === "x") {
      let board = [...this.state.board]
      setTimeout(() => {
        alert("Player X wins!")
        board = ["","","","","","","","",""]
        this.setState({ board })
      }, 200)
    } else if (updatedBoard[0] === "x" && updatedBoard[3] === "x" && updatedBoard[6] === "x") {
      let board = [...this.state.board]
      setTimeout(() => {
        alert("Player X wins!")
        board = ["","","","","","","","",""]
        this.setState({ board })
      }, 200)
    } else if (updatedBoard[1] === "x" && updatedBoard[4] === "x" && updatedBoard[7] === "x") {
      let board = [...this.state.board]
      setTimeout(() => {
        alert("Player X wins!")
        board = ["","","","","","","","",""]
        this.setState({ board })
      }, 200)
    } else if (updatedBoard[2] === "x" && updatedBoard[5] === "x" && updatedBoard[8] === "x") {
      let board = [...this.state.board]
      setTimeout(() => {
        alert("Player X wins!")
        board = ["","","","","","","","",""]
        this.setState({ board })
      }, 200)
    } else if (updatedBoard[0] === "x" && updatedBoard[4] === "x" && updatedBoard[8] === "x") {
      let board = [...this.state.board]
      setTimeout(() => {
        alert("Player X wins!")
        board = ["","","","","","","","",""]
        this.setState({ board })
      }, 200)
    } else if (updatedBoard[2] === "x" && updatedBoard[4] === "x" && updatedBoard[6] === "x") {
      let board = [...this.state.board]
      setTimeout(() => {
        alert("Player X wins!")
        board = ["","","","","","","","",""]
        this.setState({ board })
      }, 200)
    } else if (updatedBoard[0] === "o" && updatedBoard[1] === "o" && updatedBoard[2] === "o") {
      let board = [...this.state.board]
      setTimeout(() => {
        board = ["","","","","","","","",""]
        this.setState({ board })
        alert("Player O wins!")
      }, 200)
    } else if (updatedBoard[3] === "o" && updatedBoard[4] === "o" && updatedBoard[5] === "o") {
      let board = [...this.state.board]
      setTimeout(() => {
        board = ["","","","","","","","",""]
        this.setState({ board })
        alert("Player O wins!")
      }, 200)
    } else if (updatedBoard[6] === "o" && updatedBoard[7] === "o" && updatedBoard[8] === "o") {
      let board = [...this.state.board]
      setTimeout(() => {
        board = ["","","","","","","","",""]
        this.setState({ board })
        alert("Player O wins!")
      }, 200)
    } else if (updatedBoard[0] === "o" && updatedBoard[3] === "o" && updatedBoard[6] === "o") {
      let board = [...this.state.board]
      setTimeout(() => {
        board = ["","","","","","","","",""]
        this.setState({ board })
        alert("Player O wins!")
      }, 200)
    } else if (updatedBoard[1] === "o" && updatedBoard[4] === "o" && updatedBoard[7] === "o") {
      let board = [...this.state.board]
      setTimeout(() => {
        board = ["","","","","","","","",""]
        this.setState({ board })
        alert("Player O wins!")
      }, 200)
    } else if (updatedBoard[2] === "o" && updatedBoard[5] === "o" && updatedBoard[8] === "o") {
      let board = [...this.state.board]
      setTimeout(() => {
        board = ["","","","","","","","",""]
        this.setState({ board })
        alert("Player O wins!")
      }, 200)
    } else if (updatedBoard[0] === "o" && updatedBoard[4] === "o" && updatedBoard[8] === "o") {
      let board = [...this.state.board]
      setTimeout(() => {
        board = ["","","","","","","","",""]
        this.setState({ board })
        alert("Player O wins!")
      }, 200)
    } else if (updatedBoard[2] === "o" && updatedBoard[4] === "o" && updatedBoard[6] === "o") {
      let board = [...this.state.board]
      setTimeout(() => {
        board = ["","","","","","","","",""]
        this.setState({ board })
        alert("Player O wins!")
      }, 200)
    }
  }

  markBoard = (newBoard, currentTurn) => {
    let board = [...this.state.board]
    board = newBoard
    if (currentTurn === "x") {
      currentTurn = "o"
    } else if (currentTurn === "o") {
      currentTurn = "x"
    } 
    this.setState({ board, currentTurn })

    this.checkWinConditions(board)
  }

  render() {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe Game</h1>
        <p>You are player "{this.state.player}."</p>
        <Squares 
          board={this.state.board} 
          player={this.state.player} 
          currentTurn={this.state.currentTurn}
          markBoard={this.markBoard} />
      </div>
    );
  }
}

export default App