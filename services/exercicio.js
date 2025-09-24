export const exercicio1 = (req, res) => {
  const num1 = Number(req.query.num1)
  const num2 = Number(req.query.num2)
  const result = num1 + num2

  res.status(200).send({
    num1,
    num2,
    result
    // result: num1 + num2
  })
}

export const exercicio2 = (req, res) => {
  // const valorHoras = req.params.valorHoras
  // const qtdeHoras = req.params.qtdeHoras
  const { valorHoras, qtdeHoras } = req.params

  res.status(200).send({
    result: valorHoras * qtdeHoras
  })
}

export const exercicio3 = (req, res) => {
  const { peso, peso2, peso3, peso4, peso5 } = req.params
  
  // +peso = operador unário; converte as strings em números (colocadas a frente do nome da variavel)
  const soma = +peso + +peso2 + +peso3 + +peso4 + +peso5
  const media = soma / 5

  res.status(200).send({
    result: media
  })
}

export const exercicio4 = (req, res) => {
  const { celsius } = req.params

  const fahre = (9 * +celsius + 160) / 5

  res.status(200).send({
    result: fahre
  })
}

export const exercicio5 = (req, res) => {
  const { mile } = req.params
  const km = +mile * 1.609

  res.status(200).send({
    result: km
  })
}