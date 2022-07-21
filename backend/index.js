//express
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const connectDb = require('./config/db')
const app = express()

connectDb()
//add body handler (form data)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/posts', require('./routes/postsRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.get('/', (req, res) => {
    res.status(200).json({
        message : 'available routes:',
        public: [
            {
                type: 'GET',
                route: '/api/posts',
                description: 'get all published posts',
            },
            {
                type: 'GET',
                route: '/api/posts/<postID>',
                description: 'get single post',
            },
            {
                type: 'GET',
                route: '/api/posts/<postID>/comments',
                description: 'get all comments for a post ',
            },
            {
                type: 'POST',
                route: '/api/posts/<postID>/comments',
                description: 'create comment on a blog post`',
            },
        ],            
        
        protected: [
            {
                type: 'GET',
                route: '/api/posts/all',
                description: 'get all posts (drafts, published, archived)',
            },
            {
                type: 'POST',
                route: '/api/posts',
                description: 'create a blog post - returns created post',
            },
            {
                type: 'PUT',
                route: '/api/posts/<postID>',
                description: 'update a blog post',
            },
            {
                type: 'DELETE',
                route: '/api/posts/<postID>',
                description: 'delete a post - returns deleted ID',
            },
            {
                type: 'DELETE',
                route: '/api/posts/<postID>/comments/<commentID>',
                description: 'delete a comment',
            },
        ]

    })
})

app.listen(port, () => console.log('server started on ', port))


