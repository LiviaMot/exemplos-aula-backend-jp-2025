import express from "express"

const app = express()

app.get('/exercicio1', (req, res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2
    console.log(req.params)
    
    res.status(200).send("Hello "+ nome)
})
app.get('/exercicio1/:num1/:num2', (req, res) => {
    const num1 = req.params.num1
    const num2 = req.params.num2
    console.log(req.params)
    
    res.status(200).send("Resultado "+ num1+num2)
})

app.get('/api/pessoa/:id', (req, res) => {
    const nome = req.query.nome
    console.log(req.params)
    
    res.status(200).send("Hello "+ nome)
})

app.get('/api/pessoa/:id/teste/:outroId', (req, res) => {
    const nome = req.query.nome
    console.log(req.params)
    
    res.status(200).send("Hello "+ nome)
})

app.get('/api/pessoa/:id', (req, res) => {
    const nome = req.query.nome
    console.log(req.params)
    
    res.status(200).send("Hello "+ nome)
})


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})