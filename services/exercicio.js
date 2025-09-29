// +peso = operador unário; converte as strings em números (colocadas a frente do nome da variavel)
export function somar(num1, num2) {
  return +num1 + +num2;
}

export function salario(valorHora, qtdeHora) {
  return +valorHora * +qtdeHora;
}

export function media(peso, peso2, peso3, peso4, peso5) {
  return (+peso + +peso2 + +peso3 + +peso4 + +peso5) / 5
}

export function celsiusToFah(celsius) {
  return (9 * +celsius + 160) / 5
}

export function milhaToKm(mile) {
  return +mile * 1.609
}