import { reportAccessibility } from './reportAccessibility'
import * as React from 'react'

// Mock the dynamic imports
jest.mock('@axe-core/react', () => jest.fn())
jest.mock('react-dom', () => ({}))

describe('reportAccessibility', () => {
  const originalNodeEnv = process.env.NODE_ENV

  afterEach(() => {
    process.env.NODE_ENV = originalNodeEnv
    jest.clearAllMocks()
  })

  it('should call axe in non-production environment', async () => {
    process.env.NODE_ENV = 'development'
    const mockAxe = jest.fn()

    // Mock the dynamic import
    jest.doMock('@axe-core/react', () => mockAxe)

    await reportAccessibility(React)

    expect(mockAxe).toHaveBeenCalled()
  })

  it('should not call axe in production environment', async () => {
    process.env.NODE_ENV = 'production'
    const mockAxe = jest.fn()

    jest.doMock('@axe-core/react', () => mockAxe)

    await reportAccessibility(React)

    expect(mockAxe).not.toHaveBeenCalled()
  })

  it('should return void', async () => {
    process.env.NODE_ENV = 'production'

    const result = await reportAccessibility(React)

    expect(result).toBeUndefined()
  })

  it('should accept config parameter', async () => {
    process.env.NODE_ENV = 'production'
    const config = { rules: { 'color-contrast': { enabled: false } } }

    const result = await reportAccessibility(React, config)

    expect(result).toBeUndefined()
  })
})
