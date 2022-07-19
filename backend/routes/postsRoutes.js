const express = require('express')
const router = express.Router()
const { getAllPosts, createPost, getPost, updatePost, delPost } = require('../controllers/postController')
const { createComment, getAllComments, getComment, delComment } = require('../controllers/commentController')
const { protect } = require('../middleware/authMidware')


router.get('/', getAllPosts) //get all

router.post('/', protect, createPost) //!create

router.get('/:postId', getPost) //get one
router.put('/:postId', protect, updatePost) //!update post
router.delete('/:postId', protect, delPost) //!delete post

//comments routes
router.get('/:postId/comments', getAllComments) //get all
router.post('/:postId/comments', createComment) //create comment

router.get('/:postId/comments/:commentId', getComment) //get one comment
router.delete('/:postId/comments/:commentId', protect, delComment) //!delete comment

module.exports = router
