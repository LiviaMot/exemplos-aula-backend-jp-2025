import { salario, somar, media, celsiusToFah, milhaToKm } from "../services/exercicio.js"

// Exercicio 1
export const exercicio1Get = (req, res) => {
  const num1 = Number(req.query.num1)
  const num2 = Number(req.query.num2)
  const result = somar(num1, num2)

  res.status(200).send({
    num1,
    num2,
    result
  })
}

export const exercicio1Post = (req, res) => {
  const num1 = req.body.num1
  const num2 = req.body.num2
  const result = somar(num1, num2)

  res.status(200).send({
    msg: "O resultado é " + result,
    data: result,
    error: null
  })
}

// Exercicio 2
export const exercicio2Get = (req, res) => {
  const { valorHora, qtdeHoras } = req.params
  const result = salario(valorHora, qtdeHoras)
  
  res.status(200).send({
    result
  })
}

export const exercicio2Post = (req, res) => {
  const { valorHora, qtdeHoras } = req.body
  const result = salario(valorHora, qtdeHoras)
  
  res.status(200).send({
    result
  })
}

// Exercicio 3
export const exercicio3Get = (req, res) => {
  const { peso, peso2, peso3, peso4, peso5 } = req.params
  const result = media(peso, peso2, peso3, peso4, peso5)
  
  res.status(200).send({
    result
  })
}

export const exercicio3Post = (req, res) => {
  const { peso, peso2, peso3, peso4, peso5 } = req.body
  const result = media(peso, peso2, peso3, peso4, peso5)
  
  res.status(200).send({
    result
  })
}

// Exercicio 4
export const exercicio4Get = (req, res) => {
  const { celsius } = req.params
  const result = celsiusToFah(celsius)
  
  res.status(200).send({
    result
  })
}

export const exercicio4Post = (req, res) => {
  const { celsius } = req.body
  const result = celsiusToFah(celsius)
  
  res.status(200).send({
    result
  })
}

// Exercicio 5
export const exercicio5Get = (req, res) => {
  const { mile } = req.params
  const result = milhaToKm(mile)
  
  res.status(200).send({
    result
  })
}

export const exercicio5Post = (req, res) => {
  const { mile } = req.body
  const result = milhaToKm(mile)

  res.status(200).send({
    result
  })
}