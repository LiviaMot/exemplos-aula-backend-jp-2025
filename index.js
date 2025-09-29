import express from "express"
import {
    exercicio1Get,
    exercicio1Post,
    exercicio2Get,
    exercicio2Post,
    exercicio3Get,
    exercicio3Post,
    exercicio4Get,
    exercicio4Post,
    exercicio5Get,
    exercicio5Post
} from "./controllers/exercicios.js"

const app = express()
app.use(express.json())

// Exercicio 1
app.get('/exercicio1', exercicio1Get)  // localhost:3000/exercicio1?num1=30&num2=45
app.post('/exercicio1', exercicio1Post) // localhost:3000/exercicio1  (body: { "num1": 30, "num2": 45 })

// Exercicio 2
app.get('/exercicio2/:valorHora/:qtdeHoras', exercicio2Get)  // localhost:3000/exercicio2/30/45
app.post('/exercicio2', exercicio2Post) // localhost:3000/exercicio2 (body: { "valorHora": 30, "qtdeHoras": 45 })

// Exercicio 3
app.get('/exercicio3/:peso/:peso2/:peso3/:peso4/:peso5', exercicio3Get) // localhost:3000/exercicio3/5/5/5/5/5
app.post('/exercicio3', exercicio3Post) // localhost:3000/exercicio3 (body: { "peso": 5, "peso2": 5, "peso3": 5, "peso4": 5, "peso5": 5 })

// Exercicio 4
app.get('/exercicio4/:celsius', exercicio4Get) // localhost:3000/exercicio4/50
app.post('/exercicio4', exercicio4Post) // localhost:3000/exercicio4 (body: { "celsius": 50 })

// Exercicio 5
app.get('/exercicio5/:mile', exercicio5Get) // localhost:3000/exercicio5/50
app.post('/exercicio5', exercicio5Post) // localhost:3000/exercicio5 (body: { "mile": 50 })

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})