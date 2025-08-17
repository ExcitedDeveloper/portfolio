import React from 'react'
import { render, screen } from '@testing-library/react'
import Main from './Main'

// Mock all child components
jest.mock('../Bio', () => {
  return function Bio() {
    return <div data-testid="bio">Bio Component</div>
  }
})

jest.mock('../About', () => {
  return function About() {
    return <div data-testid="about">About Component</div>
  }
})

jest.mock('../Jobs', () => {
  return function Jobs() {
    return <div data-testid="jobs">Jobs Component</div>
  }
})

jest.mock('../Projects', () => {
  return function Projects() {
    return <div data-testid="projects">Projects Component</div>
  }
})

jest.mock('../Contact', () => {
  return function Contact() {
    return <div data-testid="contact">Contact Component</div>
  }
})

describe('Main', () => {
  it('should render correctly', () => {
    render(<Main />)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(main).toHaveAttribute('id', 'main-content')
    expect(main).toHaveClass('main-content', 'fill-height')
  })

  it('should render all child components', () => {
    render(<Main />)

    expect(screen.getByTestId('bio')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByTestId('jobs')).toBeInTheDocument()
    expect(screen.getByTestId('projects')).toBeInTheDocument()
    expect(screen.getByTestId('contact')).toBeInTheDocument()
  })

  it('should render components in correct order', () => {
    const { container } = render(<Main />)

    const main = container.querySelector('main')
    const children = Array.from(main?.children ?? [])

    expect(children).toHaveLength(5)
    expect(children[0]).toHaveAttribute('data-testid', 'bio')
    expect(children[1]).toHaveAttribute('data-testid', 'about')
    expect(children[2]).toHaveAttribute('data-testid', 'jobs')
    expect(children[3]).toHaveAttribute('data-testid', 'projects')
    expect(children[4]).toHaveAttribute('data-testid', 'contact')
  })

  it('should have correct structure', () => {
    const { container } = render(<Main />)

    const main = container.querySelector(
      'main#main-content.main-content.fill-height'
    )
    expect(main).toBeInTheDocument()
  })

  it('should be accessible', () => {
    render(<Main />)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(main).toHaveAttribute('id', 'main-content')
  })

  it('should render as main element', () => {
    const { container } = render(<Main />)

    const main = container.querySelector('main')
    expect(main).toBeInTheDocument()
    expect(main?.tagName).toBe('MAIN')
  })

  it('should contain all sections for a complete portfolio', () => {
    render(<Main />)

    // Verify all major portfolio sections are present
    expect(screen.getByTestId('bio')).toBeInTheDocument() // Introduction/Hero
    expect(screen.getByTestId('about')).toBeInTheDocument() // About section
    expect(screen.getByTestId('jobs')).toBeInTheDocument() // Experience
    expect(screen.getByTestId('projects')).toBeInTheDocument() // Portfolio work
    expect(screen.getByTestId('contact')).toBeInTheDocument() // Contact info
  })
})
