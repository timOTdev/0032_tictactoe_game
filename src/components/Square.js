import React, { Component } from 'react';

class Square extends Component {  
  handleClick = (e) => {
    e.preventDefault()
    const position = e.target.id
    let newBoard = [...this.props.board]
    let { turn } = this.props

    if (newBoard[position] === "") {
    switch (position) {
        case "0":
          newBoard[position] = turn;
          this.props.humanMove(newBoard)
          break;
        case "1":
          newBoard[position] = turn;
          this.props.humanMove(newBoard)
          break;
        case "2":
          newBoard[position] = turn;
          this.props.humanMove(newBoard)
          break;
        case "3":
          newBoard[position] = turn;
          this.props.humanMove(newBoard)
          break;
        case "4":
          newBoard[position] = turn;
          this.props.humanMove(newBoard)
          break;
        case "5":
          newBoard[position] = turn;
          this.props.humanMove(newBoard)
          break;
        case "6":
          newBoard[position] = turn;
          this.props.humanMove(newBoard)
          break;
        case "7":
          newBoard[position] = turn;
          this.props.humanMove(newBoard)
          break;
        case "8":
          newBoard[position] = turn;
          this.props.humanMove(newBoard)
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