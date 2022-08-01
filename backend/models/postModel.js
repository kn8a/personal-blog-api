const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String
        },
        status: {
            type: String,
            required: true, 
            enum: ['draft', 'published', 'archived']
        },
        keywords: {
            type: Array
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        likes: { type: Number, default: 0 },
        comments: { type: Number, default: 0 }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Post', postSchema)