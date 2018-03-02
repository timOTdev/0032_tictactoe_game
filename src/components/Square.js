import React from 'react'

const Square = (props) => {
  return (
    <button className={"button"+ props.index + (props.endOfGame ? " ended" : " notEnded")}
      onClick={(e) => props.updateSquare(e, props.index)}>
      {props.value}
    </button>
  )
}

export default Square