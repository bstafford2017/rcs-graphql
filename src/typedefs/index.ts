import { gql } from 'apollo-server-lambda'
export default gql`
  type Query {
    users(username: String!, password: String!): [User]
  }

  type User {
    id: ID!
    username: String!
    password: String!
    firstName: String!
    lastName: String!
    tasks: [Task!]
  }

  type Task {
    id: ID!
    title: String!
    category: String!
    description: String!
    important: Boolean!
    comments: [Comment!]
    status: String!
    priority: String!
    createdOn: String!
    dueOn: String!
  }

  type Comment {
    id: ID!
    user: User
    text: String!
    createdOn: String!
  }
`
