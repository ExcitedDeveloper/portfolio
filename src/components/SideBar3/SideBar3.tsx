import React, { ReactElement } from 'react'
import './SideBar3.css'

const SideBar3 = (): ReactElement => {
  const handleHamburgerOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const mainElem = document.getElementsByTagName('main')[0]
    if (e.target.checked) {
      mainElem.classList.add('blur')
    } else {
      mainElem.classList.remove('blur')
    }
  }

  return (
    <div className="hamburger-menu">
      <input
        id="menu-toggle"
        type="checkbox"
        onChange={handleHamburgerOnChange}
      />
      <label className="menu-btn" htmlFor="menu-toggle">
        <span></span>
      </label>

      <ul className="menu-box">
        <li>
          <div className="menu-item-num">01.</div>
          <a className="menu-item" href="#header-container">
            About
          </a>
        </li>
        <li>
          <div className="menu-item-num">02.</div>
          <a className="menu-item" href="#header-container">
            Experience
          </a>
        </li>
        <li>
          <div className="menu-item-num">03.</div>
          <a className="menu-item" href="#header-container">
            Work
          </a>
        </li>
        <li>
          <div className="menu-item-num">04.</div>
          <a className="menu-item" href="#header-container">
            Contact
          </a>
        </li>
        <li className="sidebar-button">
          <a href="/resume.pdf" className="button">
            Resume
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar3
