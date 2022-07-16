import { Response } from "express";
import ItemCategory from "../models/itemCategory";
import Breainfo from "../namespaces/Breainfo";
import { HandleError } from "../utils/middleware";

const HandleCategoryAllGet = async (req: Breainfo.ReqAuthorizeMiddleware, res: Response) => {
    try {
        if(!req.data.admin) return res.status(403).json({ error: "403 Forbidden" })
        res.render('category/all', { categories: await ItemCategory.find({}), signed: true, admin: true })
    } catch(err) {
        HandleError(res, err)
    }
}

const HandleCategoryAddGet = (req: Breainfo.ReqAuthorizeMiddleware, res: Response) => {
    try {
        if(!req.data.admin) return res.status(403).json({ error: "403 Forbidden" })
        res.render('category/add', { signed: true, admin: true })
    } catch(err) {
        HandleError(res, err)
    }
}

const HandleCategoryAddPost = async (req: any, res: Response) => {
    try {
        if(!req.data.admin) return res.status(403).json({ error: "403 Forbidden" })
        if(!req.body.name) return res.status(400).json({ error: "400 Bad Request" })
        req.body.name = req.body.name.replace(/[^a-zA-Z0-9]/g, '')
        await new ItemCategory(req.body).save()
        res.json({ success: true })
    } catch(err) {
        HandleError(res, err)
    }
}

const HandleCategoryDeletePost = async (req: Breainfo.ReqAuthorizeMiddleware, res: Response) => {
    try {
        if(!req.data.admin) return res.status(403).json({ error: "403 Forbidden" })
        if(!req.params.name) return res.status(400).json({ error: "400 Bad Request" })
        await ItemCategory.deleteOne({ name: req.params.name })
        res.json({ success: true })
    } catch(err) {
        HandleError(res, err)
    }
}

const HandleCategoryEditGet = async (req: Breainfo.ReqAuthorizeMiddleware, res: Response) => { 
    try {
        if(!req.data.admin) return res.status(403).json({ error: "403 Forbidden" })
        const category = await ItemCategory.findOne({ name: req.params.name })
        if(!category) return res.status(400).json({ error: "400 Bad Request" })
        res.render('category/edit', { signed: true, admin: true, category })
    } catch(err) {
        HandleError(res, err)
    }
}

const HandleCategoryEditPost = async (req: any, res: Response) => {
    try {
        if(!req.data.admin) return res.status(403).json({ error: "403 Forbidden" })
        if(!req.body.name || !req.body.oldName) return res.status(400).json({ error: "400 Bad Request" })
        req.body.name = req.body.name.replace(/[^a-zA-Z0-9]/g, '')
        await ItemCategory.updateOne({ name: req.body.oldName }, { name: req.body.name })
        res.json({ success: true })
    } catch(err) {
        HandleError(res, err)
    }
} 

export default {
    HandleCategoryAllGet,
    HandleCategoryAddGet,
    HandleCategoryAddPost,
    HandleCategoryDeletePost,
    HandleCategoryEditGet,
    HandleCategoryEditPost
}