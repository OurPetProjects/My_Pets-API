const { Pet } = require("../../models");
const Task = require("../../models/Task");
const { AuthenticationError, UserInputError } = require("apollo-server-express");
const checkAuth = require("../../utils/checkAuth");

const Tasks = {
  Query: {
    // TODO: Call All Tasks
    async getTasks(_, { petId }) {
      try {
        const tasks = await Task.find();
        return tasks;
      } catch (error) {
        throw new Error(error);
      }
    }
  },

  Mutation: {

    // TODO: Add task to pet via pet id, which is under user id
    // addTask: async (parent, { petId, taskId }) => {
    //   return Pet.FindOneAndUpdate(
    //     { _id: petId },
    //     { $push: { taskList: { _id: { $eq: taskId } } } },
    //     { new: true }
    //   );
    // },

    // TODO: Edit task
    editTask: async (_, { petId }, context) => {
      return Pet.findOneAndUpdate(
        { _id: petId },
        { $set: { task: context }, },
        { new: true }
      );
    },



    // TODO: Delete task
    deleteTask: async (_, { petId }, context) => {
      try {
        const username = user.username
        const task = await task.findById(petId);
        if (pin.createdby === username) {
          await task.delete();
          const task = await Task.find();
          return task;
        }
        else
          throw new AuthenticationError("You can not delete this task");

      }
      catch (error) {
        throw new UserInputError(error);
      }



    }
  },




},
};

module.exports = { Tasks };
