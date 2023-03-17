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
    allUsers: [User]

    getPets: [Pet]
    findPet(petId: ID!): Pet

    getTasks: [Tasks]
  }
  type Mutation {
    register(firstName: String!, lastName: String!, username: String!, email: String, password: String!): Auth
    login(username: String!, password: String!): User!
    createPet(
      petName: String!
      species: String!
      age: Int!
      parentUsername: String!
      notes: String
    ): Pet!
    deletePet(petId: ID!): [Pet]
    editPet(petId: ID!): [Pet]

    addTask(petId: ID!, task: String!): Pet
  }
`;

module.exports = typeDefs;