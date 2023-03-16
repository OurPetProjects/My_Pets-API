const { gql } = require("apollo-server-express");

//Need Query and Mutations - added basic auth as we will have an Auth object
const typeDefs = gql`
  type Pet {
    _id: ID
    petName: String!
    species: String!
    age: Int!
    parentUsername: String!
    notes: String
    tasks: [Tasks]
  }
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    location: String
    username: String!
    email: String!
    password: String!
    pets: [Pet]
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
    getPets: [Pet]
    findPet(petId: ID!): Pet
  }
  type Mutation {
    register: User!
    login(username: String!, password: String!): User!
    createPet(
      petName: String!
      species: String!
      age: Int!
      parentUsername: String!
      notes: String
    ): Pet!
    deletePet(petId: ID!): [Pet]
  }
`;

module.exports = typeDefs;