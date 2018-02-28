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
  
  // Game Mechanics
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
        board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        this.setState({ board })
        return alert(turn + " wins!")
      }, 1)
    } 
  }

  switchTurn = (board, index, human, computer, turn) => {
    if (board[index] !== "X" && board[index] !== "O") {
      let newTurn
      board[index] = turn
      turn === computer ? newTurn = human : newTurn = computer
      this.setState({ turn: newTurn })
    }
  }

  aiTurn = (board) => {
    let { computer, human, turn } = this.state
    let newBoard = [...board]
    let bestMove = this.miniMax(board, computer).index
    newBoard[bestMove] = computer
    turn = human
    this.checkWin(newBoard, computer)
    this.setState({ board: newBoard, turn })
  }

  updateSquare = (e, index) => {
    e.preventDefault()
    const { human, computer, turn } = this.state
    const board = [...this.state.board]
    this.setState({ board })
    this.switchTurn(board, index, human, computer, turn)
    this.checkWin(board, human)
    this.checkWin(board, computer)
    this.aiTurn(board)
  }

  restartGame = (e) => {
    e.preventDefault()
    let newBoard = [...this.state.board]
    newBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    this.setState({ board: newBoard })
  }

  // AI Mechanics
  findEmptySquares = (board) => {
    let emptySquares = []
    board.forEach((value, index) => value !== "X" && value !== "O" ? emptySquares.push(index) : null)
    return emptySquares
  }

  winning = (board, turn) => {
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
      return true
    }
    else {
      return false
    }
  }

  miniMax = (board, turn) => {
    const { human, computer } = this.state
    const newBoard = [...board]
    const emptySquares = this.findEmptySquares(newBoard)
    const moves = []

    if (this.winning(newBoard, human)) {
      return { score: -10 }
    } else if (this.winning(newBoard, computer)) {
      return { score: 10 }
    } else if (emptySquares.length === 0) {
      return { score: 0 }
    }

    for (let i = 0; i < emptySquares.length; i++) {
      const move = {}
      move.index = emptySquares[i]
      newBoard[emptySquares[i]] = turn

      if (turn === computer) {
        const result = this.miniMax(newBoard, human)
        move.score = result.score
      } else {
        const result = this.miniMax(newBoard, computer)
        move.score = result.score
      }
      newBoard[emptySquares[i]] = move.index
      moves.push(move)
    }
    
    let bestMove
    if (turn === computer) {
      let bestScore = -10000
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    } else {
      let bestScore = 10000
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    }
    return moves[bestMove]
  }

  render() {
    return (
      <div className="App">
        <Board {...this.state} 
          updateSquare={this.updateSquare}
          restartGame={this.restartGame}
        />
      </div>
    );
  }
}

export default App