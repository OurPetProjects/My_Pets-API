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
    tasks:[Tasks]
}
type User {
    _id: ID
    firstName: String!
    lastName: String!
    location: String!
    username: String!
    email: String!
    password: String!
    pets:[Pet]
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
    pet(petId: ID!): Pet
}
type Mutation {
  addUser(firstName: String!, lastName: String!, username: String!, email: String, password: String!): Auth
  login(username: String!, password: String!): Auth
  register(userId: ID!): Auth
  addPet(user: ID!): Pet
  removePet(userId: ID!, petId: ID!): User
}
`;

module.exports = typeDefs;