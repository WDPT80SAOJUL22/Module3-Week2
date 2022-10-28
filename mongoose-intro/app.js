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

app.get('/find', async (req, res) => {
  //   let cat = await Cat.find()
  //   let cat = await Cat.findById('635b1ba707a2fa15bf69639b')
  //   let cat = await Cat.findOne({ name: 'Matilde' })
  //   let cat = await Cat.findByIdAndUpdate('635b1ba707a2fa15bf69639b', {
  //     name: 'Iury',
  //   })
  let cat = await Cat.findByIdAndDelete('635b1ba707a2fa15bf69639b')

  res.json(cat)
})

app.get('/:name', async (req, res) => {
  const { name } = req.params
  try {
    const newCat = await Cat.create({
      name: name,
      age: 5,
      color: 'blue',
      email: 'carlos@carlos.com',
      linkedin: 'https://linkedin.com/123',
    })
    res.json(newCat)
  } catch (err) {
    res.json(err.message)
  }
})

app.listen(5000, () => {
  console.log('server running')
})
