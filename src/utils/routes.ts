import adminController from '../controller/adminController'
import announcementController from '../controller/announcementController'
import authController from '../controller/authController'
import homeController from '../controller/homeController'
import itemController from '../controller/itemController'
import middleware from './middleware'
const router = require('express').Router()

// get
router.get('/', middleware.Authorize, homeController.HandleRootGet)

router.get('/signup', authController.HandleSignupGet)
router.get('/login', authController.HandleLoginGet)

router.get('/admin', middleware.Authorize, adminController.HandleAdminGet)
router.get('/admin/item/add', middleware.Authorize, itemController.HandleItemAddGet)
router.get('/admin/item/all', middleware.Authorize, itemController.HandleItemAllGet)


// post
router.post('/signup', authController.HandleSignupPost)
router.post('/login', authController.HandleLoginPost)

router.post('/item/add', middleware.Authorize, itemController.HandleItemAddPost)
router.post('/item/view', itemController.HandleItemViewPost)
router.post('/item/all', itemController.HandleItemAllPost)
router.post('/item/search', itemController.HandleItemSearchPost)

router.post('/announcement/add', middleware.Authorize, announcementController.HandleAnnouncementAddPost)
router.post('/announcement/view', announcementController.HandleAnnouncementViewPost)

export default router