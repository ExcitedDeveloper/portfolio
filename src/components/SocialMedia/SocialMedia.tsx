import React, { ReactElement } from 'react'
import './SocialMedia.css'

const SocialMedia = (): ReactElement => {
  return (
    <div className="social-media-container">
      <ul className="social-media-list">
        <li>
          <a
            href="https://github.com/ExcitedDeveloper"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="github-outline-svgrepo-com.svg"
              className="feather"
              alt="GitHub"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia
