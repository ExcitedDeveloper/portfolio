import React from 'react'
import { render, screen } from '@testing-library/react'
import GitHubIcon from './GitHubIcon'

describe('SocialMedia GitHubIcon', () => {
  it('should render correctly', () => {
    render(<GitHubIcon />)

    const link = screen.getByRole('link')
    const icon = screen.getByRole('img')

    expect(link).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('should have correct href', () => {
    render(<GitHubIcon />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://github.com/ExcitedDeveloper')
  })

  it('should have correct aria-label', () => {
    render(<GitHubIcon />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('aria-label', 'GitHub')
  })

  it('should open in new tab', () => {
    render(<GitHubIcon />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('should have correct title', () => {
    render(<GitHubIcon />)

    const title = screen.getByTitle('GitHub')
    expect(title).toBeInTheDocument()
  })

  it('should have correct SVG attributes', () => {
    render(<GitHubIcon />)

    const icon = screen.getByRole('img')
    expect(icon).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg')
    expect(icon).toHaveAttribute('viewBox', '0 0 24 24')
    expect(icon).toHaveAttribute('fill', 'none')
    expect(icon).toHaveAttribute('stroke', 'currentColor')
    expect(icon).toHaveAttribute('stroke-width', '2')
    expect(icon).toHaveAttribute('stroke-linecap', 'round')
    expect(icon).toHaveAttribute('stroke-linejoin', 'round')
  })

  it('should have correct className', () => {
    render(<GitHubIcon />)

    const icon = screen.getByRole('img')
    expect(icon).toHaveClass('feather', 'feather-github')
  })

  it('should contain path element with correct data', () => {
    const { container } = render(<GitHubIcon />)

    const path = container.querySelector('path')
    expect(path).toBeInTheDocument()
    expect(path).toHaveAttribute(
      'd',
      'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
    )
  })

  it('should be accessible', () => {
    render(<GitHubIcon />)

    const link = screen.getByRole('link')
    const icon = screen.getByRole('img')

    expect(link).toHaveAttribute('aria-label', 'GitHub')
    expect(icon).toHaveAttribute('role', 'img')

    const title = screen.getByTitle('GitHub')
    expect(title).toBeInTheDocument()
  })
})
