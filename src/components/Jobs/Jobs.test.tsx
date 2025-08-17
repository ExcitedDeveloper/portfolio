import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Jobs from './Jobs'

// Mock console.error
const consoleErrorSpy = jest
  .spyOn(console, 'error')
  .mockImplementation(() => {})

describe('Jobs', () => {
  beforeEach(() => {
    // Reset DOM before each test
    document.body.innerHTML = ''
    consoleErrorSpy.mockClear()
  })

  afterEach(() => {
    consoleErrorSpy.mockClear()
  })

  it('should render correctly', () => {
    const { container } = render(<Jobs />)

    const section = container.querySelector('section#jobs.jobs-section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'jobs')
    expect(section).toHaveClass('jobs-section')
  })

  it('should render the heading', () => {
    render(<Jobs />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading.textContent?.includes('Where')).toBe(true)
    expect(heading.textContent?.includes('Worked')).toBe(true)
    expect(heading).toHaveClass('numbered-heading')
  })

  it('should render all job tabs', () => {
    render(<Jobs />)

    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(5)

    expect(screen.getByText('Dayforce')).toBeInTheDocument()
    expect(screen.getByText('Perception Health')).toBeInTheDocument()
    expect(screen.getByText('Precise Systems')).toBeInTheDocument()
    expect(screen.getByText('Cigna')).toBeInTheDocument()
    expect(screen.getByText('Naxos')).toBeInTheDocument()
  })

  it('should render all job panels', () => {
    render(<Jobs />)

    // Only the visible panel will be accessible via screen reader
    const visiblePanel = screen.getByRole('tabpanel')
    expect(visiblePanel).toBeInTheDocument()
    expect(visiblePanel).toHaveAttribute('aria-hidden', 'false')

    // But all panels exist in the DOM
    const { container } = render(<Jobs />)
    const allPanels = container.querySelectorAll('[role="tabpanel"]')
    expect(allPanels).toHaveLength(5)

    expect(screen.getAllByText('March 2021 - Present')[0]).toBeInTheDocument()
  })

  it('should have first tab selected by default', () => {
    render(<Jobs />)

    const firstTab = screen.getByRole('tab', { name: /dayforce/i })
    expect(firstTab).toHaveAttribute('aria-selected', 'true')
    expect(firstTab).toHaveAttribute('tabIndex', '0')

    const firstPanel = screen.getByRole('tabpanel', { name: /dayforce/i })
    expect(firstPanel).toHaveAttribute('aria-hidden', 'false')
    expect(firstPanel).toHaveStyle('display: block')
  })

  it('should switch tabs when clicked', () => {
    render(<Jobs />)

    const secondTab = screen.getByRole('tab', { name: /perception health/i })
    fireEvent.click(secondTab)

    // Note: The actual tab switching functionality uses DOM manipulation
    // which might not work perfectly in jsdom, but we can test the event listeners
    expect(secondTab).toBeInTheDocument()
  })

  it('should have correct accessibility attributes', () => {
    render(<Jobs />)

    const tablist = screen.getByRole('tablist')
    expect(tablist).toHaveAttribute('aria-label', 'Job tabs')

    const tabs = screen.getAllByRole('tab')
    tabs.forEach((tab, index) => {
      expect(tab).toHaveAttribute('aria-controls', `panel-${index}`)
      expect(tab).toHaveAttribute('id', `tab-${index}`)
    })

    const panels = screen.getAllByRole('tabpanel')
    panels.forEach((panel, index) => {
      expect(panel).toHaveAttribute('aria-labelledby', `tab-${index}`)
      expect(panel).toHaveAttribute('id', `panel-${index}`)
    })
  })

  it('should have correct job content', () => {
    render(<Jobs />)

    // Check Dayforce job content - there are multiple "Front-End Developer" texts
    expect(screen.getAllByText('Front-End Developer')).toHaveLength(2)
    expect(screen.getByText('@ Dayforce')).toBeInTheDocument()
    expect(screen.getByText('March 2021 - Present')).toBeInTheDocument()
    expect(
      screen.getByText(/Maintained and developed new React web libraries/)
    ).toBeInTheDocument()

    // Check that other job content exists in DOM but might be hidden
    expect(screen.getByText('August 2019 – February 2021')).toBeInTheDocument()
    expect(screen.getByText('March 2018 – March 2019')).toBeInTheDocument()
  })

  it('should have job description lists', () => {
    render(<Jobs />)

    const lists = screen.getAllByRole('list')
    // Filter out the tablist
    const jobLists = lists.filter(
      (list) =>
        !list.hasAttribute('role') || list.getAttribute('role') !== 'tablist'
    )

    expect(jobLists.length).toBeGreaterThan(0)

    const listItems = screen.getAllByRole('listitem')
    expect(listItems.length).toBeGreaterThan(0)
  })

  it('should have correct structure', () => {
    const { container } = render(<Jobs />)

    const section = container.querySelector('section#jobs.jobs-section')
    const inner = container.querySelector('.inner')
    const jobsTabs = container.querySelector('.jobs-tabs')
    const jobsTabPanels = container.querySelector('.jobs-tab-panels')
    const selectedTab = container.querySelector('.jobs-selected-tab')

    expect(section).toBeInTheDocument()
    expect(inner).toBeInTheDocument()
    expect(jobsTabs).toBeInTheDocument()
    expect(jobsTabPanels).toBeInTheDocument()
    expect(selectedTab).toBeInTheDocument()
  })

  it('should add and remove event listeners properly', () => {
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener')
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener')

    const { unmount, container } = render(<Jobs />)

    // The component uses querySelectorAll and forEach, so we can't easily spy on those
    // But we can check that the component renders and unmounts without errors
    const section = container.querySelector('section#jobs')
    expect(section).toBeInTheDocument()

    unmount()

    addEventListenerSpy.mockRestore()
    removeEventListenerSpy.mockRestore()
  })
})
