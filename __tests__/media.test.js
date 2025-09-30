import { describe, it, expect } from '@jest/globals'
import { media } from '../services/exercicio.js'

describe('Testando função media', () => {
  it('Media com números positivos', () => {
    const result = media(5, 5, 5, 5, 5)

    expect(result).toBe(5)
  })
  it('Media com números negativos', () => {
    const result = media(-10, -8, -5, -4, -3)

    expect(result).toBe(-6)
  })
  it('Media com números com casa decimal', () => {
    const result = media(12.5, -4.5, 8, -2, 1.0)

    expect(result).toBe(3)
  })
})