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
              <div className="project-description">
                <p>
                  My portfolio website to provide access to projects I&apos;ve
                  worked on and insight into my background.
                </p>
              </div>
              <ul className="project-tech-list">
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <div className="project-links">
                <a
                  href="https://github.com/ExcitedDeveloper/portfolio"
                  aria-label="GitHub Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://www.stevehunley.dev/"
                  aria-label="External Link"
                  className="external"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="project-image">
            <div className="image-wrapper image-wrapper-constrained img">
              <div style={{ maxWidth: '43.75rem', display: 'block' }}>
                <img
                  alt="Portfolio"
                  src="Portfolio.PNG"
                  style={{
                    maxWidth: '100%',
                    display: 'block',
                    position: 'static'
                  }}
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects
