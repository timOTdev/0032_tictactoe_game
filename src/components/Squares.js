import React  from 'react';

import Square from './Square'

const Squares = (props) => {
  return (
    <div className="Squares">
      { props.board.map((content, key) => <Square 
        key={key} 
        id={key} 
        board={props.board} 
        player={props.player} 
        turn={props.turn}
        content={content}
        humanMove={props.humanMove} />) }
    </div>
  )
}

export default Squares