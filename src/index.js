import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AppProvider from './AppProvider'
import App from './App'

import 'normalize.css'
import 'animate.css'
import './styles/content.css'

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>,
  // $FlowFixMe
  document.getElementById('root')
)
