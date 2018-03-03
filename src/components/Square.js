import React from 'react'

const Square = (props) => {
  return (
    <button className={"button"+ props.index + (props.gameEnded ? " ended" : " notEnded")}
      onClick={(e) => props.markSquare(e, props.index)}
    >
      {props.value}
    </button>
  )
}

export default Square