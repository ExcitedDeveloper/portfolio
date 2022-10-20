import React, { ReactElement } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import SocialMedia from './components/SocialMedia'
import Email from './components/Email'
import Footer from './components/Footer'

function App(): ReactElement {
  return (
    <div id="app">
      <Header />
      <Main />
      <Footer />
      <SocialMedia />
      <Email />
    </div>
  )
}

export default App
