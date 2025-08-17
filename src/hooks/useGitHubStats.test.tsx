import { renderHook, waitFor } from '@testing-library/react'
import useGitHubStats from './useGitHubStats'

// Mock fetch
global.fetch = jest.fn()

// Mock console.error
const consoleErrorSpy = jest
  .spyOn(console, 'error')
  .mockImplementation(() => {})

describe('useGitHubStats', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    consoleErrorSpy.mockClear()
  })

  it('should return initial values of 0 for stars and forks', () => {
    ;(fetch as jest.Mock).mockImplementation(
      async () =>
        await Promise.resolve({
          json: async () => await Promise.resolve([])
        })
    )

    const { result } = renderHook(() => useGitHubStats())

    expect(result.current.stars).toBe(0)
    expect(result.current.forks).toBe(0)
  })

  it('should fetch and set GitHub stats successfully', async () => {
    const mockRepo = {
      name: 'portfolio',
      stargazers_count: 10,
      forks_count: 5
    }

    ;(fetch as jest.Mock).mockImplementation(
      async () =>
        await Promise.resolve({
          json: async () => await Promise.resolve([mockRepo])
        })
    )

    const { result } = renderHook(() => useGitHubStats())

    await waitFor(() => {
      expect(result.current.stars).toBe(10)
      expect(result.current.forks).toBe(5)
    })

    expect(fetch).toHaveBeenCalledWith(
      'https://api.github.com/users/ExcitedDeveloper/repos'
    )
  })

  it('should handle case when portfolio repo is not found', async () => {
    const mockRepos = [
      { name: 'other-repo', stargazers_count: 3, forks_count: 1 }
    ]

    ;(fetch as jest.Mock).mockImplementation(
      async () =>
        await Promise.resolve({
          json: async () => await Promise.resolve(mockRepos)
        })
    )

    const { result } = renderHook(() => useGitHubStats())

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'useGitHubStats: Did not find portfolio'
      )
    })

    expect(result.current.stars).toBe(0)
    expect(result.current.forks).toBe(0)
  })

  it('should handle case when multiple portfolio repos are found', async () => {
    const mockRepos = [
      { name: 'portfolio', stargazers_count: 10, forks_count: 5 },
      { name: 'portfolio', stargazers_count: 8, forks_count: 3 }
    ]

    ;(fetch as jest.Mock).mockImplementation(
      async () =>
        await Promise.resolve({
          json: async () => await Promise.resolve(mockRepos)
        })
    )

    const { result } = renderHook(() => useGitHubStats())

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'useGitHubStats: Found more than one portfolio'
      )
    })

    expect(result.current.stars).toBe(0)
    expect(result.current.forks).toBe(0)
  })

  it('should handle fetch errors', async () => {
    const mockError = new Error('Network error')

    ;(fetch as jest.Mock).mockImplementation(
      async () => await Promise.reject(mockError)
    )

    const { result } = renderHook(() => useGitHubStats())

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(mockError)
    })

    expect(result.current.stars).toBe(0)
    expect(result.current.forks).toBe(0)
  })

  it('should handle empty repos array', async () => {
    ;(fetch as jest.Mock).mockImplementation(
      async () =>
        await Promise.resolve({
          json: async () => await Promise.resolve([])
        })
    )

    const { result } = renderHook(() => useGitHubStats())

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'useGitHubStats: Did not find portfolio'
      )
    })

    expect(result.current.stars).toBe(0)
    expect(result.current.forks).toBe(0)
  })
})
