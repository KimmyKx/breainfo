import { Response } from "express";
import Breainfo from "../namespaces/Breainfo";

const HandleAdminGet = (req: Breainfo.ReqAuthorizeMiddleware, res: Response) => {
    if(!req.data.admin) return res.status(403).json({ error: '403 Forbidden' })
    res.render('admin', { signed: true, admin: true })
}

export default {
    HandleAdminGet
}