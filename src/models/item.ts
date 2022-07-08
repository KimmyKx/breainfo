import mongoose, { SchemaDefinitionProperty } from 'mongoose'
import ItemStructure from '../structures/item'
import Breainfo from '../namespaces/Breainfo'
const { Schema } = mongoose

const ItemObject: SchemaDefinitionProperty<Breainfo.ItemType> = new ItemStructure({ 
	name: { 
		type: String, 
		unique: true, 
		required: true,
		validate: {
			validator: isValidName
		}
	},
	image: {
		type: String,
		default: 'breainfo.png'
	},
	description: String,
	gems: Number,
	category: Array,
	farmability: String,
	droppable: String,
	tradable: String,
	displayable: String,
	breakable: String,
	growth: String,
	color: Array,
	hit: String,
	effect: String,
	obtained: String,
	timestamp: Number,
	slug: String
})
const schema = new Schema(ItemObject)


function isValidName(this: Breainfo.ItemType) {
	if(this.name.match(/[^a-zA-Z0-9' ]/))
		throw new Error('Item name should not contain special characters')
	return true
}

schema.set('toObject', { getters: true })
schema.set('toJSON', { getters: true, virtuals: true })

export default mongoose.model('Item', schema)