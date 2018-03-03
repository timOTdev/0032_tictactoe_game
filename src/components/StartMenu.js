import React, { Component } from 'react'

import Options from './Options'

class StartMenu extends Component {
  versusAI = () => {
    let playerCount = 1
    this.props.updatePlayers(playerCount)
  }
  
  versusPlayer = () => {
    let playerCount = 2
    this.props.updatePlayers(playerCount)
  }

  pickMarkerX = () => {
    let human = "X"
    let computer = "O"
    this.props.updateMarkers(human, computer)
  }
  
  pickMarkerO = () => {
    let human = "O"
    let computer = "X"    
    this.props.updateMarkers(human, computer)
  }

  goingFirst = () => {
    let { human } = this.props
    this.props.updateTurns(true, human)
  }
  
  notFirst = () => {
    let { computer } = this.props
    this.props.updateTurns(false, computer)
  }

  render () {
    return (
    <div> 
      <h1>T<span className="titlePart">ic</span> T<span className="titlePart">ac</span> T<span className="titlePart">oe</span></h1>
      { this.props.playerCount === null &&
        <Options 
          {...this.props}
          title='Against AI or Player?' 
          idName="players"
          optionOne='AI'
          clickHandlerOne={this.versusAI}
          optionTwo='Player'
          clickHandlerTwo={this.versusPlayer}
          />
      }
      { this.props.playerCount && this.props.human === null && 
        <Options 
          title='Play as X or O?' 
          idName="markers"
          optionOne='X'
          clickHandlerOne={this.pickMarkerX}
          optionTwo='O'
          clickHandlerTwo={this.pickMarkerO}
        />
      }
      { this.props.human && this.props.humanFirst === null &&
        <Options 
          title='Want to go first?' 
          idName="turns"
          optionOne='Yes'
          clickHandlerOne={this.goingFirst}
          optionTwo='No'
          clickHandlerTwo={this.notFirst}
        />
      }
    </div>
  )
  }
}

export default StartMenu