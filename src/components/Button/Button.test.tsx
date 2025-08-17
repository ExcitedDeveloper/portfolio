import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  const defaultProps = {
    title: 'Test Button',
    href: 'https://example.com'
  }

  it('should render correctly', () => {
    render(<Button {...defaultProps} />)

    const container = screen.getByRole('link').parentElement
    const link = screen.getByRole('link')

    expect(container).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })

  it('should display correct title', () => {
    render(<Button {...defaultProps} />)

    const link = screen.getByRole('link')
    expect(link).toHaveTextContent('Test Button')
  })

  it('should have correct href', () => {
    render(<Button {...defaultProps} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('should apply default classes', () => {
    const { container } = render(<Button {...defaultProps} />)

    const buttonContainer = container.querySelector('.button-container')
    const button = screen.getByRole('link')

    expect(buttonContainer).toHaveClass('button-container')
    expect(button).toHaveClass('button')
  })

  it('should apply custom container class', () => {
    const { container } = render(
      <Button {...defaultProps} containerClass="custom-container" />
    )

    const buttonContainer = container.querySelector('.button-container')
    expect(buttonContainer).toHaveClass('button-container', 'custom-container')
  })

  it('should apply custom button class', () => {
    render(<Button {...defaultProps} buttonClass="custom-button" />)

    const button = screen.getByRole('link')
    expect(button).toHaveClass('button', 'custom-button')
  })

  it('should apply both custom classes', () => {
    const { container } = render(
      <Button
        {...defaultProps}
        containerClass="custom-container"
        buttonClass="custom-button"
      />
    )

    const buttonContainer = container.querySelector('.button-container')
    const button = screen.getByRole('link')

    expect(buttonContainer).toHaveClass('button-container', 'custom-container')
    expect(button).toHaveClass('button', 'custom-button')
  })

  it('should handle empty custom classes', () => {
    const { container } = render(
      <Button {...defaultProps} containerClass="" buttonClass="" />
    )

    const buttonContainer = container.querySelector('.button-container')
    const button = screen.getByRole('link')

    expect(buttonContainer).toHaveClass('button-container')
    expect(button).toHaveClass('button')
  })

  it('should be accessible', () => {
    render(<Button {...defaultProps} />)

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveTextContent('Test Button')
  })

  it('should handle different href values', () => {
    const { rerender } = render(<Button title="Test" href="/relative" />)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/relative')

    rerender(<Button title="Test" href="mailto:test@example.com" />)
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'mailto:test@example.com'
    )

    rerender(<Button title="Test" href="tel:+1234567890" />)
    expect(screen.getByRole('link')).toHaveAttribute('href', 'tel:+1234567890')
  })

  it('should handle long titles', () => {
    const longTitle =
      'This is a very long button title that might wrap to multiple lines'
    render(<Button title={longTitle} href="https://example.com" />)

    const link = screen.getByRole('link')
    expect(link).toHaveTextContent(longTitle)
  })
})
