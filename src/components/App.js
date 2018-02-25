import React, { Component } from 'react'

import Squares from './Squares'

class App extends Component {
  constructor () {
    super()
    this.state = {
      // board: ["o","","x","x","","x","","o","o"],
      board: ["x","","","","x","","o","","o"],
      // board: ["","","","","","","","",""],
      human: "x",
      computer: "o",
      turn: "x"
    }
  }
  
  componentDidMount() {
    this.updatePlayerChoice()
  }
  
  updatePlayerChoice = () => {
    // const playerChoice = prompt("Would you like to be X's or O's? Type x or o.")
    // const firstTurn = prompt("Want to go first? Type y.")
    // if (playerChoice === "x") {
    //   if(firstTurn === "y") {
    //     this.setState({ human: "x", computer: "o", turn: "x" })
    //   } else {
    //     this.setState({ human: "x", computer: "o", turn: "o" })
    //   }
    // } else if (playerChoice === "o") {
    //   if(firstTurn === "y") {
    //     this.setState({ human: "o", computer: "x", turn: "o" })
    //   } else {
    //     this.setState({ human: "o", computer: "x", turn: "x" })
    //   }
    // } else {
    //   this.updatePlayerChoice();
    // }
  }

  findEmptySquares = (board) => {
    let emptySquares = [];
    board.forEach( (value, index) => value === "" ? emptySquares.push(index) : null)
    return emptySquares
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
  
  miniMax = (board, depth, turn) => {
    let { human, computer } = this.state
    
    // Make array of empty squares
    let newBoard = [...board]
    let emptySquares = this.findEmptySquares(newBoard)
    
    // // Check terminal states
    if (this.winning(newBoard, human)) {
      return depth -10
    }
    else if (this.winning(newBoard, computer)) {
      return 10 - depth
    } 
    else if (emptySquares.length === 0) {
      return 0
    }
    
    // Keep index and result of every move
    let moves = []
    for (let emptySquare of emptySquares) {
      let move = {}
      move.index = emptySquare
      move.depth = depth
      newBoard[emptySquare] = turn
      
      if (turn === computer) {
        let result = this.miniMax(newBoard, depth + 1, human)
        move.result = result
      } else {
        let result = this.miniMax(newBoard, depth + 1, computer)
        move.result = result
      }
      moves.push(move)
    }
    console.log(moves)
    
    // Find the best move each turn and store it
    let bestMove
    if (turn === computer) {
      let bestScore = -10000
      for (let move of moves) {
        if (move.result > bestScore) {
          bestScore = move.result
          bestMove = move.index
        }
      }
    } else {
      let bestScore = 10000
      for (let move of moves) {
        if (move.result < bestScore) {
          bestScore = move.result
          bestMove = move.index
        }
      }
    }
    return bestMove
  }

  switchTurn = () => {
    let {turn} = this.state
    if (turn === "x") {
      turn = "o"
      this.setState({ turn })
    } else if (turn === "o") {
      turn = "x"
      this.setState({ turn })
    }
  }

  aiMove = (board) => {
    let {computer} = this.state
    let depth = 0
    this.switchTurn()
    let result = this.miniMax(board, depth, computer)
    console.log(result)
    this.checkWin(board, computer)
  }

  humanMove = (newBoard) => {
    let {human} = this.state
    let board = [...this.state.board]
    board = newBoard
    this.setState({ board })
    this.checkWin(board, human)
    this.aiMove(board)
  }

  render() {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe Game</h1>
        <p>You are {this.state.human}.</p>
        <p>Computer is {this.state.computer}.</p>
        <p>Current turn is {this.state.turn}.</p>
        <Squares 
          board={this.state.board} 
          human={this.state.human} 
          turn={this.state.turn}
          humanMove={this.humanMove} />
      </div>
    );
  }
}

export default App