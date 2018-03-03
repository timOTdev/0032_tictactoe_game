import React, { Component } from 'react'

import Square from './Square'

class Board extends Component {
  componentDidMount () {
    let { board } = this.props
    if (this.props.numberOfPlayers === 1 && !this.props.humanGoesFirst) {
      this.props.aiRandomSquare(board)
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
        updateSquare={this.props.updateSquare}
      />
    )
  }

  returnToMenuHandler = (e) => {
    e.preventDefault()
    this.props.returnToMenu()
  }

  resetGameHandler = (e) => {
    e.preventDefault()
    this.props.resetGame()
  }

  render() {
    return (
      <div className="Board">
        <h1>T<span className="titlePart">ic</span> T<span className="titlePart">ac</span> T<span className="titlePart">oe</span></h1>
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
        <span className="Board_menu"onClick={(e) => this.returnToMenuHandler(e)}>Menu</span>
        <span className="Board_reset" onClick={(e) => this.resetGameHandler(e)}>Reset</span>
      </div>
    )
  }
}

export default Board