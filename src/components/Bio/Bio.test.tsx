import React from 'react'
import { render, screen } from '@testing-library/react'
import Bio from './Bio'

describe('Bio', () => {
  it('should render correctly', () => {
    const { container } = render(<Bio />)

    const section = container.querySelector('section.main-bio')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('main-bio')
  })

  it('should render greeting heading', () => {
    render(<Bio />)

    const greeting = screen.getByRole('heading', { level: 1 })
    expect(greeting).toBeInTheDocument()
    expect(greeting).toHaveTextContent('Hi, my name is')
  })

  it('should render name heading', () => {
    render(<Bio />)

    const nameHeading = screen.getByRole('heading', { level: 2 })
    expect(nameHeading).toBeInTheDocument()
    expect(nameHeading).toHaveTextContent('Steve Hunley.')
    expect(nameHeading).toHaveClass('big-heading')
  })

  it('should render expertise heading', () => {
    render(<Bio />)

    const expertiseHeading = screen.getByRole('heading', { level: 3 })
    expect(expertiseHeading).toBeInTheDocument()
    expect(expertiseHeading).toHaveTextContent(
      'Expert in HTML, CSS, JavaScript and React.'
    )
    expect(expertiseHeading).toHaveClass('big-heading')
  })

  it('should render description paragraph', () => {
    render(<Bio />)

    const description = screen.getByText((content, element) => {
      return (
        element?.tagName.toLowerCase() === 'p' &&
        content.includes('software engineer specializing')
      )
    })
    expect(description).toBeInTheDocument()
    expect(description.tagName).toBe('P')
  })

  it('should have correct transition delays', () => {
    const { container } = render(<Bio />)

    const divs = container.querySelectorAll('section > div')
    expect(divs).toHaveLength(4)

    expect(divs[0]).toHaveStyle('transition-delay: 100ms')
    expect(divs[1]).toHaveStyle('transition-delay: 200ms')
    expect(divs[2]).toHaveStyle('transition-delay: 300ms')
    expect(divs[3]).toHaveStyle('transition-delay: 400ms')
  })

  it('should have correct heading hierarchy', () => {
    render(<Bio />)

    const h1 = screen.getByRole('heading', { level: 1 })
    const h2 = screen.getByRole('heading', { level: 2 })
    const h3 = screen.getByRole('heading', { level: 3 })

    expect(h1).toBeInTheDocument()
    expect(h2).toBeInTheDocument()
    expect(h3).toBeInTheDocument()
  })

  it('should render all text content', () => {
    render(<Bio />)

    expect(screen.getByText('Hi, my name is')).toBeInTheDocument()
    expect(screen.getByText('Steve Hunley.')).toBeInTheDocument()
    expect(
      screen.getByText('Expert in HTML, CSS, JavaScript and React.')
    ).toBeInTheDocument()
    expect(
      screen.getByText((content) =>
        content.includes('software engineer specializing')
      )
    ).toBeInTheDocument()
  })

  it('should be accessible', () => {
    const { container } = render(<Bio />)

    const section = container.querySelector('section')
    const headings = screen.getAllByRole('heading')

    expect(section).toBeInTheDocument()
    expect(headings).toHaveLength(3)

    // Check heading levels are in correct order
    expect(headings[0]).toHaveProperty('tagName', 'H1')
    expect(headings[1]).toHaveProperty('tagName', 'H2')
    expect(headings[2]).toHaveProperty('tagName', 'H3')
  })

  it('should have correct structure', () => {
    const { container } = render(<Bio />)

    const section = container.querySelector('section.main-bio')
    expect(section).toBeInTheDocument()

    const divs = section?.querySelectorAll('div')
    expect(divs).toHaveLength(4)
  })

  it('should contain technologies mentioned', () => {
    render(<Bio />)

    const expertiseText = screen.getByText(
      'Expert in HTML, CSS, JavaScript and React.'
    )
    expect(expertiseText).toContainHTML('HTML')
    expect(expertiseText).toContainHTML('CSS')
    expect(expertiseText).toContainHTML('JavaScript')
    expect(expertiseText).toContainHTML('React')
  })

  it('should describe role and specialization', () => {
    render(<Bio />)

    const description = screen.getByText((content) =>
      content.includes('software engineer specializing')
    )
    expect(description).toHaveTextContent('software engineer')
    expect(description).toHaveTextContent('responsive')
    expect(description).toHaveTextContent('accessible')
    expect(description).toHaveTextContent('digital experiences')
  })
})
