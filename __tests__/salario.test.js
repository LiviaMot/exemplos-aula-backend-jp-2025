import { describe, it, expect } from '@jest/globals'
import { salario } from '../services/exercicio.js'

describe('Testando função salario', () => {
  it('Multiplicando dois números positivos', () => {
    const result = salario(10, 30)

    expect(result).toBe(300)
  })
  it('Multiplicando dois números negativos', () => {
    const result = salario(-5, -10)

    expect(result).toBe(50)
  })
  it('Multiplicando dois números com casa decimal', () => {
    const result = salario(10.5, 30.5)

    expect(result).toBe(320.25)
  })
})