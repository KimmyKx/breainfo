import mongoose from 'mongoose'
const schema = new mongoose.Schema<any>({
	username: String,
	password: String
})

export default mongoose.model('User', schema)