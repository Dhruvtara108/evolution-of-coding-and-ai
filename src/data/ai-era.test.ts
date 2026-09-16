import { describe, expect, it } from 'vitest'
import { aiCapabilities, aiDevelopmentStages, aiEvidence } from './ai-era'

describe('AI experience data', () => {
  it('keeps the conceptual progression ordered and non-empty', () => {
    expect(aiDevelopmentStages.length).toBeGreaterThan(6)
    expect(aiDevelopmentStages[0].id).toBe('traditional-programming')
    expect(aiDevelopmentStages.at(-1)?.id).toBe('agentic-workflow')
  })

  it('uses qualitative capability states rather than unsupported scores', () => {
    expect(aiCapabilities.every((capability) => capability.state.length > 0)).toBe(true)
    expect(aiCapabilities.some((capability) => capability.state === 'context-dependent')).toBe(true)
  })

  it('keeps evidence verification status explicit', () => {
    expect(aiEvidence.every((evidence) => evidence.verificationStatus === 'needs-verification')).toBe(true)
  })
})
