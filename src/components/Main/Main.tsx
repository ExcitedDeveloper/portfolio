import React, { ReactElement } from 'react'
import Bio from '../Bio'
import About from '../About'
import Jobs from '../Jobs'
import './Main.css'
import Projects from '../Projects'
import Contact from '../Contact'

const Main = (): ReactElement => {
  return (
    <div>
      <main id="main-content" className="main-content fill-height">
        <Bio />
        <About />
        <Jobs />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default Main
