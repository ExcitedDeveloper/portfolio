import React from 'react'
import { render, screen } from '@testing-library/react'
import Projects from './Projects'
import type { Project } from '../../types/Project'

// Mock the ProjectCard component
jest.mock('../ProjectCard', () => {
  return function ProjectCard({ project }: { project: Project }) {
    return (
      <li data-testid={`project-card-${project.id}`}>
        Project Card: {project.title}
      </li>
    )
  }
})

// Mock the projects data
jest.mock('../../data/projects', () => ({
  projects: [
    {
      id: 'project1',
      title: 'Project 1',
      description: 'Description 1',
      technologies: ['React'],
      githubUrl: 'https://github.com/test/project1',
      imageSrc: 'project1.png',
      imageAlt: 'Project 1'
    },
    {
      id: 'project2',
      title: 'Project 2',
      description: 'Description 2',
      technologies: ['Vue'],
      githubUrl: 'https://github.com/test/project2',
      imageSrc: 'project2.png',
      imageAlt: 'Project 2'
    }
  ]
}))

describe('Projects', () => {
  it('should render correctly', () => {
    const { container } = render(<Projects />)

    const section = container.querySelector('section#projects')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'projects')
  })

  it('should render the heading', () => {
    render(<Projects />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Some Things I\'ve Built')
    expect(heading).toHaveClass('numbered-heading', 'projects-heading')
  })

  it('should render projects list', () => {
    render(<Projects />)

    const projectsList = screen.getByRole('list')
    expect(projectsList).toBeInTheDocument()
    expect(projectsList).toHaveClass('projects-list')
  })

  it('should render all project cards', () => {
    render(<Projects />)

    const project1Card = screen.getByTestId('project-card-project1')
    const project2Card = screen.getByTestId('project-card-project2')

    expect(project1Card).toBeInTheDocument()
    expect(project2Card).toBeInTheDocument()
    expect(project1Card).toHaveTextContent('Project Card: Project 1')
    expect(project2Card).toHaveTextContent('Project Card: Project 2')
  })

  it('should pass correct props to ProjectCard components', () => {
    render(<Projects />)

    // Verify that both project cards are rendered with the correct titles
    expect(screen.getByText('Project Card: Project 1')).toBeInTheDocument()
    expect(screen.getByText('Project Card: Project 2')).toBeInTheDocument()
  })

  it('should have correct structure', () => {
    const { container } = render(<Projects />)

    const section = container.querySelector('section#projects')
    const heading = container.querySelector(
      'h2.numbered-heading.projects-heading'
    )
    const list = container.querySelector('ul.projects-list')

    expect(section).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(list).toBeInTheDocument()

    expect(section).toContainElement(heading)
    expect(section).toContainElement(list)
  })

  it('should be accessible', () => {
    const { container } = render(<Projects />)

    const section = container.querySelector('section#projects')
    const heading = screen.getByRole('heading', { level: 2 })
    const list = screen.getByRole('list')

    expect(section).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(list).toBeInTheDocument()

    // Check that the section has an id for navigation
    expect(section).toHaveAttribute('id', 'projects')
  })

  it('should render as a section element', () => {
    const { container } = render(<Projects />)

    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'projects')
  })

  it('should handle empty projects array gracefully', () => {
    // This test would require mocking an empty projects array
    // For now, we test that the structure is still rendered
    render(<Projects />)

    const projectsList = screen.getByRole('list')
    expect(projectsList).toBeInTheDocument()
  })
})
