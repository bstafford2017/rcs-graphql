import { ApolloServer } from 'apollo-server-lambda'
import { users, tasks } from './resolvers/users'
import { comments, taskCreatedOn } from './resolvers/tasks'
import { commentCreatedOn, user } from './resolvers/comments'
import typeDefs from './typedefs'

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users
    },
    User: {
      tasks
    },
    Task: {
      comments,
      createdOn: taskCreatedOn
    },
    Comment: {
      createdOn: commentCreatedOn,
      user
    }
  }
})
export const handler = server.createHandler()
