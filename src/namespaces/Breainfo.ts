import { Request } from "express"

declare namespace Breainfo {
    type AnnouncementType = {
      title: any
      content: any
      timestamp: any
      slug?: any
    }
    type ItemType = {
      name: any
      image?: any,
      description: any,
      gems: any,
      category: any,
      farmability: any,
      droppable: any,
      tradable: any,
      displayable: any,
      breakable: any,
      growth: any,
      color: any,
      hit: any,
      effect: any,
      obtained: any,
      timestamp?: any
      slug?: any
    }
    type FeaturedType = {
      itemSlug: any
      timestamp: any
    }
    interface ReqItemAddPost extends Request {
      body: {
        name: string
        image?: string
        description: string
        gems: number
        category: string[]
        farmability: string
        droppable: string
        tradable: string
        displayable: string
        breakable: string
        growth: string
        color: string[]
        hit: string
        effect: string
        obtained: string
      }
      data: {
        admin: boolean
      }
    }
    interface ReqItemViewPost extends Request {
      body: {
        slug: string
      }
    }
    interface ReqItemSearchPost extends Request {
      body: {
        name: string
      }  
    }
    interface ReqAuthorizeMiddleware {
      data: {
        signed: boolean
        admin: boolean
        user: object
      }
    }
    type ItemProperty = {
      name: string
      gems: number
      timestamp: number
      slug: string
    }
    interface ReqSignupPost extends Request {
      body: {
        username: string,
        password: string | Buffer
      }
    }
    interface ReqLoginPost extends Request {
      body: {
        username: string,
        password: string | Buffer
      }
    }
    interface ReqAnnouncementViewPost extends Request {
      body: {
        slug: string
      }
    }
}
export default Breainfo