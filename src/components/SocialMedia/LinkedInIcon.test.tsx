import React from 'react'
import { render, screen } from '@testing-library/react'
import LinkedInIcon from './LinkedInIcon'

describe('SocialMedia LinkedInIcon', () => {
  it('should render correctly', () => {
    render(<LinkedInIcon />)

    const link = screen.getByRole('link')
    const icon = screen.getByRole('img')

    expect(link).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('should have correct href', () => {
    render(<LinkedInIcon />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/stevehunley/'
    )
  })

  it('should have correct aria-label', () => {
    render(<LinkedInIcon />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('aria-label', 'Linkedin')
  })

  it('should open in new tab', () => {
    render(<LinkedInIcon />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('should have correct title', () => {
    render(<LinkedInIcon />)

    const title = screen.getByTitle('LinkedIn')
    expect(title).toBeInTheDocument()
  })

  it('should have correct SVG attributes', () => {
    render(<LinkedInIcon />)

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
    render(<LinkedInIcon />)

    const icon = screen.getByRole('img')
    expect(icon).toHaveClass('feather', 'feather-linkedin')
  })

  it('should contain correct LinkedIn icon elements', () => {
    const { container } = render(<LinkedInIcon />)

    const path = container.querySelector('path')
    const rect = container.querySelector('rect')
    const circle = container.querySelector('circle')

    expect(path).toBeInTheDocument()
    expect(rect).toBeInTheDocument()
    expect(circle).toBeInTheDocument()
  })

  it('should have correct path data', () => {
    const { container } = render(<LinkedInIcon />)

    const path = container.querySelector('path')
    expect(path).toHaveAttribute(
      'd',
      'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'
    )
  })

  it('should have correct rect attributes', () => {
    const { container } = render(<LinkedInIcon />)

    const rect = container.querySelector('rect')
    expect(rect).toHaveAttribute('x', '2')
    expect(rect).toHaveAttribute('y', '9')
    expect(rect).toHaveAttribute('width', '4')
    expect(rect).toHaveAttribute('height', '12')
  })

  it('should have correct circle attributes', () => {
    const { container } = render(<LinkedInIcon />)

    const circle = container.querySelector('circle')
    expect(circle).toHaveAttribute('cx', '4')
    expect(circle).toHaveAttribute('cy', '4')
    expect(circle).toHaveAttribute('r', '2')
  })

  it('should be accessible', () => {
    render(<LinkedInIcon />)

    const link = screen.getByRole('link')
    const icon = screen.getByRole('img')

    expect(link).toHaveAttribute('aria-label', 'Linkedin')
    expect(icon).toHaveAttribute('role', 'img')

    const title = screen.getByTitle('LinkedIn')
    expect(title).toBeInTheDocument()
  })
})
