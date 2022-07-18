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

app.listen(port, () => console.log('server started on ', port))