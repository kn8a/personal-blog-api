###**Description:**
A personal blog REST API with Blog posts, comments and likes using NodeJS and Token for authorization.

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


### Resources used
- Backend: NodeJS with Express
- Database: MongoDB
- Additional libraries: express-async-handler, jsonwebtoken, mongoose, bcryptjs, dotenv
 
### Where I struggled

- Implementing JWT auth method

### What I Learned

- Better understanding of bcryptjs
- Better understanding of JWT
- Writing custom auth middleware 
