const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://my-pets-admin:Password1@my-pets-database.vuuzu3z.mongodb.net/my-pets-database?retryWrites=true&w=majority',

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;