import express from "express"
import { exercicio1, exercicio2, exercicio3, exercicio4, exercicio5 } from "./services/exercicio.js"

const app = express()
    
// localhost:3000/exercicio1?num1=30&num2=45
app.get('/exercicio1', exercicio1)

// localhost:3000/exercicio2/10/2
app.get('/exercicio2/:valorHoras/:qtdeHoras', exercicio2)

// localhost:3000/exercicio3/5/5/5/5/5
app.get('/exercicio3/:peso/:peso2/:peso3/:peso4/:peso5', exercicio3)

// localhost:3000/exercicio4/50
app.get('/exercicio4/:celsius', exercicio4)

// localhost:3000/exercicio5/50
app.get('/exercicio5/:mile', exercicio5)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})