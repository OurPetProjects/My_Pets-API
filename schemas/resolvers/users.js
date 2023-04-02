const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server-express");

const User = require("../../models/User");
const { SECRET_KEY } = require("../../secrets");
const { validateRegisterInput } = require("../../utils/validators");
const { validateLoginInput } = require("../../utils/validators");

function generateToken(user) {
  return jwt.sign({
    id: user.id,
    email: user.email,
    username: user.username,
  },
  SECRET_KEY,
    { expiresIn: "1h" }
  );
}

const Users = {
  Query: {
    // Find all Users
    async getUsers() {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error(error);
      }
    },
    //Find one User and return Pets from pets array
    async user(_, { username }) {
      try {
        const user = User.findOne({ username }).populate('pets');
        if (user) return user;
      } catch (error) {
        throw new Error(error);
      }
    },

  },

  Mutation: {
    async login(_, { username, password }) {
      const { errors, valid } = validateLoginInput(username, password);

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const user = await User.findOne({ username });

      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = "Incorrect credentials";
        throw new UserInputError("Incorrect Credentials", { errors });
      }
      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    async register(
      _,
      {
          firstName,
          lastName,
          username,
          email,
          password,
          // confirmPassword,
      },
      context,
      info
    ) {
      const { valid, errors } = validateRegisterInput(
        firstName,
        lastName,
        username,
        email,
        password,
        // confirmPassword
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("Username already taken", {
          errors: {
            username: "This username is taken",
          },
        });
      }
      const userEmail = await User.findOne({ email });
      if (userEmail) {
        throw new UserInputError("Email already taken", {
          errors: {
            email: "This email is taken",
          },
        });
      }

      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        firstName,
        lastName,
        username,
        email,
        password,
      });

      const res = await newUser.save();
      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};

module.exports = { Users };
