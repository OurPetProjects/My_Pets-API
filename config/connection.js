const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI, 
  
  //|| 'put mongodb URI here',

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;