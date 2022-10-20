import React, { ReactElement } from 'react'
import './Contact.css'

const Contact = (): ReactElement => {
  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        visibility: 'visible',
        opacity: '1',
        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
        transition:
          'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s'
      }}
    >
      <h2 className="numbered-heading overline">What&apos;s Next?</h2>
      <h2 className="title">Get In Touch</h2>
      <p>
        Although I&apos;m not currently looking for any new opportunities, my
        inbox is always open. Whether you have a question or just want to say
        hi, I&apos;ll try my best to get back to you!
      </p>
      <a
        href="mailto:shunley2000@yahoo.com"
        className="email-link"
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </a>
    </section>
  )
}

export default Contact
