import React, { ReactElement } from 'react'
import SideBar3 from '../SideBar3'
import './Header.css'

const Header = (): ReactElement => {
  return (
    <header className="header-main">
      <nav id="header-container" className="header-container">
        <div>
          <a href="#header-container">
            <img src="logo192.png" className="header-logo" alt="Home" />
          </a>
        </div>
        <div className="header-menu">
          <ol aria-label="Primary" className="nav-list">
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
          </ol>
          <button className="header-button">Resume</button>
        </div>
        <SideBar3 />
      </nav>
    </header>
  )
}

export default Header
