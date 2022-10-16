import React, { ReactElement } from 'react'
import Bio from '../Bio'
import About from '../About'
import Jobs from '../Jobs'
import './Main.css'

const Main = (): ReactElement => {
  return (
    <div>
      <main id="main-content" className="main-content fill-height">
        <Bio />
        <About />
        <Jobs />
      </main>
    </div>
  )
}

export default Main
