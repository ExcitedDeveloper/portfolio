import React, { ReactElement } from 'react'
import GitHubIcon from '../SocialMedia/GitHubIcon'
import LinkedInIcon from '../SocialMedia/LinkedInIcon'
import './Footer.css'

const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="footer-social-links">
        <ul>
          <li>
            <GitHubIcon />
          </li>
          <li>
            <LinkedInIcon />
          </li>
        </ul>
      </div>
      <div className="footer-built-by">
        <a
          href="https://github.com/ExcitedDeveloper/portfolio"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>Built by Steve Hunley</div>
          <div className="github-stats">
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-star"
              >
                <title>Star</title>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>5,445</span>
            </span>
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-git-branch"
              >
                <title>Git Fork</title>
                <line x1="6" y1="3" x2="6" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>
              <span>2,532</span>
            </span>
          </div>
        </a>
      </div>
      <div className="footer-designed-by">
        <a
          href="https://www.brittanychiang.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>Designed by Brittany Chiang</div>
        </a>
      </div>
    </footer>
  )
}

export default Footer
