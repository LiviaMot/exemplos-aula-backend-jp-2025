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