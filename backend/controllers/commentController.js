const Comment = require('../models/commentModel')
const Post = require('../models/postModel')
const asyncHandler = require('express-async-handler')


//^ get all comments for post
// get blog posts
// public
// GET /api/posts
const getAllComments = asyncHandler(async (req,res) => {
    const allComments = await Comment.find({ postId: req.params.postId })
    res.status(200).json(allComments)
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
// public
// POST /api/posts/:postId/comments/
const createComment = asyncHandler(async (req,res) => {
    const comment = await Comment.create({
        comment: req.body.comment,
        author: req.body.name,
        email: req.body.email,
        likes: 0,
        postId: req.params.postId
    })
    const totalComments = await Comment.find({ postId: req.params.postId}).count()
    console.log(totalComments)
    await Post.findByIdAndUpdate({_id: req.params.postId}, {comments: totalComments})
    res.status(200).json(comment)
})

//^ delete a comment 
// delete comment
// private
// delete /api/posts/:postId/comments/:commentId
//! protected route
const delComment = asyncHandler(async (req,res) => {
    const comment = await Comment.findById(req.params.commentId)
    if (!comment) {
        res.status(400).json({ error: 'Comment not found'})
    } 
    if (!req.user) {
        res.status(401).json({ error: 'Not authorized to delete'}) 
    }

    
    await comment.remove()
    res.status(200).json({ id: req.params.commentId })
})

//^ comment like

module.exports = {
    getAllComments, getComment, createComment, delComment
}