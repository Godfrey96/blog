import express from 'express'
import {
    createPost,
    updatePost,
    deletePost,
    getPost,
    getAllPost
} from '../controllers/postsController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

// create new post router
router.route('/').post(createPost)
// get all posts router
router.route('/').get(getAllPost)
// update, delete, get post
router
    .route('/:id')
    .put(updatePost)
    .delete(deletePost)
    .get(getPost)

export default router