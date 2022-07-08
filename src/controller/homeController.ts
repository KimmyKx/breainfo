import { Request, Response } from "express"
import Breainfo from "../namespaces/Breainfo"
import announcementController from "./announcementController"

const HandleRootGet = async (req: Breainfo.ReqAuthorizeMiddleware, res: Response) => {
	const announcements = await announcementController.HandleAnnouncementAll()
	res.render('index', { 
		signed: req.data.signed,
		user: req.data.user,
		admin: req.data.admin,
		announcements 
	})
}

export default {
	HandleRootGet
}