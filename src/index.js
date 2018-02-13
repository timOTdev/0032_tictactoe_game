import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './style/index.css'
import registerServiceWorker from './helpers/registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
