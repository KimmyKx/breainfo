import Announcement from '../models/announcement'
import AnnouncementStructure from '../structures/announcement'
import { HandleError } from '../utils/middleware'
import Breainfo from '../namespaces/Breainfo'

const HandleAnnouncementAddPost = async (req: any, res: any) => {
	try {
		if(!req.data.admin) return res.status(403).json({ error: '403 Forbidden' })
		await new Announcement(
			new AnnouncementStructure({ title: req.body.title, content: req.body.content, timestamp: Date.now() })
		).save()
		res.json({ success: true })
	} catch(err) {
		HandleError(res, err)
	}
}

const HandleAnnouncementViewPost = async (req: Breainfo.ReqAnnouncementViewPost, res: any)  => {
	try {
		res.json(await Announcement.findOne({ slug: req.body.slug }))
	} catch(err) {
		HandleError(res, err)
	}
}

const HandleAnnouncementAll = async () => {
	return await Announcement.find({})
}

export default {
	HandleAnnouncementAddPost,
	HandleAnnouncementViewPost,
	HandleAnnouncementAll
}