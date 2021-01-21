const Post = require('../../models/Post')

module.exports = {
    Query: {
        async getPosts() {
            //testing break or error
            try {
                const posts = await Post.find();
                return posts
            } catch (err) {
                throw new Error(err);
            }
        }
    }
}