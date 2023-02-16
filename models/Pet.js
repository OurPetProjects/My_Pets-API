const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  species: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    unique: false,
    trim: true,
  },
  parentUsername: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  notes: {
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  tasks: [
    {
      type: String,
      required: false,
    },
  ],
});

module.exports = mongoose.model("Pet", petSchema);
