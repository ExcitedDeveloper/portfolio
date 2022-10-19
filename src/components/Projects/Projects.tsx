import React, { ReactElement } from 'react'
import './Projects.css'

const Projects = (): ReactElement => {
  console.log('render Projects')

  return (
    <section id="projects">
      <h2
        className="numbered-heading"
        style={{
          visibility: 'visible',
          opacity: '1',
          transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
          transition:
            'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s'
        }}
      >
        Some Things I&apos;ve Built
      </h2>
      <ul className="projects-list">
        <li
          className="project-portfolio"
          style={{
            visibility: 'visible',
            opacity: '1',
            transform:
              'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            transition:
              'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
          }}
        >
          <div className="project-content">
            <div>
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">
                <a
                  href="https://www.stevehunley.dev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Portfolio
                </a>
              </h3>
              <div className="project-description"></div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects
