import express from "express"
import { exercicio1, exercicio2 } from "./services/exercicio.js"

const app = express()
    
// localhost:3000/exercicio1?num1=30&num2=45
app.get('/exercicio1', exercicio1)

// localhost:3000/exercicio2/10/2
app.get('/exercicio2/:valorHoras/:qtdeHoras', exercicio2)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})