"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __importDefault(require("../structures/item"));
const item_2 = __importDefault(require("../models/item"));
const middleware_1 = require("../utils/middleware");
const HandleItemAddPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.data.admin)
            return res.status(403).json({ error: '403 Forbidden' });
        yield new item_2.default(new item_1.default(req.body)).save();
        res.json({ success: true });
    }
    catch (err) {
        (0, middleware_1.HandleError)(res, err);
    }
});
const HandleItemViewPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield item_2.default.findOne({ slug: req.body.slug }));
    }
    catch (err) {
        (0, middleware_1.HandleError)(res, err);
    }
});
const HandleItemAllPost = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield item_2.default.find({}));
    }
    catch (err) {
        (0, middleware_1.HandleError)(res, err);
    }
});
const HandleItemSearchPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const re = new RegExp(`${req.body.name}`, 'gi');
        res.json(yield item_2.default.find({ name: re }).limit(15));
    }
    catch (err) {
        (0, middleware_1.HandleError)(res, err);
    }
});
exports.default = {
    HandleItemAddPost,
    HandleItemViewPost,
    HandleItemAllPost,
    HandleItemSearchPost
};
