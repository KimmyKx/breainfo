import mongoose from 'mongoose'
import featured from '../models/featured'
mongoose.connect(process.env.mongo as any, (err: mongoose.CallbackError) => {
	if(err) return console.error(err)
	console.log('Connected to Database')
});