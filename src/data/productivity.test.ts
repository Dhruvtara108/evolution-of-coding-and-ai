import { describe, expect, it } from 'vitest'
import { productivityDimensions, productivityMetrics } from './productivity'
import { productivityFrameworks } from './frameworks'

describe('productivity research data', () => {
  it('keeps observable metric categories explicit', () => {
    expect(new Set(productivityMetrics.map((metric) => metric.category))).toEqual(
      new Set(['activity', 'output']),
    )
    expect(productivityMetrics.every((metric) => metric.limitations.length > 0)).toBe(true)
  })

  it('keeps dimensions separate from a single productivity score', () => {
    expect(productivityDimensions).toHaveLength(4)
    expect(productivityDimensions.some((dimension) => dimension.id === 'experience')).toBe(true)
    expect(productivityFrameworks.find((framework) => framework.id === 'space')?.dimensions).toHaveLength(5)
  })

  it('marks framework content that still requires source verification', () => {
    expect(productivityFrameworks.every((framework) => framework.status === 'needs-verification')).toBe(true)
  })
})
