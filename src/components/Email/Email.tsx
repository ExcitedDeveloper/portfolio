import React, { ReactElement } from 'react'
import './Email.css'

const Email = (): ReactElement => {
  return (
    <aside aria-label="Email">
      <div className="email-container">
        <div className="email-wrapper">
          <a href="mailto:shunley2000@yahoo.com" className="email-link">
            shunley2000@yahoo.com
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Email
