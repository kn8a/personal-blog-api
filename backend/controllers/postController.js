const Post = require('../models/postModel')
const asyncHandler = require('express-async-handler')
const { findById } = require('../models/postModel')

//*viewer functions_______________

// get blog posts
// public
// GET /api/posts
const getAllPosts = asyncHandler(async (req,res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
})

// get blog post by id
// public
// GET /api/posts/:id
const getPost = asyncHandler( async(req,res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: 'Blog post not found'})
    }
})


//*author functions________________

// create blog post
// !private
// POST /api/posts
const createPost = asyncHandler( async(req,res) => {
    if (!req.user) {
        res.status(401).json({ error: 'Not authorized to create new posts'}) 
    }
    const post = await Post.create({
        title: req.body.title,
        content: req.body.content,
        status: req.body.status,
        keywords: [],
        likes: 0,
        author: req.user.id
    })
    res.json(post)
})

// edit blog post
// !private
// PUT /api/posts/:id
const updatePost = asyncHandler( async(req,res) => {
    const post = await Post.findById(req.params.postId)
    if (!post) {
        res.status(400).json({ error: 'Blog post not found'})
    } 
    if (!req.user) {
        res.status(401).json({ error: 'Not authorized to edit'}) 
    }
    if (post.user.toString() !== req.user.id) {
        res.status(401).json({ error: 'Not authorized to edit'})
    } 
    
    const updatedPost = await Post.findByIdAndUpdate(req.params.postId, req.body, {
        new: true,
    })
})

// del blog post
// !private
// DEL /api/posts/:id
const delPost = asyncHandler( async(req,res) => {
    const post = await Post.findById(req.params.postId)
    if (!post) {
        res.status(400).json({ error: 'Blog post not found'})
    } 
    if (!req.user) {
        res.status(401).json({ error: 'Not authorized to delete'}) 
    }
    if (post.user.toString() !== req.user.id) {
        res.status(401).json({ error: 'Not authorized to delete'})
    } 
    
    await post.remove()
    res.status(200).json({ id: req.params.postId })
})

module.exports = {
    getAllPosts, getPost, createPost, updatePost
}

