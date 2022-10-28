import { Schema, model } from 'mongoose'

const catSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlenght: 20,
      minlenght: 3,
      trim: true,
    },
    age: { type: Number, max: 20, min: 3 },
    color: { type: String, enum: ['blue', 'green', 'red'] },
    image: {
      type: String,
      default:
        'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg',
    },
    email: {
      type: String,
      match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    linkedin: {
      type: String,
      validate: {
        validator: (text) => {
          return text.indexOf('https://linkedin.com/') === 0
        },
        message: 'linkedin profile must starts with https://linkedin.com/',
      },
    },
    //   birth: Date, // ('2022-01-21')
    //   neutered: Boolean,
    //   toys: [String],
    //   anything: Schema.Types.Mixed,
    //   tutor: Schema.Types.ObjectId,
  },
  { timestamps: true }
)

const Cat = model('Cat', catSchema)

export default Cat
