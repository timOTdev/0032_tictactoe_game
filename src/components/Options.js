import React from 'react'

const Options = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <button className='button' onClick={props.handleClickOne}>
        {props.optionOne}
      </button>
      <button className='button' onClick={props.handleClickTwo}>
        {props.optionTwo}
      </button>
    </div>
  )
}

export default Options