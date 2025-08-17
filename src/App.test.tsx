import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

// Mock all child components
jest.mock('./components/Header', () => {
  return function Header() {
    return <header data-testid="header">Header Component</header>
  }
})

jest.mock('./components/Main', () => {
  return function Main() {
    return <main data-testid="main">Main Component</main>
  }
})

jest.mock('./components/Footer', () => {
  return function Footer() {
    return <footer data-testid="footer">Footer Component</footer>
  }
})

jest.mock('./components/SocialMedia', () => {
  return function SocialMedia() {
    return <div data-testid="social-media">SocialMedia Component</div>
  }
})

jest.mock('./components/Email', () => {
  return function Email() {
    return <div data-testid="email">Email Component</div>
  }
})

describe('App', () => {
  it('should render correctly', () => {
    render(<App />)

    const appContainer = document.querySelector('#app')
    expect(appContainer).toBeInTheDocument()
  })

  it('should render all main components', () => {
    render(<App />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('main')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('social-media')).toBeInTheDocument()
    expect(screen.getByTestId('email')).toBeInTheDocument()
  })

  it('should render components in correct order', () => {
    const { container } = render(<App />)

    const appDiv = container.querySelector('#app')
    const children = Array.from(appDiv?.children ?? [])

    expect(children).toHaveLength(5)
    expect(children[0]).toHaveAttribute('data-testid', 'header')
    expect(children[1]).toHaveAttribute('data-testid', 'main')
    expect(children[2]).toHaveAttribute('data-testid', 'footer')
    expect(children[3]).toHaveAttribute('data-testid', 'social-media')
    expect(children[4]).toHaveAttribute('data-testid', 'email')
  })

  it('should have correct structure', () => {
    const { container } = render(<App />)

    const appDiv = container.querySelector('div#app')
    expect(appDiv).toBeInTheDocument()
  })

  it('should render semantic HTML elements through components', () => {
    render(<App />)

    // These are rendered by the mocked components but represent the semantic structure
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('main')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('should be accessible with proper document structure', () => {
    render(<App />)

    // Verify the main structural components are present
    const header = screen.getByTestId('header')
    const main = screen.getByTestId('main')
    const footer = screen.getByTestId('footer')

    expect(header).toBeInTheDocument()
    expect(main).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })

  it('should include fixed position components', () => {
    render(<App />)

    // SocialMedia and Email are typically fixed position components
    const socialMedia = screen.getByTestId('social-media')
    const email = screen.getByTestId('email')

    expect(socialMedia).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  })

  it('should render all components without errors', () => {
    expect(() => {
      render(<App />)
    }).not.toThrow()
  })

  it('should have the app container as root element', () => {
    const { container } = render(<App />)

    const appDiv = container.firstChild
    expect(appDiv).toHaveAttribute('id', 'app')
  })

  it('should contain all necessary portfolio sections', () => {
    render(<App />)

    // Verify all major portfolio components are included
    expect(screen.getByTestId('header')).toBeInTheDocument() // Navigation
    expect(screen.getByTestId('main')).toBeInTheDocument() // Main content
    expect(screen.getByTestId('footer')).toBeInTheDocument() // Footer info
    expect(screen.getByTestId('social-media')).toBeInTheDocument() // Social links
    expect(screen.getByTestId('email')).toBeInTheDocument() // Contact email
  })
})
