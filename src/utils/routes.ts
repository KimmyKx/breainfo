import adminController from '../controller/adminController'
import announcementController from '../controller/announcementController'
import authController from '../controller/authController'
import categoryController from '../controller/categoryController'
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

router.get('/admin/category/add', middleware.Authorize, categoryController.HandleCategoryAddGet)
router.get('/admin/category/all', middleware.Authorize, categoryController.HandleCategoryAllGet)
router.get('/admin/category/edit/:name', middleware.Authorize, categoryController.HandleCategoryEditGet)


// post
router.post('/signup', authController.HandleSignupPost)
router.post('/login', authController.HandleLoginPost)

router.post('/item/add', middleware.Authorize, itemController.HandleItemAddPost)
router.post('/item/view', itemController.HandleItemViewPost)
router.post('/item/all', itemController.HandleItemAllPost)
router.post('/item/search', itemController.HandleItemSearchPost)

router.post('/announcement/add', middleware.Authorize, announcementController.HandleAnnouncementAddPost)
router.post('/announcement/view', announcementController.HandleAnnouncementViewPost)

router.post('/admin/category/add', middleware.Authorize, categoryController.HandleCategoryAddPost)
router.post('/admin/category/delete/:name', middleware.Authorize, categoryController.HandleCategoryDeletePost)
router.post('/admin/category/edit', middleware.Authorize, categoryController.HandleCategoryEditPost)

export default router