import React from 'react'
import { render, screen } from '@testing-library/react'
import Email from './Email'

describe('Email', () => {
  it('should render correctly', () => {
    render(<Email />)

    const aside = screen.getByRole('complementary')
    expect(aside).toBeInTheDocument()
    expect(aside).toHaveAttribute('aria-label', 'Email')
  })

  it('should render email link', () => {
    render(<Email />)

    const emailLink = screen.getByRole('link')
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:shunley2000@yahoo.com')
    expect(emailLink).toHaveClass('email-link')
    expect(emailLink).toHaveTextContent('shunley2000@yahoo.com')
  })

  it('should have correct structure', () => {
    const { container } = render(<Email />)

    const aside = container.querySelector('aside[aria-label="Email"]')
    const emailContainer = container.querySelector('.email-container')
    const emailWrapper = container.querySelector('.email-wrapper')
    const emailLink = container.querySelector('a.email-link')

    expect(aside).toBeInTheDocument()
    expect(emailContainer).toBeInTheDocument()
    expect(emailWrapper).toBeInTheDocument()
    expect(emailLink).toBeInTheDocument()
  })

  it('should be accessible', () => {
    render(<Email />)

    const aside = screen.getByRole('complementary')
    const link = screen.getByRole('link')

    expect(aside).toHaveAttribute('aria-label', 'Email')
    expect(link).toHaveAttribute('href', 'mailto:shunley2000@yahoo.com')
  })

  it('should render as aside element', () => {
    const { container } = render(<Email />)

    const aside = container.querySelector('aside')
    expect(aside).toBeInTheDocument()
    expect(aside?.tagName).toBe('ASIDE')
  })

  it('should contain valid email address', () => {
    render(<Email />)

    const emailLink = screen.getByRole('link')
    const emailText = emailLink.textContent

    expect(emailText).toBe('shunley2000@yahoo.com')
    expect(emailText).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) // Basic email regex
  })

  it('should open email client when clicked', () => {
    render(<Email />)

    const emailLink = screen.getByRole('link')
    expect(emailLink.getAttribute('href')).toBe('mailto:shunley2000@yahoo.com')
  })

  it('should have consistent email text and href', () => {
    render(<Email />)

    const emailLink = screen.getByRole('link')
    const emailAddress = 'shunley2000@yahoo.com'

    expect(emailLink).toHaveTextContent(emailAddress)
    expect(emailLink).toHaveAttribute('href', `mailto:${emailAddress}`)
  })

  it('should have proper nesting structure', () => {
    const { container } = render(<Email />)

    const aside = container.querySelector('aside')
    const emailContainer = aside?.querySelector('.email-container')
    const emailWrapper = emailContainer?.querySelector('.email-wrapper')
    const emailLink = emailWrapper?.querySelector('a.email-link')

    expect(aside).toContainElement(emailContainer)
    expect(emailContainer).toContainElement(emailWrapper)
    expect(emailWrapper).toContainElement(emailLink)
  })
})
