### Description:

A personal blog REST API with Blog posts, comments and likes using NodeJS and Token for authorization.
- Reader Frontend : [kn8a-blog.herokuapp.com/](https://kn8a-blog.herokuapp.com/ "https://kn8a-blog.herokuapp.com/") Source: https://github.com/kn8a/blog-frontend
- Blog Manager Frontend: [kn8a-blog-manager.herokuapp.com/](https://kn8a-blog-manager.herokuapp.com/ "https://kn8a-blog-manager.herokuapp.com/") Source: https://github.com/kn8a/blog-manager

**Public API Routes:**

    GET /api/posts - get all published posts
    GET /api/posts/<postID> - get single post
    GET /api/posts/<postID>/comments - get all comments for a post
    POST /api/posts/<postID>/comments - create comment on a blog post
   
**Private API Routes:** (Token required)

    GET /api/posts/all - get all posts (drafts, published, archived)
    POST /api/posts/ - create a blog post - returns created post
    PUT /api/posts/<postID> - update a blog post
    DELETE /api/posts/<postID> - delete a post - returns deleted ID
    DELETE /api/posts/<postID>/comments/<commentID> - delete a comment

**Blog Post fields**:

     - title: required (text)
     - content: required (text)
     - status: required (draft/published/archived)
     - keywords: (array)
     - author: ID from Token validation
     - likes: (number)
     - comments: count of comments on post (updates when new comments created)
     - createdAt: created timestamp
     - updatedAt: updated timestamp

**Comments fields:**

     - comment required (text)
     - author: required (text)
     - email: (text)
     - likes: (number)
     - postId: ID of post taken from path
     - createdAt: created timestamp
     - updatedAt: updated timestamp

### Todo:
- add likes feature for posts and comments
- add image/s upload for posts
- sanitize posts/comments HTML
- add TinyMCE

### Resources used
- Backend: NodeJS with Express
- Database: MongoDB
- Additional libraries: express-async-handler, jsonwebtoken, mongoose, bcryptjs, dotenv
 
## How to use:

1. Clone this repository.
2.  Installation:  `npm install`
3.  In the project directory, run:  `npm start`
4. Open  [http://localhost:3000](http://localhost:3000/)  to view it in the browser. The page will reload if you make edits.
