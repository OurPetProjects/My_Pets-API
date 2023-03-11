// import resolver info
const { Pets } = require('./pets');
const { Users } = require('./users')
// const { Task } = require('../resolvers/tasks')

// export as resolvers
module.exports = { Query: { ...Pets.Query }, Mutation: { ...Pets.Mutation, ...Users.Mutation } };