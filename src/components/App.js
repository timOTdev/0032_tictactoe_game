import React, { Component } from 'react'

import Board from './Board'

class App extends Component {  
  constructor() {
    super()
    this.state = {
      board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      human: "X",
      computer: "O",
      turn: "X"
    }
  }

  checkWin = (board, turn) => {
    if (
      (board[0] === turn && board[1] === turn && board[2] === turn) ||
      (board[3] === turn && board[4] === turn && board[5] === turn) ||
      (board[6] === turn && board[7] === turn && board[8] === turn) ||
      (board[0] === turn && board[3] === turn && board[6] === turn) ||
      (board[1] === turn && board[4] === turn && board[7] === turn) ||
      (board[2] === turn && board[5] === turn && board[8] === turn) ||
      (board[0] === turn && board[4] === turn && board[8] === turn) ||
      (board[2] === turn && board[4] === turn && board[6] === turn) 
      ) {
      setTimeout(() => {
        board = ["","","","","","","","",""]
        this.setState({ board })
        return alert(turn + " wins!")
      }, 1)
    } 
  }

  findEmptySquares = (board) => {
    let emptySquares = []
    board.forEach( (value, index) => {
      if (value !== "X" && value !== "O") {
        emptySquares.push(index)
      } 
      else {
        return null
      }
    })
    console.log(emptySquares)
    return emptySquares
  }

  updateSquare = (e, index) => {
    e.preventDefault()
    const { human, computer, turn } = this.state
    const board = [...this.state.board]
    this.setState({ board })
    
    if (board[index] !== "X" && board[index] !== "O") {
      let newTurn
      board[index] = turn
      turn === computer ? newTurn = human : newTurn = computer
      this.setState({ turn: newTurn })
    }
    
    this.checkWin(board, human)
    this.checkWin(board, computer)
  }

  render() {
    return (
      <div className="App">
        <Board {...this.state} 
          updateSquare={this.updateSquare}
        />
      </div>
    );
  }
}

export default App