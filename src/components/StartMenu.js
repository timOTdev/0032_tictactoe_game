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
      <h1 className='game-title'>Tic Tac Toe</h1>
      {!this.props.gameStarted && this.props.numberOfPlayers === null &&
        <Options 
          {...this.props}
          title='Against AI or Player?' 
          optionOne='AI'
          handleClickOne={this.versusAI}
          optionTwo='Player'
          handleClickTwo={this.versusPlayer}
        />
      }
      { this.props.numberOfPlayers && this.props.human === null && 
        <Options 
          title='X or O?' 
          optionOne='X'
          handleClickOne={this.pickMarkerX}
          optionTwo='O'
          handleClickTwo={this.pickMarkerO}
        />
      }
      { this.props.human && this.props.humanGoesFirst === null &&
        <Options 
          title='Go first?' 
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