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