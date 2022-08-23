import React, { ReactElement } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App (): ReactElement {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
}

export default App
