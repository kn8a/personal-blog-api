const Comment = require('../models/commentModel')
const Post = require('../models/postModel')
const asyncHandler = require('express-async-handler')


//^ get all comments for post
// get blog posts
// public
// GET /api/posts
const getAllComments = asyncHandler(async (req,res) => {
    // const posts = await Post.find()
    // res.status(200).json(posts)
})



//^ get single comment by id
// get blog posts
// public
// GET /api/posts
const getComment = asyncHandler(async (req,res) => {
    // const posts = await Post.find()
    // res.status(200).json(posts)
})

//^ create a single comment to blog-post
// get blog posts
// public
// GET /api/posts
const createComment = asyncHandler(async (req,res) => {
    // const posts = await Post.find()
    // res.status(200).json(posts)
})

//^ delete a comment 
// get blog posts
// public
// GET /api/posts
//! protected route
const delComment = asyncHandler(async (req,res) => {
    // const posts = await Post.find()
    // res.status(200).json(posts)
})

//^ comment like

module.exports = {
    getAllComments, getComment, createComment, delComment
}