import React from 'react'
import { render, screen } from '@testing-library/react'
import About from './About'

// Mock the child components
jest.mock('./AboutSkills', () => {
  return function AboutSkills() {
    return <div data-testid="about-skills">About Skills Component</div>
  }
})

jest.mock('./AboutHeadshot', () => {
  return function AboutHeadshot() {
    return <div data-testid="about-headshot">About Headshot Component</div>
  }
})

describe('About', () => {
  it('should render correctly', () => {
    const { container } = render(<About />)

    const section = container.querySelector('section#about.about-section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'about')
    expect(section).toHaveClass('about-section')
  })

  it('should render the heading', () => {
    render(<About />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('About Me')
    expect(heading).toHaveClass('numbered-heading')
  })

  it('should render child components', () => {
    render(<About />)

    const aboutSkills = screen.getByTestId('about-skills')
    const aboutHeadshot = screen.getByTestId('about-headshot')

    expect(aboutSkills).toBeInTheDocument()
    expect(aboutHeadshot).toBeInTheDocument()
  })

  it('should have correct structure', () => {
    const { container } = render(<About />)

    const inner = container.querySelector('.inner')
    expect(inner).toBeInTheDocument()

    const aboutSkills = screen.getByTestId('about-skills')
    const aboutHeadshot = screen.getByTestId('about-headshot')

    expect(inner).toContainElement(aboutSkills)
    expect(inner).toContainElement(aboutHeadshot)
  })

  it('should be accessible', () => {
    const { container } = render(<About />)

    const section = container.querySelector('section#about')
    const heading = screen.getByRole('heading', { level: 2 })

    expect(section).toBeInTheDocument()
    expect(heading).toBeInTheDocument()

    // Check that the section has an id for navigation
    expect(section).toHaveAttribute('id', 'about')
  })

  it('should render as a section element', () => {
    const { container } = render(<About />)

    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'about')
  })
})
