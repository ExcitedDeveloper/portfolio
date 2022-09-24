import React, { ReactElement } from 'react'
import './SocialMedia.css'
import GitHubIcon from './GitHubIcon'

const SocialMedia = (): ReactElement => {
  return (
    <div className="social-media-container">
      <ul className="social-media-list">
        <li>
          <GitHubIcon />
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia
