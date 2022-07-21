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
        public: {
            routes: `GET /api/posts - get all published posts 
            GET /api/posts/<postID> - get single post 
            GET /api/posts/<postID>/comments - get all comments for a post 
            POST /api/posts/<postID>/comments - create comment on a blog post`
        },
        private: {
            routes: `GET /api/posts/all - get all posts (drafts, published, archived)
            POST /api/posts/ - create a blog post - returns created post
            PUT /api/posts/<postID> - update a blog post
            DELETE /api/posts/<postID> - delete a post - returns deleted ID
            DELETE /api/posts/<postID>/comments/<commentID> - delete a comment`
        }

    })
})

app.listen(port, () => console.log('server started on ', port))