import React, { ReactElement } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import SideBar from './components/SideBar'

function App(): ReactElement {
  return (
    <div id="App">
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
      <div id="page-wrap">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
