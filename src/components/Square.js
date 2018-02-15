import React, { Component } from 'react';

class Square extends Component {  
  handleClick = (e) => {
    e.preventDefault()
    const position = e.target.id
    let newBoard = [...this.props.board]
    const player = this.props.player

    switch (position) {
        case "0":
          newBoard[position] = player;
          this.props.markBoard(newBoard)
          break;
        case "1":
          newBoard[position] = player;
          this.props.markBoard(newBoard)
          break;
        case "2":
          newBoard[position] = player;
          this.props.markBoard(newBoard)
          break;
        case "3":
          newBoard[position] = player;
          this.props.markBoard(newBoard)
          break;
        case "4":
          newBoard[position] = player;
          this.props.markBoard(newBoard)
          break;
        case "5":
          newBoard[position] = player;
          this.props.markBoard(newBoard)
          break;
        case "6":
          newBoard[position] = player;
          this.props.markBoard(newBoard)
          break;
        case "7":
          newBoard[position] = player;
          this.props.markBoard(newBoard)
          break;
        case "8":
          newBoard[position] = player;
          this.props.markBoard(newBoard)
          break;
        default:
          break;
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