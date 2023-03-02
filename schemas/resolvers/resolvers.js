// import resolver info
const { Pet } = require('../resolvers/pets');
const { User } = require('../resolvers/users')

// export as resolvers
module.exports = {Query: {...Pet.Query}, Muation: {...Pet.Muation, ...User.Muation}};