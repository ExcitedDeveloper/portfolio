import React from 'react'
import { render, screen } from '@testing-library/react'
import ExternalLinkIcon from './ExternalLinkIcon'

describe('ExternalLinkIcon', () => {
  it('should render correctly', () => {
    render(<ExternalLinkIcon />)

    const icon = screen.getByRole('img')
    expect(icon).toBeInTheDocument()
  })

  it('should have correct title', () => {
    render(<ExternalLinkIcon />)

    const title = screen.getByTitle('External Link')
    expect(title).toBeInTheDocument()
  })

  it('should apply default className', () => {
    render(<ExternalLinkIcon />)

    const icon = screen.getByRole('img')
    expect(icon).toHaveClass('feather', 'feather-external-link')
  })

  it('should apply custom className', () => {
    const customClass = 'custom-external-link-icon'
    render(<ExternalLinkIcon className={customClass} />)

    const icon = screen.getByRole('img')
    expect(icon).toHaveClass(customClass)
    expect(icon).not.toHaveClass('feather-external-link')
  })

  it('should have correct SVG attributes', () => {
    render(<ExternalLinkIcon />)

    const icon = screen.getByRole('img')
    expect(icon).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg')
    expect(icon).toHaveAttribute('viewBox', '0 0 24 24')
    expect(icon).toHaveAttribute('fill', 'none')
    expect(icon).toHaveAttribute('stroke', 'currentColor')
    expect(icon).toHaveAttribute('stroke-width', '2')
    expect(icon).toHaveAttribute('stroke-linecap', 'round')
    expect(icon).toHaveAttribute('stroke-linejoin', 'round')
  })

  it('should contain path and polyline elements', () => {
    const { container } = render(<ExternalLinkIcon />)

    const path = container.querySelector('path')
    const polyline = container.querySelector('polyline')
    const line = container.querySelector('line')

    expect(path).toBeInTheDocument()
    expect(polyline).toBeInTheDocument()
    expect(line).toBeInTheDocument()
  })

  it('should have correct path data', () => {
    const { container } = render(<ExternalLinkIcon />)

    const path = container.querySelector('path')
    expect(path).toHaveAttribute(
      'd',
      'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'
    )
  })

  it('should have correct polyline points', () => {
    const { container } = render(<ExternalLinkIcon />)

    const polyline = container.querySelector('polyline')
    expect(polyline).toHaveAttribute('points', '15 3 21 3 21 9')
  })

  it('should have correct line coordinates', () => {
    const { container } = render(<ExternalLinkIcon />)

    const line = container.querySelector('line')
    expect(line).toHaveAttribute('x1', '10')
    expect(line).toHaveAttribute('y1', '14')
    expect(line).toHaveAttribute('x2', '21')
    expect(line).toHaveAttribute('y2', '3')
  })
})
