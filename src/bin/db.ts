import mongoose from 'mongoose'
import db from '../config/db.json'

const { string } = db[process.env.NODE_ENV][process.env.DB_DIALECT]

mongoose.connect(string, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

export default mongoose
