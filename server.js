const express = require('express')
const app = express()
const port = 3000

app.get('/chicken', (req, res) => {
  res.send('poulet')
})

app.get('/nessim', (req, res) => {
    res.send('dog')
  })

app.listen(port, () => {
  console.log(` le port : ${port}`)
})