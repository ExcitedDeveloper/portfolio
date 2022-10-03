import React, { ReactElement } from 'react'
import './About.css'

const AboutHeadshot = (): ReactElement => {
  return (
    <div className="about-headshot">
      <div className="about-headshot-wrapper">
        <div className="about-image-wrapper">
          <div className="about-image-container">
            <img
              alt=""
              role="presentation"
              aria-hidden="true"
              src="Headshot.jpg"
            />
          </div>
          <div aria-hidden="true" className="about-image-placeholder"></div>
        </div>
      </div>
    </div>
  )
}

export default AboutHeadshot
