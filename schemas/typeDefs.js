const {gql} = require('apollo-server-express');

//Need Query and Mutations - added basic auth as we will have an Auth object
const typeDefs = gql`
type Pet {
    _id: ID
    petName: String!
    species: String!
    age: Int!
    parentUsername: String!
    notes: String
    tasks:[Tasks]!
}

type User {
    _id: ID
    firstName: String!
    lastName: String!
    location: String!
    age: Int!
    username: String!
    email: String!
    password: String!
    pets:[Pet]!
}

type Tasks {
    _id: ID
    text: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    pets: [Pet]
}

`;

module.exports = typeDefs;