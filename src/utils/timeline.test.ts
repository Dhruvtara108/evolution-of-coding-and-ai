import { describe, expect, it } from 'vitest'
import { clampTimelineProgress, getTimelineActiveIndex } from './timeline'

describe('timeline utilities', () => {
  it('clamps scroll progress to the usable range', () => {
    expect(clampTimelineProgress(-0.4)).toBe(0)
    expect(clampTimelineProgress(0.6)).toBe(0.6)
    expect(clampTimelineProgress(1.4)).toBe(1)
  })

  it('maps progress to the nearest active era', () => {
    expect(getTimelineActiveIndex(0, 3)).toBe(0)
    expect(getTimelineActiveIndex(0.49, 3)).toBe(1)
    expect(getTimelineActiveIndex(1, 3)).toBe(2)
  })

  it('handles an empty or single-era timeline safely', () => {
    expect(getTimelineActiveIndex(0.5, 0)).toBe(0)
    expect(getTimelineActiveIndex(0.5, 1)).toBe(0)
  })
})
