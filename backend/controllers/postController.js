const Post = require('../models/postModel')
const asyncHandler = require('express-async-handler')
const { findById } = require('../models/postModel')

//*viewer functions
const getAllPosts = asyncHandler(async (req,res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
})

const getPost = asyncHandler( async(req,res) => {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
})


//*author functions
const createPost = asyncHandler( async(req,res) => {
    const post = await Post.create({
        title: req.body.title,
        content: req.body.content,
        status: req.body.status,
        keywords: [],
        likes: 0,
        author: 'req.user.id'
    })
    res.json(post)
})


module.exports = {
    getAllPosts, getPost, createPost
}

