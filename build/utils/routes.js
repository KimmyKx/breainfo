"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const announcementController_1 = __importDefault(require("../controller/announcementController"));
const authController_1 = __importDefault(require("../controller/authController"));
const homeController_1 = __importDefault(require("../controller/homeController"));
const itemController_1 = __importDefault(require("../controller/itemController"));
const middleware_1 = __importDefault(require("./middleware"));
const router = require('express').Router();
// get
router.get('/', middleware_1.default.Authorize, homeController_1.default.HandleRootGet);
router.get('/signup', authController_1.default.HandleSignupGet);
router.get('/login', authController_1.default.HandleLoginGet);
// post
router.post('/signup', authController_1.default.HandleSignupPost);
router.post('/login', authController_1.default.HandleLoginPost);
router.post('/item/add', middleware_1.default.Authorize, itemController_1.default.HandleItemAddPost);
router.post('/item/view', itemController_1.default.HandleItemViewPost);
router.post('/item/all', itemController_1.default.HandleItemAllPost);
router.post('/item/search', itemController_1.default.HandleItemSearchPost);
router.post('/announcement/add', middleware_1.default.Authorize, announcementController_1.default.HandleAnnouncementAddPost);
router.post('/announcement/view', announcementController_1.default.HandleAnnouncementViewPost);
exports.default = router;
