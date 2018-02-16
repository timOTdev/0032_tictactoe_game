import React, { Component } from 'react';

class Square extends Component {  
  handleClick = (e) => {
    e.preventDefault()
    const position = e.target.id
    let newBoard = [...this.props.board]
    let { currentTurn } = this.props

    if (newBoard[position] === "") {
    switch (position) {
        case "0":
          newBoard[position] = currentTurn;
          this.props.markBoard(newBoard, currentTurn)
          break;
        case "1":
          newBoard[position] = currentTurn;
          this.props.markBoard(newBoard, currentTurn)
          break;
        case "2":
          newBoard[position] = currentTurn;
          this.props.markBoard(newBoard, currentTurn)
          break;
        case "3":
          newBoard[position] = currentTurn;
          this.props.markBoard(newBoard, currentTurn)
          break;
        case "4":
          newBoard[position] = currentTurn;
          this.props.markBoard(newBoard, currentTurn)
          break;
        case "5":
          newBoard[position] = currentTurn;
          this.props.markBoard(newBoard, currentTurn)
          break;
        case "6":
          newBoard[position] = currentTurn;
          this.props.markBoard(newBoard, currentTurn)
          break;
        case "7":
          newBoard[position] = currentTurn;
          this.props.markBoard(newBoard, currentTurn)
          break;
        case "8":
          newBoard[position] = currentTurn;
          this.props.markBoard(newBoard, currentTurn)
          break;
        default:
          break;
    }
    }
  }

  render() {
    const {id, content} = this.props
    return (
      <button className="Square" id={id} onClick={this.handleClick}>
        {content}
      </button>
    )
  }
}

export default Square