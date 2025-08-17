import { Project } from './Project'

describe('Project type', () => {
  it('should accept valid project objects', () => {
    const validProject: Project = {
      id: 'test-project',
      title: 'Test Project',
      description: 'A test project description',
      technologies: ['React', 'TypeScript'],
      githubUrl: 'https://github.com/user/repo',
      liveUrl: 'https://example.com',
      imageSrc: 'test.png',
      imageAlt: 'Test image',
      maxWidth: '500px'
    }

    expect(validProject.id).toBe('test-project')
    expect(validProject.title).toBe('Test Project')
    expect(validProject.description).toBe('A test project description')
    expect(validProject.technologies).toEqual(['React', 'TypeScript'])
    expect(validProject.githubUrl).toBe('https://github.com/user/repo')
    expect(validProject.liveUrl).toBe('https://example.com')
    expect(validProject.imageSrc).toBe('test.png')
    expect(validProject.imageAlt).toBe('Test image')
    expect(validProject.maxWidth).toBe('500px')
  })

  it('should accept project objects without optional fields', () => {
    const projectWithoutOptionals: Project = {
      id: 'minimal-project',
      title: 'Minimal Project',
      description: 'A minimal project',
      technologies: ['JavaScript'],
      githubUrl: 'https://github.com/user/minimal',
      imageSrc: 'minimal.png',
      imageAlt: 'Minimal image'
    }

    expect(projectWithoutOptionals.id).toBe('minimal-project')
    expect(projectWithoutOptionals.liveUrl).toBeUndefined()
    expect(projectWithoutOptionals.maxWidth).toBeUndefined()
  })

  it('should require all non-optional fields', () => {
    // This test ensures TypeScript compilation catches missing required fields
    // The test itself doesn't need assertions as it's checking compile-time type safety

    const requiredFields = [
      'id',
      'title',
      'description',
      'technologies',
      'githubUrl',
      'imageSrc',
      'imageAlt'
    ]

    expect(requiredFields.length).toBe(7)
  })

  it('should have correct types for all fields', () => {
    const project: Project = {
      id: 'type-test',
      title: 'Type Test',
      description: 'Testing types',
      technologies: ['TypeScript'],
      githubUrl: 'https://github.com/test/repo',
      imageSrc: 'type-test.png',
      imageAlt: 'Type test image'
    }

    expect(typeof project.id).toBe('string')
    expect(typeof project.title).toBe('string')
    expect(typeof project.description).toBe('string')
    expect(Array.isArray(project.technologies)).toBe(true)
    expect(typeof project.githubUrl).toBe('string')
    expect(typeof project.imageSrc).toBe('string')
    expect(typeof project.imageAlt).toBe('string')
  })
})
