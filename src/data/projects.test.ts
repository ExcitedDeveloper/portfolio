import { projects } from './projects'
import { Project } from '../types/Project'

describe('projects data', () => {
  it('should export an array of projects', () => {
    expect(Array.isArray(projects)).toBe(true)
    expect(projects.length).toBeGreaterThan(0)
  })

  it('should have all required fields for each project', () => {
    projects.forEach((project: Project) => {
      expect(project).toHaveProperty('id')
      expect(project).toHaveProperty('title')
      expect(project).toHaveProperty('description')
      expect(project).toHaveProperty('technologies')
      expect(project).toHaveProperty('githubUrl')
      expect(project).toHaveProperty('imageSrc')
      expect(project).toHaveProperty('imageAlt')

      expect(typeof project.id).toBe('string')
      expect(typeof project.title).toBe('string')
      expect(typeof project.description).toBe('string')
      expect(Array.isArray(project.technologies)).toBe(true)
      expect(typeof project.githubUrl).toBe('string')
      expect(typeof project.imageSrc).toBe('string')
      expect(typeof project.imageAlt).toBe('string')
    })
  })

  it('should have unique project ids', () => {
    const ids = projects.map((project) => project.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('should have valid GitHub URLs', () => {
    projects.forEach((project: Project) => {
      expect(project.githubUrl).toMatch(/^https:\/\/github\.com\//)
    })
  })

  it('should have valid live URLs when present', () => {
    projects.forEach((project: Project) => {
      if (project.liveUrl) {
        expect(project.liveUrl).toMatch(/^https?:\/\//)
      }
    })
  })

  it('should have non-empty technologies array', () => {
    projects.forEach((project: Project) => {
      expect(project.technologies.length).toBeGreaterThan(0)
      project.technologies.forEach((tech) => {
        expect(typeof tech).toBe('string')
        expect(tech.length).toBeGreaterThan(0)
      })
    })
  })

  it('should have non-empty titles and descriptions', () => {
    projects.forEach((project: Project) => {
      expect(project.title.trim().length).toBeGreaterThan(0)
      expect(project.description.trim().length).toBeGreaterThan(0)
    })
  })

  it('should have valid maxWidth values when present', () => {
    projects.forEach((project: Project) => {
      if (project.maxWidth) {
        expect(typeof project.maxWidth).toBe('string')
        expect(project.maxWidth.length).toBeGreaterThan(0)
      }
    })
  })

  it('should contain expected projects', () => {
    const projectIds = projects.map((p) => p.id)
    expect(projectIds).toContain('portfolio')
    expect(projectIds).toContain('minesweeper')
    expect(projectIds).toContain('codepen')
    expect(projectIds).toContain('flashcards')
    expect(projectIds).toContain('pxtorem')
    expect(projectIds).toContain('weather')
  })

  it('should have portfolio project with correct properties', () => {
    const portfolioProject = projects.find((p) => p.id === 'portfolio')
    expect(portfolioProject).toBeDefined()
    expect(portfolioProject?.title).toBe('Portfolio')
    expect(portfolioProject?.technologies).toContain('React')
    expect(portfolioProject?.liveUrl).toBe('https://www.stevehunley.dev')
  })
})
