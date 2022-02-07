import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import Post from '../models/postModel.js'



// @desc    Create a new post
// @route   POST /api/posts/
// @desc    Public
const createPost = asyncHandler(async (req, res) => {
    const newPost = new Post(req.body)

    try {
        const createdPost = await newPost.save()
        res.status(200).json(createdPost)
    } catch (err) {
        res.status(500).json(err)
    }
})


// @desc    Update post
// @route   PUT /api/posts/:id
// @desc    Private
const updatePost = asyncHandler(async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        try {
            if (post.username === req.body.username) {
                try {
                    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                        $set: req.body
                    }, {
                        new: true
                    });
                    res.status(200).json(updatedPost)
                } catch (err) {
                    res.status(500).json(err)
                }
            } else {
                res.status(401).json('You can update only your post!')
            }
        } catch (err) {

        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// @desc    Delete a post
// @route   DELETE /api/users/:id
// @desc    Private
const deletePost = asyncHandler(async (req, res) => {

    try {
        const post = await Post.findById(req.params.id)
        try {
            if (post.username === req.body.username) {
                try {
                    await post.delete()
                    res.status(200).json('Post has been deleted...')
                } catch (err) {
                    res.status(500).json(err)
                }
            } else {
                res.status(401).json('You can delete only your post!')
            }
        } catch (err) {

        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// @desc    Get a single posts
// @route   GET /api/users/:id
// @desc    Private
const getPost = asyncHandler(async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
})

// @desc    Get all posts
// @route   GET /api/users/
// @desc    Private
const getAllPost = asyncHandler(async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts
        if (username) {
            posts = await Post.find({ username })
        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName]
                }
            })
        } else {
            posts = await Post.find({})
        }
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }
})

export {
    createPost,
    updatePost,
    deletePost,
    getPost,
    getAllPost
}