/** @format */
import { toSlug } from '../utils/middleware'
import Breainfo from '../namespaces/Breainfo'
export default class Item {
	name: string
	image: string
	gems: string
	timestamp: number | undefined
	slug: string
	constructor(info: Breainfo.ItemType) {
		this.name = info.name
		this.image = info.image || 'breainfo.png'
		this.gems = info.gems || 'Unknown'
		this.slug = info.slug || toSlug(this.name)
		if(!info.timestamp)
			this.timestamp = Date.now()
		this.timestamp = info.timestamp || Date.now()
	}
}