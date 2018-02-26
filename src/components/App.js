import React, { Component } from 'react'

import Board from './Board'

class App extends Component {  
  constructor() {
    super()
    this.state = {
      board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    }
  }
  
  render() {
    return (
      <div className="App">
        <Board {...this.state} />
      </div>
    );
  }
}

export default App