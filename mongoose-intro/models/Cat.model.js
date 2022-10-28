import { Schema, model } from 'mongoose'

const catSchema = new Schema({
  name: String,
  age: Number,
  color: String,
})

const Cat = model('Cat', catSchema)

export default Cat
