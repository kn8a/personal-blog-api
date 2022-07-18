const express = require('express')
const router = express.Router()
const { getAllPosts, createPost, getPost, updatePost } = require('../controllers/postController')
const { createComment, getAllComments, getComment, delComment } = require('../controllers/commentController')


router.get('/', getAllPosts) //get all

router.post('/', createPost) //create

router.get('/:postId', getPost) //get one
router.put('/:postId', updatePost)

//comments routes
router.get('/:postId/comments', getAllComments) //get all
router.post('/:postId/comments', createComment) //create comment

router.get('/:postId/comments/:commentId', getComment) //get one comment
router.delete('/:postId/comments/:commentId', delComment) //delete comment

module.exports = router
