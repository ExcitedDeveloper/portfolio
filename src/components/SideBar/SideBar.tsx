import React, { ReactElement, useEffect, useRef } from 'react'
import './SideBar.css'
import Button from '../Button'
import useWindowSize, { Size } from '../../hooks/useWindowSize'
import { MOBILE_BREAKPOINT } from '../../utils/constants'

const getMainElem = (): HTMLElement | null =>
  document.getElementsByTagName('main')[0] || null

const handleHamburgerOnChange = (
  e: React.ChangeEvent<HTMLInputElement>
): void => {
  const mainElem = getMainElem()

  if (mainElem) {
    if (e.target.checked) {
      mainElem.classList.add('blur')
    } else {
      mainElem.classList.remove('blur')
    }
  }
}

const SideBar = (): ReactElement => {
  const hamburgerRef = useRef<HTMLInputElement>(null)

  const windowSize: Size = useWindowSize()

  // Handle the case where the sidebar is open and the
  // user resizes the browser.  Remove the blur and
  // check the menu toggle to close the sidebar
  useEffect(() => {
    if (
      windowSize.width !== undefined &&
      windowSize.width > MOBILE_BREAKPOINT
    ) {
      const mainElem = getMainElem()
      if (mainElem) {
        mainElem.classList.remove('blur')
      }
    }

    const menuToggle = document.getElementById(
      'menu-toggle'
    ) as HTMLInputElement

    if (menuToggle !== null) {
      menuToggle.checked = false
    }
  }, [windowSize.width])

  useEffect(() => {
    const handleMenuClick = (): void => {
      if (hamburgerRef.current) {
        const mainElem = getMainElem()
        if (mainElem) {
          mainElem.classList.remove('blur')
        }
        hamburgerRef.current.checked = false
      }
    }

    Array.from(document.getElementsByClassName('menu-item')).forEach(
      (element) => {
        element.addEventListener('click', handleMenuClick)
      }
    )

    return () => {
      Array.from(document.getElementsByClassName('menu-item')).forEach(
        (element) => {
          element.removeEventListener('click', handleMenuClick)
        }
      )
    }
  })

  return (
    <div className="hamburger-menu">
      <input
        ref={hamburgerRef}
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
          <a className="menu-item" href="#about">
            About
          </a>
        </li>
        <li>
          <div className="menu-item-num">02.</div>
          <a className="menu-item" href="#jobs">
            Experience
          </a>
        </li>
        <li>
          <div className="menu-item-num">03.</div>
          <a className="menu-item" href="#projects">
            Work
          </a>
        </li>
        <li>
          <div className="menu-item-num">04.</div>
          <a className="menu-item" href="#contact">
            Contact
          </a>
        </li>
        <li className="sidebar-button-li">
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

export default SideBar
