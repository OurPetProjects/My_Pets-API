const { Pet } = require('../models');

const resolvers = {
    Query: {
        pets: async () => {
            return Pet.find()
        }
    }
}

module.exports = resolvers;