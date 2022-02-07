import express from 'express'
import {
    registerUser,
    authUser,
    updateUser,
    deleteUser,
    getUser
} from '../controllers/usersController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

// register new user router
router.route('/').post(registerUser)
// login user router
router.post('/login', authUser)
// update and delete user
router
    .route('/:id')
    .put(updateUser)
    .delete(deleteUser)
    .get(getUser)

export default router