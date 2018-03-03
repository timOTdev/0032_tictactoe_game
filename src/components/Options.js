import React from 'react'

const Options = (props) => {
  return (
    <div className="Options" id={props.idName}>
      <p>{props.title}</p>
      <span onClick={props.clickHandlerOne}>
        {props.optionOne}
      </span>
      <span onClick={props.clickHandlerTwo}>
        {props.optionTwo}
      </span>
    </div>
  )
}

export default Options