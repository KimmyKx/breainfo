import { Response } from 'express'
import jwt, { Secret } from 'jsonwebtoken'
import User from '../models/user'
import ImageKit from 'imagekit'

const Authorize = (req: any, res: any, next: any) => {
	try {
		req.data = {}
		if(!req.cookies['t']) {
			UnSign(req, next)
		} else {
			jwt.verify(req.cookies['t'], process.env.JWT_ACCESS_TOKEN as Secret, async (err: any, data: any) => {
				if(err) return UnSign(req, next)
				const user = await User.findOne({ username: data.user.username }).lean()
				if(!user) return UnSign(req, next)
				req.data.signed = true
				req.data.user = user
				if(process.env.admins?.includes(user.username))
					req.data.admin = true
				else
					req.data.admin = false
				next()
			})
		}
	} catch(err) {
		console.error(err)
	}
}

const UnSign = (req: any, next: any) => {
	req.data.signed = false
	req.data.admin = false
	next()
}

export const HandleError = (res: Response, err: any) => {
	let msg = err
	if(typeof err == 'object') {
		if(err.keyPattern?.name) 
			msg = 'Item name already exists'
		else if(err.message)
			msg = err.message
	}
	res.json({ error: msg })
}

export function toSlug(str: string) {
	return str.trim().replace(/\s+/g, '-').replace(/[']/g, '')
}

export async function UploadFile(req: any) {
	try {
		const buffer = req.files.image.data
		const imageKit = new ImageKit({
			publicKey: 'public_dLoNCPsLvqqKflHFaks5xxBMvtI=',
			privateKey: `${process.env.ImageKit_API_KEY}`,
			urlEndpoint: 'https://ik.imagekit.io/ogxcsdv9ca'
		})
		const response: any = await imageKit.upload({
			file: buffer,
			fileName: 'breainfo.png',
			folder: '/Breainfo'
		})
		return { success: true, url: response.url }
	} catch(err) {
		console.log(err)
		return { success: false }
	}
}

export default {
	Authorize,
	HandleError,
	toSlug,
	UploadFile
}