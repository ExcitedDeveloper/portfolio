import React from 'react'
import { render, screen } from '@testing-library/react'
import SocialMedia from './SocialMedia'

// Mock the child icon components
jest.mock('./GitHubIcon', () => {
  return function GitHubIcon() {
    return <div data-testid="github-icon">GitHub Icon</div>
  }
})

jest.mock('./LinkedInIcon', () => {
  return function LinkedInIcon() {
    return <div data-testid="linkedin-icon">LinkedIn Icon</div>
  }
})

describe('SocialMedia', () => {
  it('should render correctly', () => {
    render(<SocialMedia />)

    const aside = screen.getByRole('complementary')
    expect(aside).toBeInTheDocument()
    expect(aside).toHaveAttribute('aria-label', 'Social Media')
  })

  it('should render social media icons', () => {
    render(<SocialMedia />)

    const githubIcon = screen.getByTestId('github-icon')
    const linkedinIcon = screen.getByTestId('linkedin-icon')

    expect(githubIcon).toBeInTheDocument()
    expect(linkedinIcon).toBeInTheDocument()
  })

  it('should render icons in a list', () => {
    render(<SocialMedia />)

    const list = screen.getByRole('list')
    const listItems = screen.getAllByRole('listitem')

    expect(list).toBeInTheDocument()
    expect(list).toHaveClass('social-media-list')
    expect(listItems).toHaveLength(2)
  })

  it('should have correct structure', () => {
    const { container } = render(<SocialMedia />)

    const aside = container.querySelector('aside[aria-label="Social Media"]')
    const socialContainer = container.querySelector('.social-media-container')
    const socialList = container.querySelector('ul.social-media-list')

    expect(aside).toBeInTheDocument()
    expect(socialContainer).toBeInTheDocument()
    expect(socialList).toBeInTheDocument()
  })

  it('should contain GitHub and LinkedIn icons in list items', () => {
    render(<SocialMedia />)

    const listItems = screen.getAllByRole('listitem')

    expect(listItems[0]).toContainElement(screen.getByTestId('github-icon'))
    expect(listItems[1]).toContainElement(screen.getByTestId('linkedin-icon'))
  })

  it('should be accessible', () => {
    render(<SocialMedia />)

    const aside = screen.getByRole('complementary')
    const list = screen.getByRole('list')
    const listItems = screen.getAllByRole('listitem')

    expect(aside).toHaveAttribute('aria-label', 'Social Media')
    expect(list).toBeInTheDocument()
    expect(listItems).toHaveLength(2)
  })

  it('should render as aside element', () => {
    const { container } = render(<SocialMedia />)

    const aside = container.querySelector('aside')
    expect(aside).toBeInTheDocument()
    expect(aside?.tagName).toBe('ASIDE')
  })

  it('should have proper nesting structure', () => {
    const { container } = render(<SocialMedia />)

    const aside = container.querySelector('aside')
    const socialContainer = aside?.querySelector('.social-media-container')
    const socialList = socialContainer?.querySelector('ul.social-media-list')
    const listItems = socialList?.querySelectorAll('li')

    expect(aside).toContainElement(socialContainer)
    expect(socialContainer).toContainElement(socialList)
    expect(listItems).toHaveLength(2)
  })

  it('should render both required social media platforms', () => {
    render(<SocialMedia />)

    // Verify both GitHub and LinkedIn are present
    expect(screen.getByTestId('github-icon')).toBeInTheDocument()
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument()
  })

  it('should maintain list semantics', () => {
    render(<SocialMedia />)

    const list = screen.getByRole('list')
    const listItems = screen.getAllByRole('listitem')

    expect(list).toBeInTheDocument()
    expect(listItems).toHaveLength(2)

    // Each list item should contain an icon
    listItems.forEach((item) => {
      const iconInItem = item.querySelector('[data-testid*="-icon"]')
      expect(iconInItem).toBeInTheDocument()
    })
  })
})
