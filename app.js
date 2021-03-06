const express = require('express')

const app = express()
app.use(express.json())

const port = 3000

app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorer GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Martin1"}
    const explorer2 = {id: 2, name: "Martin2"}
    const explorer3 = {id: 3, name: "Martin3"}
    const explorer4 = {id: 4, name: "Martin4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id: ${req.params.id}`)
    const explorer = {id: 1, name: "Martin"}
    res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) => {
    console.log(`Api Eplorers POST request ${new Date()}`)
    const requestBody = req.body
    res.status(201).json({
        msg: 'Created'
    })
})

app.put('/v1/explorers', (req, res) => {
    console.log(`Api Explorer PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({msg: 'Updated!'})
})

app.delete('/v1/explorers:id', (req, res) => {
    console.log(`Api Explorer DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({msg: 'Deleted!'})
})


app.listen(port, () => {
    console.log(`Example app listenng on port ${port}`)
})