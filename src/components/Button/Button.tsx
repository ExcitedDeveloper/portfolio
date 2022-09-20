import React, { ReactElement } from 'react'
import './Button.css'

export interface ButtonProps {
  title: string
  href: string
  containerClass?: string
  buttonClass?: string
}

const Button = ({
  href,
  title,
  containerClass = '',
  buttonClass = ''
}: ButtonProps): ReactElement => {
  return (
    <div className={`button-container ${containerClass}`}>
      <a className={`button ${buttonClass}`} href={href}>
        {title}
      </a>
    </div>
  )
}

export default Button
