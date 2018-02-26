import React from 'react'

const Square = (props) => {  
  return (
    <button className={"button"+ props.index}>
      {props.value}
    </button>
  )
}

export default Square