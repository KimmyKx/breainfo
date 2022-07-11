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
const announcement_1 = __importDefault(require("../models/announcement"));
const announcement_2 = __importDefault(require("../structures/announcement"));
const middleware_1 = require("../utils/middleware");
const HandleAnnouncementAddPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.data.admin)
            return res.status(403).json({ error: '403 Forbidden' });
        yield new announcement_1.default(new announcement_2.default({ title: req.body.title, content: req.body.content, timestamp: Date.now() })).save();
        res.json({ success: true });
    }
    catch (err) {
        (0, middleware_1.HandleError)(res, err);
    }
});
const HandleAnnouncementViewPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield announcement_1.default.findOne({ slug: req.body.slug }));
    }
    catch (err) {
        (0, middleware_1.HandleError)(res, err);
    }
});
const HandleAnnouncementAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield announcement_1.default.find({});
});
exports.default = {
    HandleAnnouncementAddPost,
    HandleAnnouncementViewPost,
    HandleAnnouncementAll
};
