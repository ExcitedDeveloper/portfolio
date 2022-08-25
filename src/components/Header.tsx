import React, { ReactElement } from 'react'

const Header = (): ReactElement => {
  return (
    <header className="primary-header">
      <div id="header-container" className="container">
        <a href="#header-container">
          <img src="images/logo.svg" alt="Manage" />
        </a>
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
    </header>
  )
}

export default Header
