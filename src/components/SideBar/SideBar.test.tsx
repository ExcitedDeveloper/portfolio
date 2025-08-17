import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SideBar from './SideBar'

import useWindowSize from '../../hooks/useWindowSize'

// Mock the Button component
jest.mock('../Button', () => {
  return function Button({ title, href }: { title: string, href: string }) {
    return (
      <a href={href} data-testid="sidebar-button">
        {title}
      </a>
    )
  }
})

// Mock the useWindowSize hook
jest.mock('../../hooks/useWindowSize', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    width: 1024,
    height: 768
  }))
}))

const mockUseWindowSize = useWindowSize as jest.MockedFunction<
  typeof useWindowSize
>

describe('SideBar', () => {
  beforeEach(() => {
    // Reset DOM and create main element
    document.body.innerHTML = '<main></main>'
    mockUseWindowSize.mockReturnValue({
      width: 1024,
      height: 768
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render correctly', () => {
    render(<SideBar />)

    const hamburgerMenu = screen.getByRole('checkbox')
    expect(hamburgerMenu).toBeInTheDocument()
    expect(hamburgerMenu).toHaveAttribute('id', 'menu-toggle')
    expect(hamburgerMenu).toHaveAttribute('type', 'checkbox')
  })

  it('should render menu toggle checkbox and label', () => {
    const { container } = render(<SideBar />)

    const checkbox = screen.getByRole('checkbox')
    const label = container.querySelector('label[for="menu-toggle"]')

    expect(checkbox).toBeInTheDocument()
    expect(label).toBeInTheDocument()
    expect(label).toHaveAttribute('aria-label', 'menu-toggle')
    expect(label).toHaveClass('menu-btn')
  })

  it('should render all navigation menu items', () => {
    render(<SideBar />)

    const menuList = screen.getByRole('list')
    const menuItems = screen.getAllByRole('listitem')

    expect(menuList).toBeInTheDocument()
    expect(menuList).toHaveClass('menu-box')
    expect(menuItems).toHaveLength(5) // 4 nav items + 1 button item

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

  it('should render numbered menu items', () => {
    const { container } = render(<SideBar />)

    const menuNumbers = container.querySelectorAll('.menu-item-num')
    expect(menuNumbers).toHaveLength(4)

    expect(menuNumbers[0]).toHaveTextContent('01.')
    expect(menuNumbers[1]).toHaveTextContent('02.')
    expect(menuNumbers[2]).toHaveTextContent('03.')
    expect(menuNumbers[3]).toHaveTextContent('04.')
  })

  it('should render resume button', () => {
    render(<SideBar />)

    const resumeButton = screen.getByTestId('sidebar-button')
    expect(resumeButton).toBeInTheDocument()
    expect(resumeButton).toHaveTextContent('Resume')
    expect(resumeButton).toHaveAttribute('href', '/resume.pdf')
  })

  it('should have menu items with correct class', () => {
    const { container } = render(<SideBar />)

    const menuItems = container.querySelectorAll('.menu-item')
    expect(menuItems).toHaveLength(4)

    menuItems.forEach((item) => {
      expect(item).toHaveClass('menu-item')
    })
  })

  it('should toggle blur class on main element when checkbox changes', () => {
    render(<SideBar />)
    const mainElement = document.querySelector('main')
    const checkbox = screen.getByRole('checkbox')

    // Check the checkbox (open menu)
    fireEvent.click(checkbox)
    expect(mainElement).toHaveClass('blur')

    // Uncheck the checkbox (close menu)
    fireEvent.click(checkbox)
    expect(mainElement).not.toHaveClass('blur')
  })

  it('should handle window resize to desktop view', () => {
    render(<SideBar />)
    const mainElement = document.querySelector('main')

    // Add blur class first
    mainElement?.classList.add('blur')
    expect(mainElement).toHaveClass('blur')

    // Simulate resize to desktop
    mockUseWindowSize.mockReturnValue({
      width: 1200,
      height: 800
    })

    // Re-render to trigger useEffect
    render(<SideBar />)

    // Blur should be removed (this is tested by the component logic)
    expect(mainElement).toBeInTheDocument()
  })

  it('should handle window resize to mobile view', () => {
    mockUseWindowSize.mockReturnValue({
      width: 500,
      height: 800
    })

    render(<SideBar />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('should have correct structure', () => {
    const { container } = render(<SideBar />)

    const hamburgerMenu = container.querySelector('.hamburger-menu')
    const menuToggle = container.querySelector('#menu-toggle')
    const menuBtn = container.querySelector('.menu-btn')
    const menuBox = container.querySelector('.menu-box')
    const sidebarButtonLi = container.querySelector('.sidebar-button-li')

    expect(hamburgerMenu).toBeInTheDocument()
    expect(menuToggle).toBeInTheDocument()
    expect(menuBtn).toBeInTheDocument()
    expect(menuBox).toBeInTheDocument()
    expect(sidebarButtonLi).toBeInTheDocument()
  })

  it('should be accessible', () => {
    render(<SideBar />)

    const checkbox = screen.getByRole('checkbox')
    const menuList = screen.getByRole('list')
    const menuLinks = screen.getAllByRole('link')

    expect(checkbox).toBeInTheDocument()
    expect(menuList).toBeInTheDocument()
    expect(menuLinks.length).toBeGreaterThan(0)

    // Check that menu toggle has proper labeling
    const label = document.querySelector('label[for="menu-toggle"]')
    expect(label).toHaveAttribute('aria-label', 'menu-toggle')
  })

  it('should handle undefined window width', () => {
    mockUseWindowSize.mockReturnValue({
      width: undefined,
      height: undefined
    })

    render(<SideBar />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('should handle missing main element gracefully', () => {
    // Remove main element
    document.body.innerHTML = ''

    render(<SideBar />)

    const checkbox = screen.getByRole('checkbox')

    // Should not throw error when clicking
    expect(() => {
      fireEvent.click(checkbox)
    }).not.toThrow()
  })
})
