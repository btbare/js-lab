const express = require('express')
const app = express()
const port = 3000

let animals = []

animals.push({
    "name": "tina",
    "type": "schnauser",
    "age": "5"
})
animals.push({
    "name": "indie",
    "type": "malamute",
    "age": "14"
})
animals.push({
    "name": "boone",
    "type": "retriever",
    "age": "4"
})

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cats', (req, res) => {
  res.send('Meow!')
})

app.get('/dogs', (req, res) => {
    const payload = {
        message: "grrr"
    }
  res.send(payload)
})

app.post('/dogs', (req, res) => {
    console.log(req.body)
    //add something that appends the animal in the datastructure
    animals.push(req.body)
    res.send('you gave me a dog')
})

app.get('/animals/:id', (req, res) => {
    //CREATE AN IF STATEMENT TO PREVENT UNDER/OVERFLOWING THE ARRAY
    //CREATE SOMETHING THAT ALLOWS YOU TO ITTERATE THROUGHT THE ARRAY TO CHOOSE IDS OF DIFFERENT ANIMALS
    res.send(animals[req.params.id])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
