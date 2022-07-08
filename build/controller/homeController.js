"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HandleRootGet = (req, res) => {
    res.render('index', { signed: req.data.signed, user: req.data.user, admin: req.data.admin });
};
exports.default = {
    HandleRootGet
};
