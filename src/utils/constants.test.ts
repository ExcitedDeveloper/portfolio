import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  DESKTOP_BREAKPOINT
} from './constants'

describe('constants', () => {
  it('should have correct breakpoint values', () => {
    expect(MOBILE_BREAKPOINT).toBe(768)
    expect(TABLET_BREAKPOINT).toBe(1080)
    expect(DESKTOP_BREAKPOINT).toBe(1440)
  })

  it('should have breakpoints in ascending order', () => {
    expect(MOBILE_BREAKPOINT).toBeLessThan(TABLET_BREAKPOINT)
    expect(TABLET_BREAKPOINT).toBeLessThan(DESKTOP_BREAKPOINT)
  })

  it('should export breakpoints as numbers', () => {
    expect(typeof MOBILE_BREAKPOINT).toBe('number')
    expect(typeof TABLET_BREAKPOINT).toBe('number')
    expect(typeof DESKTOP_BREAKPOINT).toBe('number')
  })
})
