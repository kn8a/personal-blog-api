const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//jwt token generator
const genToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1d'})
}

const userLogin = asyncHandler( async(req, res, next) => {
    const {username, password} = req.body
    const user = await User.findOne({username})
    console.log(user.id, user._id)
    if (user && (await bcrypt.compare(req.body.password, user.hash))) {
        res.json({
            id: user.id,
            name: user.name,
            token: genToken(user.id)
        })
    }
})


module.exports = {
    userLogin
}

