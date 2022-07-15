const mongoose = require('mongoose')

const commentSchema = mongoose.Schema(
    {
        comment: {
            type: String,
            required: [true, 'comment field empty']
        },
        author: {
            type: String,
            required: [true, 'name missing']
        },
        email: {
            type: String
        },
        likes: { 
            type: Number 
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Comment', commentSchema)