import { renderHook, act } from '@testing-library/react'
import useWindowSize from './useWindowSize'

// Mock window.innerWidth and window.innerHeight
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1024
})

Object.defineProperty(window, 'innerHeight', {
  writable: true,
  configurable: true,
  value: 768
})

// Mock addEventListener and removeEventListener
const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')

describe('useWindowSize', () => {
  beforeEach(() => {
    addEventListenerSpy.mockClear()
    removeEventListenerSpy.mockClear()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return initial window size', () => {
    const { result } = renderHook(() => useWindowSize())

    expect(result.current.width).toBe(1024)
    expect(result.current.height).toBe(768)
  })

  it('should add resize event listener on mount', () => {
    renderHook(() => useWindowSize())

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    )
  })

  it('should remove resize event listener on unmount', () => {
    const { unmount } = renderHook(() => useWindowSize())

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    )
  })

  it('should update size when window is resized', () => {
    const { result } = renderHook(() => useWindowSize())

    // Change window dimensions
    window.innerWidth = 1200
    window.innerHeight = 800

    // Trigger resize event
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current.width).toBe(1200)
    expect(result.current.height).toBe(800)
  })

  it('should handle multiple resize events', () => {
    const { result } = renderHook(() => useWindowSize())

    // First resize
    window.innerWidth = 800
    window.innerHeight = 600
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current.width).toBe(800)
    expect(result.current.height).toBe(600)

    // Second resize
    window.innerWidth = 1440
    window.innerHeight = 900
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current.width).toBe(1440)
    expect(result.current.height).toBe(900)
  })
})
