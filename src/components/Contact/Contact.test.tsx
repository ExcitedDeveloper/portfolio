import React from 'react'
import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact', () => {
  it('should render correctly', () => {
    const { container } = render(<Contact />)

    const section = container.querySelector('section#contact.contact-section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'contact')
    expect(section).toHaveClass('contact-section')
  })

  it('should render both headings', () => {
    render(<Contact />)

    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings).toHaveLength(2)

    expect(headings[0]).toHaveTextContent('What\'s Next?')
    expect(headings[0]).toHaveClass('numbered-heading', 'overline')

    expect(headings[1]).toHaveTextContent('Get In Touch')
    expect(headings[1]).toHaveClass('title')
  })

  it('should render contact description', () => {
    render(<Contact />)

    const description = screen.getByText(/Although I'm not currently looking/)
    expect(description).toBeInTheDocument()
    expect(description.tagName).toBe('P')
  })

  it('should render email link', () => {
    render(<Contact />)

    const emailLink = screen.getByRole('link', { name: /say hello/i })
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:shunley2000@yahoo.com')
    expect(emailLink).toHaveAttribute('target', '_blank')
    expect(emailLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(emailLink).toHaveClass('email-link')
  })

  it('should have correct inline styles', () => {
    const { container } = render(<Contact />)

    const section = container.querySelector('section#contact')
    expect(section).toHaveStyle('visibility: visible')
    expect(section).toHaveStyle('opacity: 1')
    expect(section).toHaveStyle(
      'transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
    )
    expect(section).toHaveStyle(
      'transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s'
    )
  })

  it('should be accessible', () => {
    const { container } = render(<Contact />)

    const section = container.querySelector('section#contact')
    const headings = screen.getAllByRole('heading', { level: 2 })
    const link = screen.getByRole('link')

    expect(section).toBeInTheDocument()
    expect(headings).toHaveLength(2)
    expect(link).toBeInTheDocument()

    // Check that the section has an id for navigation
    expect(section).toHaveAttribute('id', 'contact')

    // Check that the email link is accessible
    expect(link).toHaveAttribute('href', 'mailto:shunley2000@yahoo.com')
  })

  it('should render as a section element', () => {
    const { container } = render(<Contact />)

    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'contact')
  })

  it('should have correct text content', () => {
    render(<Contact />)

    expect(screen.getByText('What\'s Next?')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(
      screen.getByText(/Although I'm not currently looking/)
    ).toBeInTheDocument()
    expect(screen.getByText('Say Hello')).toBeInTheDocument()
  })

  it('should open email client when email link is clicked', () => {
    render(<Contact />)

    const emailLink = screen.getByRole('link', { name: /say hello/i })
    expect(emailLink.getAttribute('href')).toBe('mailto:shunley2000@yahoo.com')
  })

  it('should have proper semantic structure', () => {
    const { container } = render(<Contact />)

    const section = container.querySelector('section#contact.contact-section')
    const overlineHeading = container.querySelector(
      'h2.numbered-heading.overline'
    )
    const titleHeading = container.querySelector('h2.title')
    const paragraph = container.querySelector('p')
    const emailLink = container.querySelector('a.email-link')

    expect(section).toBeInTheDocument()
    expect(overlineHeading).toBeInTheDocument()
    expect(titleHeading).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
    expect(emailLink).toBeInTheDocument()
  })
})
