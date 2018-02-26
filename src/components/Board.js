import React, { Component } from 'react'

import Square from './Square'

class Board extends Component {
  createSquare = (index) => {
    let value
    if (this.props.board[index] !== "X" && this.props.board[index] !== "O") {
      value = ""
    } else {
      value = this.props.currentSquare[index]
    }

    return (
      <Square
        value={value}
        index={index}
        updateSquare={this.props.updateSquare}
      />
    )
  }

  render() {
    return (
      <div className="Board">
        <h1>Tic Tac Toe</h1>
        <div className="row">
          {this.createSquare(0)}
          {this.createSquare(1)}
          {this.createSquare(2)}
        </div>
        <div className="row">
          {this.createSquare(3)}
          {this.createSquare(4)}
          {this.createSquare(5)}
        </div>
        <div className="row">
          {this.createSquare(6)}
          {this.createSquare(7)}
          {this.createSquare(8)}
        </div>
      </div>
    )
  }
}

export default Board