import React, { ReactElement } from 'react'
import Bio from '../Bio'
import About from '../About'
import './Main.css'

const Main = (): ReactElement => {
  return (
    <div>
      <main id="main-content" className="main-content fill-height">
        <Bio />
        <About />
      </main>
    </div>
  )
}

export default Main
