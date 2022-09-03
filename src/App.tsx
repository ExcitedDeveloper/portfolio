import React, { ReactElement } from 'react'
import Header from './components/Header'
import Main from './components/Main'

function App(): ReactElement {
  return (
    <div id="App">
      <Header />
      <Main />
    </div>
  )
}

export default App
