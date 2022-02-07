import express from 'express'
import {
    createCategory,
    getAllCategories
} from '../controllers/categoriesController.js'

const router = express.Router()

// create new post router
router.route('/').post(createCategory).get(getAllCategories)


export default router