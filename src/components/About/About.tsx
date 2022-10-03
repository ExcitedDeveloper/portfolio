import React, { ReactElement } from 'react'
import AboutSkills from './AboutSkills'
import './About.css'
import AboutHeadshot from './AboutHeadshot'

const About = (): ReactElement => {
  return (
    <section id="about" className="about-section">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <AboutSkills />
        <AboutHeadshot />
      </div>
    </section>
  )
}

export default About
