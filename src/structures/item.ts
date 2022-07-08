/** @format */
import { toSlug } from '../utils/middleware'
import Breainfo from '../namespaces/Breainfo'
export default class Item {
	name: string
	gems: number
	timestamp: number | undefined
	slug: string
	constructor(info: Breainfo.ItemType) {
		this.name = info.name
		this.gems = info.gems
		this.slug = info.slug || toSlug(this.name)
		if(!info.timestamp)
			this.timestamp = Date.now()
		this.timestamp = info.timestamp || Date.now()
	}
}