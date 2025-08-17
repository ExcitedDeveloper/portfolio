import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import useGitHubStats from '../../hooks/useGitHubStats'

// Mock the GitHubIcon and LinkedInIcon components
jest.mock('../SocialMedia/GitHubIcon', () => {
  return function GitHubIcon() {
    return <div data-testid="github-icon">GitHub Icon</div>
  }
})

jest.mock('../SocialMedia/LinkedInIcon', () => {
  return function LinkedInIcon() {
    return <div data-testid="linkedin-icon">LinkedIn Icon</div>
  }
})

// Mock the useGitHubStats hook
jest.mock('../../hooks/useGitHubStats', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    stars: 42,
    forks: 7
  }))
}))

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('footer')
  })

  it('should render social media icons', () => {
    render(<Footer />)

    const githubIcon = screen.getByTestId('github-icon')
    const linkedinIcon = screen.getByTestId('linkedin-icon')

    expect(githubIcon).toBeInTheDocument()
    expect(linkedinIcon).toBeInTheDocument()
  })

  it('should render social links in a list', () => {
    render(<Footer />)

    const socialList = screen.getByRole('list')
    const listItems = screen.getAllByRole('listitem')

    expect(socialList).toBeInTheDocument()
    expect(listItems).toHaveLength(2)
  })

  it('should render "Built by Steve Hunley" link', () => {
    render(<Footer />)

    const builtByLink = screen.getByRole('link', {
      name: /built by steve hunley/i
    })
    expect(builtByLink).toBeInTheDocument()
    expect(builtByLink).toHaveAttribute(
      'href',
      'https://github.com/ExcitedDeveloper/portfolio'
    )
    expect(builtByLink).toHaveAttribute('target', '_blank')
    expect(builtByLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should render GitHub stats', () => {
    render(<Footer />)

    expect(screen.getByText('42')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
  })

  it('should render star and fork icons with titles', () => {
    render(<Footer />)

    const starTitle = screen.getByTitle('Star')
    const forkTitle = screen.getByTitle('Git Fork')

    expect(starTitle).toBeInTheDocument()
    expect(forkTitle).toBeInTheDocument()
  })

  it('should render design credit link', () => {
    render(<Footer />)

    const designLink = screen.getByRole('link', {
      name: /design inspired by brittany chiang/i
    })
    expect(designLink).toBeInTheDocument()
    expect(designLink).toHaveAttribute('href', 'https://www.brittanychiang.com')
    expect(designLink).toHaveAttribute('target', '_blank')
    expect(designLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should format numbers with locale string', () => {
    // Mock larger numbers to test formatting
    const mockedUseGitHubStats = useGitHubStats as jest.MockedFunction<
      typeof useGitHubStats
    >
    mockedUseGitHubStats.mockReturnValue({
      stars: 1234,
      forks: 567
    })

    render(<Footer />)

    expect(screen.getByText('1,234')).toBeInTheDocument()
    expect(screen.getByText('567')).toBeInTheDocument()
  })

  it('should have correct structure', () => {
    const { container } = render(<Footer />)

    const footer = container.querySelector('footer.footer')
    const socialLinks = container.querySelector('.footer-social-links')
    const builtBy = container.querySelector('.footer-built-by')
    const designedBy = container.querySelector('.footer-designed-by')
    const githubStats = container.querySelector('.github-stats')

    expect(footer).toBeInTheDocument()
    expect(socialLinks).toBeInTheDocument()
    expect(builtBy).toBeInTheDocument()
    expect(designedBy).toBeInTheDocument()
    expect(githubStats).toBeInTheDocument()
  })

  it('should have correct SVG attributes for star icon', () => {
    const { container } = render(<Footer />)

    const starSvg = container.querySelector('.feather-star')
    expect(starSvg).toHaveAttribute('viewBox', '0 0 24 24')
    expect(starSvg).toHaveAttribute('fill', 'none')
    expect(starSvg).toHaveAttribute('stroke', 'currentColor')
  })

  it('should have correct SVG attributes for fork icon', () => {
    const { container } = render(<Footer />)

    const forkSvg = container.querySelector('.feather-git-branch')
    expect(forkSvg).toHaveAttribute('viewBox', '0 0 24 24')
    expect(forkSvg).toHaveAttribute('fill', 'none')
    expect(forkSvg).toHaveAttribute('stroke', 'currentColor')
  })

  it('should be accessible', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const links = screen.getAllByRole('link')
    const list = screen.getByRole('list')

    expect(footer).toBeInTheDocument()
    expect(links.length).toBeGreaterThan(0)
    expect(list).toBeInTheDocument()

    // Check that important links have proper attributes
    links.forEach((link) => {
      if (link.getAttribute('target') === '_blank') {
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      }
    })
  })
})
