const postsResolvers = require('./posts');
const usersRevolvers = require('./users');

module.exports = {
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersRevolvers.Mutation,
        ...postsResolvers.Mutation
    }
}