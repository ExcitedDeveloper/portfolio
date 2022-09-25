import React, { ReactElement, useEffect } from 'react'
import './SideBar.css'
import Button from '../Button'
import useWindowSize, { Size } from '../../hooks/useWindowSize'
import { BIG_SCREEN_WIDTH } from '../../utils/constants'

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

const SideBar3 = (): ReactElement => {
  const windowSize: Size = useWindowSize()

  // Handle the case where the sidebar is open and the
  // user resizes the browser.  Remove the blur and
  // check the menu toggle to close the sidebar
  useEffect(() => {
    const mainElem = document.getElementsByTagName('main')[0]

    if (windowSize.width !== undefined && windowSize.width > BIG_SCREEN_WIDTH) {
      mainElem.classList.remove('blur')
    }

    const menuToggle = document.getElementById(
      'menu-toggle'
    ) as HTMLInputElement

    if (menuToggle !== null) {
      menuToggle.checked = false
    }
  }, [windowSize.width])

  return (
    <div className="hamburger-menu">
      <input
        id="menu-toggle"
        type="checkbox"
        onChange={handleHamburgerOnChange}
      />
      <label
        className="menu-btn"
        htmlFor="menu-toggle"
        aria-label="menu-toggle"
      >
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
        <li className="sidebar-button-li">
          {/* <a className="button sidebar-button" href="/resume.pdf">
            Resume
          </a> */}
          <Button
            title="Resume"
            href="/resume.pdf"
            containerClass="sidebar-button-container"
            buttonClass="sidebar-button"
          />
        </li>
      </ul>
    </div>
  )
}

export default SideBar3