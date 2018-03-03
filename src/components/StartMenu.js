import React, { Component } from 'react'

import Options from './Options'

class StartMenu extends Component {
  versusAI = () => {
    let numberOfPlayers = 1
    this.props.updatePlayers(numberOfPlayers)
  }
  
  versusPlayer = () => {
    let numberOfPlayers = 2
    this.props.updatePlayers(numberOfPlayers)
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
    this.props.updateTurn(true, human)
  }
  
  notFirst = () => {
    let { computer } = this.props
    this.props.updateTurn(false, computer)
  }

  render () {
    return (
    <div> 
      <h1>T<span className="titlePart">ic</span> T<span className="titlePart">ac</span> T<span className="titlePart">oe</span></h1>
      {!this.props.gameStarted && this.props.numberOfPlayers === null &&
        <Options 
          {...this.props}
          title='Against AI or Player?' 
          idName="players"
          optionOne='AI'
          handleClickOne={this.versusAI}
          optionTwo='Player'
          handleClickTwo={this.versusPlayer}
          />
      }
      { this.props.numberOfPlayers && this.props.human === null && 
        <Options 
          title='Play as X or O?' 
          idName="markers"
          optionOne='X'
          handleClickOne={this.pickMarkerX}
          optionTwo='O'
          handleClickTwo={this.pickMarkerO}
        />
      }
      { this.props.human && this.props.humanGoesFirst === null &&
        <Options 
          title='Want to go first?' 
          idName="turns"
          optionOne='Yes'
          handleClickOne={this.goingFirst}
          optionTwo='No'
          handleClickTwo={this.notFirst}
        />
      }
    </div>
  )
  }
}

export default StartMenu