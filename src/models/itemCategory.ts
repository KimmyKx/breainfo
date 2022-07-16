import mongoose from 'mongoose'
const { Schema } = mongoose

const schema = new Schema<any>({
    name: {
        type: String,
        unique: true
    },
    timestamp: {
        type: Number,
        default: () => Date.now()
    }
})

export default mongoose.model('ItemCategory', schema)