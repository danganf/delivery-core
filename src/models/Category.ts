import mongoose from 'mongoose'

const MSchema = mongoose.Schema

const schema = new MSchema({
  storeId: { type: Number, required: true, trim: true },
  name: { type: String, required: true, trim: true, index: true, unique: true },
  active: { type: Boolean, required: true, index: true, default: true }
})

export default mongoose.model('Category', schema)
