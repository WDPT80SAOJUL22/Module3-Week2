import { Schema, model } from 'mongoose'

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      unique: [true, 'We already have a book with this title'],
      lowercase: true,
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    publishedAt: {
      type: Date,
    },
    genre: [
      {
        type: String,
        enum: [
          'Romance',
          'Terror',
          'Drama',
          'Biography',
          'Sci-Fi',
          'Comedy',
          'Fantasy',
        ],
      },
    ],
    pages: Number,
  },
  { timestamps: true }
)

const Book = model('Book', bookSchema)

export default Book
