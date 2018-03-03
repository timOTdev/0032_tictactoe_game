import React, { Component } from 'react'

import Square from './Square'

class Board extends Component {
  componentDidMount () {
    let { board } = this.props
    if (this.props.playerCount === 1 && !this.props.humanFirst) {
      this.props.aiRandom(board)
    }
  }

  createSquare = (index) => {
    let value
    if (this.props.board[index] !== "X" && this.props.board[index] !== "O") {
      value = ""
    } else {
      value = this.props.board[index]
    }

    return (
      <Square
        {...this.props}
        value={value}
        index={index}
        markSquare={this.props.markSquare}
      />
    )
  }

  returnMenuHandler = (e) => {
    e.preventDefault()
    this.props.returnMenu()
  }

  resetGameHandler = (e) => {
    e.preventDefault()
    this.props.resetGame()
  }

  render() {
    return (
      <div className="Board">
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
        <span className="Board_menu" onClick={(e) => this.returnMenuHandler(e)}>Menu</span>
        <span className="Board_reset" onClick={(e) => this.resetGameHandler(e)}>Reset</span>
      </div>
    )
  }
}

export default Board