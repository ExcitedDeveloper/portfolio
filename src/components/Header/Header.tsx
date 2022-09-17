import React, { ReactElement, useEffect } from 'react'
import SideBar3 from '../SideBar3'
import './Header.css'

const NAV_HEIGHT = 100 // Nav height in px

enum ScrollDirection {
  Initial = 0,
  Up = 1,
  Down = 2
}

const Header = (): ReactElement => {
  // https://codingreflections.com/hide-header-on-scroll-down/
  useEffect(() => {
    const doc = document.documentElement
    const w = window

    let prevScroll = w.scrollY !== 0 ? w.scrollY : doc.scrollTop
    let curScroll
    let direction = ScrollDirection.Initial
    let prevDirection = ScrollDirection.Initial

    const header = document.getElementById('header-main')

    if (header == null) return

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const checkScroll = function () {
      curScroll = w.scrollY !== 0 ? w.scrollY : doc.scrollTop
      if (curScroll > prevScroll) {
        // scrolled up
        direction = ScrollDirection.Up
      } else if (curScroll < prevScroll) {
        // scrolled down
        direction = ScrollDirection.Down
      }

      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll)
      }

      prevScroll = curScroll
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const toggleHeader = function (direction: number, curScroll: number) {
      if (direction === ScrollDirection.Down && curScroll > NAV_HEIGHT) {
        header.classList.add('hide')
        prevDirection = direction
      } else if (direction === ScrollDirection.Up) {
        header.classList.remove('hide')
        prevDirection = direction
      }
    }

    window.addEventListener('scroll', checkScroll)

    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <header id="header-main" className="header-main">
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
