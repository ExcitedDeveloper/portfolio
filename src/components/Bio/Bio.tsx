import React, { ReactElement } from 'react'
import './Bio.css'

const Bio = (): ReactElement => {
  return (
    <section className="main-bio">
      <div style={{ transitionDelay: '100ms' }}>
        <h1>Hi, my name is</h1>
      </div>
      <div style={{ transitionDelay: '200ms' }}>
        <h2 className="big-heading">Steve Hunley.</h2>
      </div>
      <div style={{ transitionDelay: '300ms' }}>
        <h3 className="big-heading">
          Expert in HTML, CSS, JavaScript and React.
        </h3>
      </div>
      <div style={{ transitionDelay: '400ms' }}>
        <p className="">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences.
        </p>
      </div>
    </section>
  )
}

export default Bio
