import mongoose from 'mongoose'

const connect = async () => {
  const connection = await mongoose.connect('mongodb://localhost:27017/pets')
  console.log(
    `Connect to Mongo! Database name: ${connection.connections[0].name}`
  )
}

connect()
