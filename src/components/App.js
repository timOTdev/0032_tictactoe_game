import React, { Component } from 'react'

import Board from './Board'
import StartMenu from './StartMenu'
class App extends Component {  
  constructor() {
    super()
    this.state = {
      board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      human: null,
      computer: null,
      turn: null,
      numberOfPlayers: null,
      humanGoesFirst: null,
      endOfGame: false,
    }
  }

  // Start Menu
  updatePlayers = (numberOfPlayers) => {
    this.setState({ numberOfPlayers })
  }

  updateMarkers = (human, computer) => {
    this.setState({ human, computer })
  }

  updateTurn = (humanGoesFirst, turn) => {
    this.setState({ humanGoesFirst, turn })
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
        console.log(turn + " wins!")
        this.setState({ endOfGame: true })
        this.highlightWinningSquares(board, turn)
      }
      else if (this.findEmptySquares(board).length === 0) {
        console.log("Tie Game!")
        this.setState({ endOfGame: true })
    }
  }

  unhighlightWiningSquares = () => {
    document.querySelector(".button0").style.background = null;
    document.querySelector(".button1").style.background = null;
    document.querySelector(".button2").style.background = null;
    document.querySelector(".button3").style.background = null;
    document.querySelector(".button4").style.background = null;
    document.querySelector(".button5").style.background = null;
    document.querySelector(".button6").style.background = null;
    document.querySelector(".button7").style.background = null;
    document.querySelector(".button8").style.background = null;
  }

  highlightWinningSquares = (board, turn) => {
    if (board[0] === turn && board[1] === turn && board[2] === turn) {
      document.querySelector(".button0").style.background = "yellow";
      document.querySelector(".button1").style.background = "yellow";
      document.querySelector(".button2").style.background = "yellow";
    }
    else if (board[3] === turn && board[4] === turn && board[5] === turn) {
      document.querySelector(".button3").style.background = "yellow";
      document.querySelector(".button4").style.background = "yellow";
      document.querySelector(".button5").style.background = "yellow";
    }
    else if (board[6] === turn && board[7] === turn && board[8] === turn) {
      document.querySelector(".button6").style.background = "yellow";
      document.querySelector(".button7").style.background = "yellow";
      document.querySelector(".button8").style.background = "yellow";
    }
    else if (board[0] === turn && board[3] === turn && board[6] === turn) {
      document.querySelector(".button0").style.background = "yellow";
      document.querySelector(".button3").style.background = "yellow";
      document.querySelector(".button6").style.background = "yellow";
    }
    else if (board[1] === turn && board[4] === turn && board[7] === turn) {
      document.querySelector(".button1").style.background = "yellow";
      document.querySelector(".button4").style.background = "yellow";
      document.querySelector(".button7").style.background = "yellow";
    }
    else if (board[2] === turn && board[5] === turn && board[8] === turn) {
      document.querySelector(".button2").style.background = "yellow";
      document.querySelector(".button5").style.background = "yellow";
      document.querySelector(".button8").style.background = "yellow";
    }
    else if (board[0] === turn && board[4] === turn && board[8] === turn) {
      document.querySelector(".button0").style.background = "yellow";
      document.querySelector(".button4").style.background = "yellow";
      document.querySelector(".button8").style.background = "yellow";
    }
    else if (board[2] === turn && board[4] === turn && board[6] === turn)  {
      document.querySelector(".button2").style.background = "yellow";
      document.querySelector(".button4").style.background = "yellow";
      document.querySelector(".button6").style.background = "yellow";
    }
  }

  aiRandomSquare = (board) => {
    let { computer, human } = this.state
    let randomSquare = Math.floor(Math.random() * 9)
    board[randomSquare] = computer
    this.setState({ board, turn: human })
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
    let { human, computer, turn, numberOfPlayers } = this.state
    let newBoard = [...this.state.board]
    if (newBoard[index] !== "X" && newBoard[index] !== "O") {
      newBoard[index] = turn
      if (turn === human) { turn = computer } 
      else if (turn === computer) { turn = human }
      this.setState({ board: newBoard, turn })
      this.checkWin(newBoard, human)

      if (numberOfPlayers === 1) { this.aiTurn(newBoard) } 
      if (numberOfPlayers === 2) { this.checkWin(newBoard, computer) }
    }
  }

  returnToMenu = (e) => {
    e.preventDefault()
    let newBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    this.setState({ board: newBoard, human: null, computer: null, turn: null, numberOfPlayers: null, humanGoesFirst: null, endOfGame: false})
    this.unhighlightWiningSquares()
  }

  restartGame = () => {
    const { numberOfPlayers, humanGoesFirst } = this.state
    let newBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    this.setState({ board: newBoard, endOfGame: false })
    this.unhighlightWiningSquares()
    if (numberOfPlayers === 1 && !humanGoesFirst) {
      this.aiRandomSquare(newBoard)
    }
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
      { this.state.humanGoesFirst !== null ? (
        <Board {...this.state} 
          updateSquare={this.updateSquare}
          returnToMenu={this.returnToMenu}
          restartGame={this.restartGame}
          aiRandomSquare={this.aiRandomSquare}
        />)
        : (<StartMenu 
            {...this.state} 
            updatePlayers={this.updatePlayers}
            updateMarkers={this.updateMarkers}
            updateTurn={this.updateTurn}
        />)
      }
      </div>
    );
  }
}

export default App