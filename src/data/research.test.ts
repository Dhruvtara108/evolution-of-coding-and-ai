import { describe, expect, it } from 'vitest'
import { researchClaims } from './claims'
import { researchSources } from './sources'

describe('research traceability', () => {
  it('keeps every claim linked to a known source', () => {
    const sourceIds = new Set(researchSources.map((source) => source.id))
    expect(researchClaims.every((claim) => sourceIds.has(claim.sourceId))).toBe(true)
  })

  it('keeps source URLs valid and verification states explicit', () => {
    for (const source of researchSources) {
      const url = source.url
      if (url) expect(() => new URL(url)).not.toThrow()
      expect(['verified', 'partially-verified', 'unverified', 'needs-verification', 'synthesis']).toContain(source.status)
    }
  })

  it('does not treat partially verified findings as universal conclusions', () => {
    expect(researchClaims.filter((claim) => claim.verificationStatus === 'partially-verified').every((claim) => claim.limitations.length > 0)).toBe(true)
  })
})
