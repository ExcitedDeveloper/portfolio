import React, { ReactElement } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import SocialMedia from './components/SocialMedia'

function App(): ReactElement {
  return (
    <div id="app">
      <Header />
      <Main />
      <SocialMedia />
    </div>
  )
}

export default App
