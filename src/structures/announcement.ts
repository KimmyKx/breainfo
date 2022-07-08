/** @format */
import { toSlug } from '../utils/middleware'
import Breainfo from '../namespaces/Breainfo'
export default class Announcement {
	title: string
	content: string
	timestamp: number
	slug?: string
	constructor(info: Breainfo.AnnouncementType){
		this.title = info.title
		this.content = info.content
		this.timestamp = info.timestamp || Date.now()
		this.slug = info.slug || toSlug(this.title)
	}
}