import express from 'express'

// require('db/inde.js')
import './db/index.js'

import Cat from './models/Cat.model.js'

const app = express()

app.get('/', (req, res) => {
  res.send('Ta funcionando')
})

// app.get('/:name', (req, res) => {
//   const { name } = req.params
//   Cat.create({ name: name, age: 5, color: 'blue' }).then((newCat) =>
//     res.json(newCat)
//   )
// })

app.get('/:name', async (req, res) => {
  const { name } = req.params
  const newCat = await Cat.create({ name: name, age: 5, color: 'blue' })
  res.json(newCat)
})

app.listen(5000, () => {
  console.log('server running')
})
