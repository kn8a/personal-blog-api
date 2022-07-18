const express = require('express')
const { route } = require('./postsRoutes')
const router = express.Router()
const { userLogin } = require('../controllers/userController')

router.post('/login', userLogin)

module.exports = router

