import React, { ReactElement } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import SideBar from './components/SideBar'

function App(): ReactElement {
  return (
    <div id="App">
      <Header />
      <Main />
      {/* <SideBar pageWrapId={'App'} outerContainerId={'App'} /> */}
    </div>
  )
}

export default App
