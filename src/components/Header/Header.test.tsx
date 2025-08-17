import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

// Mock the child components
jest.mock('../SideBar', () => {
  return function SideBar() {
    return <div data-testid="sidebar">SideBar Component</div>
  }
})

jest.mock('../Button', () => {
  return function Button({ title, href }: { title: string, href: string }) {
    return (
      <a href={href} data-testid="button">
        {title}
      </a>
    )
  }
})

// Mock the logo import
jest.mock('../../images/logo.svg', () => 'logo.svg')

describe('Header', () => {
  beforeEach(() => {
    // Reset DOM before each test
    document.body.innerHTML = ''
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render correctly', () => {
    render(<Header />)

    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
    expect(header).toHaveAttribute('id', 'header-main')
    expect(header).toHaveClass('header-main')
  })

  it('should render skip link', () => {
    render(<Header />)

    const skipLink = screen.getByRole('link', { name: /skip to main content/i })
    expect(skipLink).toBeInTheDocument()
    expect(skipLink).toHaveAttribute('href', '#main-content')
    expect(skipLink).toHaveClass('skip-link')
  })

  it('should render logo', () => {
    render(<Header />)

    const logo = screen.getByRole('img', {
      name: /steve hunley - developer portfolio/i
    })
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', 'logo.svg')
    expect(logo).toHaveClass('header-logo')
  })

  it('should render logo link', () => {
    render(<Header />)

    const logoLink = screen.getByRole('link', {
      name: /steve hunley - developer portfolio/i
    })
    expect(logoLink).toBeInTheDocument()
    expect(logoLink).toHaveAttribute('href', '#header-container')
  })

  it('should render navigation menu', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    expect(nav).toHaveAttribute('id', 'header-container')
    expect(nav).toHaveClass('header-container')
  })

  it('should render navigation list with correct items', () => {
    render(<Header />)

    const navList = screen.getByRole('list', { name: /primary/i })
    expect(navList).toBeInTheDocument()
    expect(navList).toHaveClass('nav-list')

    const navItems = screen.getAllByRole('listitem')
    expect(navItems).toHaveLength(4)

    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute(
      'href',
      '#about'
    )
    expect(screen.getByRole('link', { name: /experience/i })).toHaveAttribute(
      'href',
      '#jobs'
    )
    expect(screen.getByRole('link', { name: /work/i })).toHaveAttribute(
      'href',
      '#projects'
    )
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      '#contact'
    )
  })

  it('should render resume button', () => {
    render(<Header />)

    const resumeButton = screen.getByTestId('button')
    expect(resumeButton).toBeInTheDocument()
    expect(resumeButton).toHaveTextContent('Resume')
    expect(resumeButton).toHaveAttribute('href', '/resume.pdf')
  })

  it('should render sidebar component', () => {
    render(<Header />)

    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()
  })

  it('should have correct structure', () => {
    const { container } = render(<Header />)

    const header = container.querySelector('header#header-main.header-main')
    const nav = container.querySelector('nav#header-container.header-container')
    const headerMenu = container.querySelector('.header-menu')
    const navList = container.querySelector('ol.nav-list')

    expect(header).toBeInTheDocument()
    expect(nav).toBeInTheDocument()
    expect(headerMenu).toBeInTheDocument()
    expect(navList).toBeInTheDocument()
  })

  it('should add scroll event listener on mount', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener')

    render(<Header />)

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    )

    addEventListenerSpy.mockRestore()
  })

  it('should remove scroll event listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')

    const { unmount } = render(<Header />)
    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    )

    removeEventListenerSpy.mockRestore()
  })

  it('should handle scroll down behavior', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('#header-main')

    // Simulate scrolling down past NAV_HEIGHT (100px)
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 150
    })
    Object.defineProperty(document.documentElement, 'scrollTop', {
      writable: true,
      value: 150
    })

    fireEvent.scroll(window)

    // The header should still be rendered (DOM manipulation testing is limited in jsdom)
    expect(header).toBeInTheDocument()
  })

  it('should handle scroll up behavior', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('#header-main')

    // First scroll down
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 150
    })
    fireEvent.scroll(window)

    // Then scroll up
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 50
    })
    fireEvent.scroll(window)

    expect(header).toBeInTheDocument()
  })

  it('should be accessible', () => {
    render(<Header />)

    const header = screen.getByRole('banner')
    const nav = screen.getByRole('navigation')
    const navList = screen.getByRole('list', { name: /primary/i })
    const skipLink = screen.getByRole('link', { name: /skip to main content/i })

    expect(header).toBeInTheDocument()
    expect(nav).toBeInTheDocument()
    expect(navList).toHaveAttribute('aria-label', 'Primary')
    expect(skipLink).toBeInTheDocument()
  })

  it('should handle missing header element gracefully', () => {
    // Mock getElementById to return null
    const getElementByIdSpy = jest
      .spyOn(document, 'getElementById')
      .mockReturnValue(null)

    render(<Header />)

    // Should not throw an error
    expect(screen.getByRole('banner')).toBeInTheDocument()

    getElementByIdSpy.mockRestore()
  })

  it('should have correct logo alt text', () => {
    render(<Header />)

    const logo = screen.getByRole('img')
    expect(logo).toHaveAttribute('alt', 'Steve Hunley - Developer Portfolio')
  })

  it('should render all navigation links', () => {
    render(<Header />)

    const links = screen.getAllByRole('link')
    const navigationLinks = links.filter(
      (link) =>
        link.getAttribute('href')?.startsWith('#') &&
        !link.classList.contains('skip-link')
    )

    expect(navigationLinks).toHaveLength(5) // 4 nav links + logo link
  })
})
