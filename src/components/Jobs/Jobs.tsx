import React, { ReactElement, useEffect } from 'react'
import './Jobs.css'

const handleJobTabClick = (e: Event): void => {
  const buttonElement = e.target as HTMLButtonElement
  let id
  if (buttonElement?.id) {
    id = buttonElement.id
  } else if (buttonElement?.parentElement?.id) {
    id = buttonElement.parentElement.id
  }

  if (!id) {
    console.error('Jobs handleJobTabClick: id is null')
    return
  }

  const parts = id.split('-')

  if (!parts || parts.length < 2) {
    console.error('Jobs handleJobTabClick: id is not formatted correctly')
    return
  }

  const tabNum = parts[1]

  document
    .querySelectorAll<HTMLElement>('[role="tabpanel"]')
    .forEach((element) => {
      if (element.id === `panel-${tabNum}`) {
        element.style.display = 'block'
      } else {
        element.style.display = 'none'
      }
    })

  const tabs = document.querySelectorAll('[role="tab"]')

  const numOfTabs = Array.from(tabs).length

  const selectedTab = document.getElementsByClassName('jobs-selected-tab')[0]

  if (selectedTab) {
    for (let i = 0; i < numOfTabs; i++) {
      selectedTab.classList.remove(`jobs-tab-${i}`)
    }

    selectedTab.classList.add(`jobs-tab-${tabNum}`)
  }
}

const Jobs = (): ReactElement => {
  console.log('render Jobs')
  useEffect(() => {
    ;[...document.querySelectorAll('[role="tab"]')].forEach((element) => {
      element.addEventListener('click', handleJobTabClick, true)
    })

    return () => {
      ;[...document.querySelectorAll('[role="tab"]')].forEach((element) => {
        element.removeEventListener('click', handleJobTabClick, true)
      })
    }
  }, [])

  return (
    <section id="jobs" className="jobs-section">
      <h2 className="numbered-heading">Where I’ve Worked</h2>
      <div className="inner">
        <div role="tablist" aria-label="Job tabs" className="jobs-tabs">
          <button
            id="tab-0"
            role="tab"
            tabIndex={0}
            aria-selected="true"
            aria-controls="panel-0"
            className="jobs-tab"
          >
            <span>Ceridian</span>
          </button>
          <button
            id="tab-1"
            role="tab"
            tabIndex={-1}
            aria-selected="false"
            aria-controls="panel-1"
            className="jobs-tab"
          >
            <span>Perception Health</span>
          </button>
          <button
            id="tab-2"
            role="tab"
            tabIndex={-1}
            aria-selected="false"
            aria-controls="panel-2"
            className="jobs-tab"
          >
            <span>Precise Systems</span>
          </button>
          <button
            id="tab-3"
            role="tab"
            tabIndex={-1}
            aria-selected="false"
            aria-controls="panel-3"
            className="jobs-tab"
          >
            <span>Cigna</span>
          </button>
          <button
            id="tab-4"
            role="tab"
            tabIndex={-1}
            aria-selected="false"
            aria-controls="panel-4"
            className="jobs-tab"
          >
            <span>Naxos</span>
          </button>
          <div className="jobs-selected-tab"></div>
        </div>
        <div className="jobs-tab-panels">
          <div
            id="panel-0"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby="tab-0"
            aria-hidden="false"
            className="jobs-tab-panel"
            style={{ display: 'block' }}
          >
            <h3>
              <span>Front-End Developer</span>
              <span className="jobs-company">&nbsp;@&nbsp;Ceridian</span>
            </h3>
            <p className="jobs-range">March 2021 - Present</p>
            <div>
              <ul>
                <li>
                  Maintained and developed new React web libraries used by
                  application teams
                </li>
                <li>Developed schema based forms using JSON Forms</li>
              </ul>
            </div>
          </div>
          <div
            id="panel-1"
            role="tabpanel"
            tabIndex={-1}
            aria-labelledby="tab-1"
            aria-hidden="true"
            className="jobs-tab-panel"
            style={{ display: 'none' }}
          >
            <h3>
              <span>Front-End Developer</span>
              <span className="jobs-company">
                &nbsp;@&nbsp;Perception Health
              </span>
            </h3>
            <p className="jobs-range">August 2019 – February 2021</p>
            <div>
              <ul>
                <li>Architected and implemented new React application</li>
                <li>
                  Translated Figma wireframes into interactive, dynamic, and
                  responsive web pages
                </li>
                <li>
                  Collaborated across disciplines with designers and back-end
                  engineers
                </li>
                <li>
                  Developed software in two-week sprints implementing stories
                  written in Jira
                </li>
                <li>
                  Wrote automated tests (unit, functional and end-to-end tests)
                </li>
                <li>
                  Improved code quality using technologies such as TypeScript,
                  ESLint and Prettier
                </li>
              </ul>
            </div>
          </div>
          <div
            id="panel-2"
            role="tabpanel"
            tabIndex={-1}
            aria-labelledby="tab-2"
            aria-hidden="true"
            className="jobs-tab-panel"
            style={{ display: 'none' }}
          >
            <h3>
              <span>Full Stack Developer</span>
              <span className="jobs-company">&nbsp;@&nbsp;Precise Systems</span>
            </h3>
            <p className="jobs-range">March 2018 – March 2019</p>
            <div>
              <ul>
                <li>
                  Developed application for the military to standardize and
                  streamline common program management and procurement functions
                </li>
                <li>
                  Full-stack application using JavaScript, ASP.NET, C# and SQL
                  Server
                </li>
                <li>
                  Implemented dynamic web pages that allowed managers to enter
                  contract information, upload contract documents and manage the
                  routing workflow
                </li>
              </ul>
            </div>
          </div>
          <div
            id="panel-3"
            role="tabpanel"
            tabIndex={-1}
            aria-labelledby="tab-3"
            aria-hidden="true"
            className="jobs-tab-panel"
            style={{ display: 'none' }}
          >
            <h3>
              <span>Full Stack Developer</span>
              <span className="jobs-company">&nbsp;@&nbsp;Cigna</span>
            </h3>
            <p className="jobs-range">February 2014 – March 2018</p>
            <div>
              <ul>
                <li>
                  Developed full-stack .NET pharmacy application which allowed
                  users to process prescription orders and connect customers
                  with therapy management
                </li>
                <li>
                  Rewrote employee full-stack auditing tool web application from
                  VB.NET to ASP.NET MVC
                </li>
                <li>
                  Developed software using VB.NET that automated entry of fee
                  schedule data. Automating the entry of this data saved
                  significant money and eliminated human input errors.
                </li>
              </ul>
            </div>
          </div>
          <div
            id="panel-4"
            role="tabpanel"
            tabIndex={-1}
            aria-labelledby="tab-4"
            aria-hidden="true"
            className="jobs-tab-panel"
            style={{ display: 'none' }}
          >
            <h3>
              <span>Senior Web Developer </span>
              <span className="jobs-company">&nbsp;@&nbsp;Naxos</span>
            </h3>
            <p className="jobs-range">July 2010 - November 2013</p>
            <div>
              <ul>
                <li>
                  Developed .NET full-stack software which was used by
                  musicologists to enter meta data about music that is sold on
                  Naxos websites
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jobs
