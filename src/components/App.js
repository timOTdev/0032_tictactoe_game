import React, { Component } from 'react'

import Board from './Board'

class App extends Component {  
  constructor() {
    super()
    this.state = {
      board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    }
  }

  updateSquare = (e, index) => {
    e.preventDefault()
    console.log(index)
  }

  render() {
    return (
      <div className="App">
        <Board {...this.state} 
          updateSquare={this.updateSquare}
        />
      </div>
    );
  }
}

export default App