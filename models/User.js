const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { User } = require(".");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  location: {
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    unique: false,
    minlength: 5,
  },
  pets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
    },
  ],
});

// Set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
