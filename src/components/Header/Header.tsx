/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { ReactElement, useEffect } from 'react'
import SideBar from '../SideBar'
import './Header.css'
import Button from '../Button'

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

    let prevScroll = w.scrollY || doc.scrollTop
    let curScroll
    let direction = ScrollDirection.Initial
    let prevDirection = ScrollDirection.Initial

    const header = document.getElementById('header-main')

    if (header == null) return

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const checkScroll = function () {
      curScroll = w.scrollY || doc.scrollTop
      if (curScroll > prevScroll) {
        // scrolled up
        direction = ScrollDirection.Down
      } else if (curScroll < prevScroll) {
        // scrolled down
        direction = ScrollDirection.Up
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
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <nav id="header-container" className="header-container">
        <div>
          <a href="#header-container">
            <img src="SteveHunleyLogo.png" className="header-logo" alt="Home" />
          </a>
        </div>
        <div className="header-menu">
          <ol aria-label="Primary" className="nav-list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#jobs">Experience</a>
            </li>
            <li>
              <a href="#projects">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ol>
          <Button
            title="Resume"
            href="/resume.pdf"
            containerClass="header-button-container"
            buttonClass="header-button"
          />
        </div>
        <SideBar />
      </nav>
    </header>
  )
}

export default Header
