// import resolver info
const { Pet } = require('../resolvers/pets');
const { User } = require('../resolvers/users')
const { Task } = require('../resolvers/tasks')

// export as resolvers
module.exports = {Query: {...Pet.Query}, Muation: {...Pet.Muation, ...User.Muation}};