import mongoose, { SchemaDefinitionProperty } from 'mongoose'
const { Schema } = mongoose
import AnnouncementStructure from '../structures/announcement'
import Breainfo from '../namespaces/Breainfo'

const AnnouncementObject: SchemaDefinitionProperty<Breainfo.AnnouncementType> = new AnnouncementStructure({
	title: {
		type: String,
		required: true,
		validate: {
			validator: isValidTitle
		},
		default: ''
	},
	content: {
		type: String,
		default: ''
	},
	timestamp: {
		type: Number
	},
	slug: {
		type: String
	}
})
const schema = new Schema(AnnouncementObject)

const Announcement = mongoose.model('Announcement', schema)

function isValidTitle(this: Breainfo.AnnouncementType) {
	if(this.title.match(/[^a-zA-Z0-9'"!?%*#() ]/))
		throw new Error('Announcement title should not contain special characters')
	return true
}

schema.set('toObject', { getters: true })
schema.set('toJSON', { getters: true, virtuals: true })

export default Announcement