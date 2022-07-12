import User from '../models/user'
import bcrypt from 'bcrypt'
import jwt, { Secret } from 'jsonwebtoken'
import Breainfo from '../namespaces/Breainfo'

const HandleSignupGet = (req: any, res: any) => {
	try {
		res.render('signup', { signed: false })
	} catch(err) {
		console.error(err)
	}
}

const HandleLoginGet = (req: any, res: any) => {
	res.render('login', { signed: false, title: 'User Login' })
}


const HandleSignupPost = async (req: Breainfo.ReqSignupPost, res: any) => {
	try {
		
		const re = new RegExp(`^${req.body.username}$`, 'gi')
		const user = await User.findOne({ username: re })
		if(user) return res.json({ error: 'Username has been taken' })
		const hash = bcrypt.hashSync(req.body.password, 10)
		const { username } = await new User({ username: req.body.username, password: hash }).save()
		const token = jwt.sign({ user: { username }}, process.env.JWT_ACCESS_TOKEN as Secret)
		res.cookie('t', token, { httpOnly: true })
		res.json({ success: true })
	} catch(err) {
		console.error(err)
	}
}

const HandleLoginPost = async (req: Breainfo.ReqLoginPost, res: any) => {
	try {
		const { username, password } = req.body
		const re = new RegExp(`^${username}$`, 'gi')
		const user = await User.findOne({ username: re })
		if(!user) return res.json({ error: 'Username does not exist' })
		const isMatch = bcrypt.compareSync(password, user.password)
		if(!isMatch) return res.json({ error: 'Incorrect credentials' })
		const token = jwt.sign({ user: { username: user.username }}, process.env.JWT_ACCESS_TOKEN as Secret)
		res.cookie('t', token, { httpOnly: true })
		res.json({ success: true })
	} catch(err) {
		console.error(err)
	} 
}

export default {
	HandleSignupGet,
	HandleLoginGet,
	HandleLoginPost,
	HandleSignupPost
}