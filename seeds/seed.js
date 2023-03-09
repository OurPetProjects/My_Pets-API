const db = require('../config/connection');
const { User, Pet } = require('../models');
const userSeed = require('./userSeed.json');
const petSeed = require('./petSeed.json');


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeed)

    await Pet.deleteMany({});
    await Pet.create(petSeed);


    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});