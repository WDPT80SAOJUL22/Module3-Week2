// const express = require('express')
import express from 'express'

import * as dotenv from 'dotenv'

dotenv.config()

// require(dotenv).config()

import './db/index.js'

const app = express()

app.use(express.json()) // Parse do Body quando for JSON

app.get('/', (req, res) => {
  res.send('Ta funcionando')
})

import Book from './models/Book.model.js' // import do modelo

// Crud Books

// CREATE

app.post('/book', async (req, res) => {
  const { body } = req
  try {
    const newBook = await Book.create(body)
    res.status(201).json(newBook)
  } catch (error) {
    res.status(400).json({ status: 400, msg: error.message })
  }
})

// READ - Retornar todos os livros

app.get('/book', async (req, res) => {
  try {
    const books = await Book.find()
    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ status: 500, msg: error.message })
  }
})

// READ - Retornar 1 único livro

app.get('/book/:id', async (req, res) => {
  const { id } = req.params
  try {
    const book = await Book.findById(id)
    if (book) {
      res.status(200).json(book)
    } else {
      res.status(404).json({ msg: 'Not Found' })
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404).json({ status: 404, msg: error })
    } else {
      res.status(500).json({ status: 500, msg: error.message })
    }
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server Running on http://localhost:${process.env.PORT} port`)
})
