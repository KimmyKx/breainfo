import mongoose, { SchemaDefinitionProperty } from 'mongoose'
import Breainfo from '../namespaces/Breainfo'
const { Schema } = mongoose

const schema = new Schema<Breainfo.FeaturedType>({
    itemSlug: {
        type: String
    },
    timestamp: Number
}, {
    toObject: { 
        virtuals: true
    }
})

schema.virtual('item', {
    ref: 'Item',
    localField: 'itemSlug',
    foreignField: 'slug',
    justOne: true
})

export default mongoose.model('Featured', schema)

