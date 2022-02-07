import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'



// @desc    Create a category
// @route   POST /api/categories/
// @desc    Public
const createCategory = asyncHandler(async (req, res) => {
    const newCat = new Category(req.body)

    try {
        const createdCategory = await newCat.save()
        res.status(200).json(createdCategory)
    } catch (err) {
        res.status(500).json(err)
    }
})

// @desc    Get all categories
// @route   GET /api/categories/
// @desc    Public
const getAllCategories = asyncHandler(async (req, res) => {
    try {
        const categories = await Category.find({})
        res.status(200).json(categories)
    } catch (err) {
        res.status(500).json(err)
    }
})


export {
    createCategory,
    getAllCategories
}