import React from 'react'
import { render, screen } from '@testing-library/react'
import ProjectCard from './ProjectCard'
import { Project } from '../../types/Project'

import useWindowSize from '../../hooks/useWindowSize'

// Mock the custom hook
jest.mock('../../hooks/useWindowSize', () => ({
  __esModule: true,
  default: jest.fn()
}))

// Mock the Icons components
jest.mock('../Icons', () => ({
  GitHubIcon: () => <div data-testid="github-icon">GitHub Icon</div>,
  ExternalLinkIcon: () => (
    <div data-testid="external-link-icon">External Link Icon</div>
  )
}))

const mockUseWindowSize = useWindowSize as jest.MockedFunction<
  typeof useWindowSize
>

describe('ProjectCard', () => {
  const mockProject: Project = {
    id: 'test-project',
    title: 'Test Project',
    description:
      'A test project description with <span class="highlighted-text">React</span>',
    technologies: ['React', 'TypeScript', 'CSS'],
    githubUrl: 'https://github.com/test/project',
    liveUrl: 'https://test-project.com',
    imageSrc: 'test-project.png',
    imageAlt: 'Test Project Screenshot',
    maxWidth: '500px'
  }

  beforeEach(() => {
    mockUseWindowSize.mockReturnValue({
      width: 1024,
      height: 768
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render correctly', () => {
    render(<ProjectCard project={mockProject} />)

    expect(screen.getByText('Featured Project')).toBeInTheDocument()
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getAllByText('React')).toHaveLength(2) // One in description, one in tech list
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('CSS')).toBeInTheDocument()
  })

  it('should render title as link when liveUrl is provided', () => {
    render(<ProjectCard project={mockProject} />)

    const titleLink = screen.getByRole('link', { name: /test project/i })
    expect(titleLink).toHaveAttribute('href', 'https://test-project.com')
    expect(titleLink).toHaveAttribute('target', '_blank')
    expect(titleLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should render title as text when liveUrl is not provided', () => {
    const projectWithoutLiveUrl = { ...mockProject, liveUrl: undefined }
    render(<ProjectCard project={projectWithoutLiveUrl} />)

    const title = screen.getByText('Test Project')
    expect(title.tagName).toBe('H3')
    expect(title.closest('a')).toBeNull()
  })

  it('should render description with HTML', () => {
    render(<ProjectCard project={mockProject} />)

    const description = screen.getByText(/A test project description/)
    expect(description).toBeInTheDocument()

    const highlightedText = screen.getAllByText('React')[0]
    expect(highlightedText.closest('span')).toHaveClass('highlighted-text')
  })

  it('should render technology list', () => {
    render(<ProjectCard project={mockProject} />)

    const techList = screen.getByRole('list')
    const techItems = screen.getAllByRole('listitem')

    expect(techList).toBeInTheDocument()
    // Filter only the tech list items (not the main project card li)
    const techListItems = techItems.filter(
      (item) =>
        item.textContent === 'React' ||
        item.textContent === 'TypeScript' ||
        item.textContent === 'CSS'
    )
    expect(techListItems).toHaveLength(3)
    expect(techListItems[0]).toHaveTextContent('React')
    expect(techListItems[1]).toHaveTextContent('TypeScript')
    expect(techListItems[2]).toHaveTextContent('CSS')
  })

  it('should render GitHub link', () => {
    render(<ProjectCard project={mockProject} />)

    const githubLink = screen.getByRole('link', { name: /github link/i })
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/test/project'
    )
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(screen.getByTestId('github-icon')).toBeInTheDocument()
  })

  it('should render external link when liveUrl is provided', () => {
    render(<ProjectCard project={mockProject} />)

    const externalLink = screen.getByRole('link', { name: /external link/i })
    expect(externalLink).toHaveAttribute('href', 'https://test-project.com')
    expect(externalLink).toHaveAttribute('target', '_blank')
    expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(screen.getByTestId('external-link-icon')).toBeInTheDocument()
  })

  it('should not render external link when liveUrl is not provided', () => {
    const projectWithoutLiveUrl = { ...mockProject, liveUrl: undefined }
    render(<ProjectCard project={projectWithoutLiveUrl} />)

    const externalLink = screen.queryByRole('link', { name: /external link/i })
    expect(externalLink).not.toBeInTheDocument()
    expect(screen.queryByTestId('external-link-icon')).not.toBeInTheDocument()
  })

  it('should apply weather-external class for weather project', () => {
    const weatherProject = { ...mockProject, id: 'weather' }
    render(<ProjectCard project={weatherProject} />)

    const externalLink = screen.getByRole('link', { name: /external link/i })
    expect(externalLink).toHaveClass('external', 'weather-external')
  })

  it('should render desktop image when screen is wide', () => {
    mockUseWindowSize.mockReturnValue({ width: 1024, height: 768 })
    render(<ProjectCard project={mockProject} />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'test-project.png')
    expect(image).toHaveAttribute('alt', 'Test Project Screenshot')

    // Check that mobile background div is not present
    const { container } = render(<ProjectCard project={mockProject} />)
    const mobileImage = container.querySelector('.project-image-mobile')
    expect(mobileImage).not.toBeInTheDocument()
  })

  it('should render mobile background image when screen is narrow', () => {
    mockUseWindowSize.mockReturnValue({ width: 500, height: 800 })
    render(<ProjectCard project={mockProject} />)

    const { container } = render(<ProjectCard project={mockProject} />)
    const mobileImage = container.querySelector('.project-image-mobile')
    expect(mobileImage).toBeInTheDocument()
    expect(mobileImage).toHaveStyle('background-image: url("test-project.png")')

    const desktopImage = screen.queryByRole('img')
    expect(desktopImage).not.toBeInTheDocument()
  })

  it('should handle undefined window size (default to desktop)', () => {
    mockUseWindowSize.mockReturnValue({ width: undefined, height: undefined })
    render(<ProjectCard project={mockProject} />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('should use default maxWidth when not provided', () => {
    const projectWithoutMaxWidth = { ...mockProject, maxWidth: undefined }
    render(<ProjectCard project={projectWithoutMaxWidth} />)

    const { container } = render(
      <ProjectCard project={projectWithoutMaxWidth} />
    )
    const imageWrapper = container.querySelector('[style*="max-width"]')
    expect(imageWrapper).toHaveStyle('max-width: 43.75rem')
  })

  it('should use custom maxWidth when provided', () => {
    render(<ProjectCard project={mockProject} />)

    const { container } = render(<ProjectCard project={mockProject} />)
    const imageWrapper = container.querySelector('[style*="max-width"]')
    expect(imageWrapper).toHaveStyle('max-width: 500px')
  })

  it('should have correct list item structure', () => {
    const { container } = render(<ProjectCard project={mockProject} />)

    const listItem = container.querySelector('li.project-portfolio')
    expect(listItem).toBeInTheDocument()

    const projectContent = container.querySelector('.project-content')
    expect(projectContent).toBeInTheDocument()
  })
})
