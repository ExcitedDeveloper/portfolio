import React, { ReactElement } from 'react'
import SideBar from '../SideBar'

const Header = (): ReactElement => {
  return (
    <header>
      <SideBar pageWrapId={'header-container'} outerContainerId={'App'} />
      <div id="header-container" className="header-container">
        <div>
          <a href="#header-container">
            <img src="logo192.png" className="header-logo" alt="Home" />
          </a>
        </div>
        <div className="header-filler"></div>
        <div className="header-menu">
          <nav className="primary-navigation">
            <ul aria-label="Primary" className="nav-list">
              <li>
                <a href="#header-container">About</a>
              </li>
              <li>
                <a href="#header-container">Experience</a>
              </li>
              <li>
                <a href="#header-container">Work</a>
              </li>
              <li>
                <a href="#header-container">Contact</a>
              </li>
            </ul>
          </nav>
          <button className="button">Resume</button>
        </div>
      </div>
    </header>
  )
}

export default Header
