import ItemStructure from '../structures/item'
import Item from '../models/item'
import { HandleError } from '../utils/middleware'
import Breainfo from '../namespaces/Breainfo'
import { Request, Response } from 'express'
import middleware from '../utils/middleware'

const HandleItemAddPost = async (req: Breainfo.ReqItemAddPost, res: Response) => {
	try {
		if(!req.data.admin) return res.status(403).json({ error: '403 Forbidden' })
		const file = await middleware.UploadFile(req)
		req.body.image = file.url
		await new Item(
			new ItemStructure(req.body)
		).save()
		res.json({ success: true })
	} catch(err) {
		HandleError(res, err)
	}
}

const HandleItemViewPost = async (req: Breainfo.ReqItemViewPost, res: Response) => {
	try {
		res.json(await Item.findOne({ slug: req.body.slug }))
	} catch(err) {
		HandleError(res, err)
	}
}

const HandleItemAllPost = async (_req: Request, res: Response) => {
	try {
		res.json(await Item.find({}))
	} catch(err) {
		HandleError(res, err)
	}
}

const HandleItemSearchPost = async (req: Breainfo.ReqItemSearchPost, res: Response) => {
	try {
		const re = new RegExp(`${req.body.name}`, 'gi')
		res.json(await Item.find({ name: re }).limit(15))
	} catch(err) {
		HandleError(res, err)
	}
}

const HandleItemAddGet = (req: any, res: Response) => {
	try {
		if(!req.data?.admin) return res.status(403).json({ error: '403 Forbidden' })
		res.render('item/add', { signed: req.data.signed, admin: true })
	} catch(err) {
		HandleError(res, err)
	}
}

const HandleItemAllGet = async (req: Breainfo.ReqAuthorizeMiddleware, res: Response) => {
	try {
		if(!req.data?.admin) return res.status(403).json({ error: '403 Forbidden' })
		res.render('item/all', { signed: req.data.signed, admin: true, items: await Item.find({}) })
	} catch(err) {
		HandleError(res, err)
	}
}

export default {
	HandleItemAddPost,
	HandleItemViewPost,
	HandleItemAllPost,
	HandleItemSearchPost,
	HandleItemAddGet,
	HandleItemAllGet
}