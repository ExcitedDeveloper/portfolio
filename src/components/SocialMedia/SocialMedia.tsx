import React, { ReactElement } from 'react'
import './SocialMedia.css'
import GitHubIcon from './GitHubIcon'
import LinkedInIcon from './LinkedInIcon'

const SocialMedia = (): ReactElement => {
  return (
    <div className="social-media-container">
      <ul className="social-media-list">
        <li>
          <GitHubIcon />
        </li>
        <li>
          <LinkedInIcon />
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia
