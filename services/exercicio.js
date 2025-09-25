export function somar(num1, num2) {
  return num1 + num2;
}

export function salario(valorHora, qtdeHora) {
  return valorHora * qtdeHora;
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