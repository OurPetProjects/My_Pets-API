const { Pet } = require("../../models");
const Task = require("../../models/Task");

module.exports = {
  Mutation: {
    // TODO: Add task to pet via pet id, which is under user id
    addTask: async (parent, { petId, taskId }) => {
      return Pet.FindOneAndUpdate(
        { _id: petId },
        { $push: { taskList: { _id: { $eq: taskId } } } },
        { new: true }
      );
    },

    // TODO: Edit task

    // TODO: Delete task


  },
};
