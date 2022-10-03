import React, { ReactElement } from 'react'
import './About.css'

const AboutSkills = (): ReactElement => {
  return (
    <div className="about-skills">
      <div>
        <p>
          Hello! My name is Steve and I enjoy creating things that live on the
          internet. My interest in web development started back in 2002.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
      </div>
      <ul className="skills-list">
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>JSON Forms</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
    </div>
  )
}

export default AboutSkills
