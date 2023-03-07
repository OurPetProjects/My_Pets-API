const { Pet } = require("../../models");
const Task = require("../../models/Task");

module.exports = {
  Mutation: {
    // Add task to pet via pet id, which is under user id
    addTask: async (parent, { petId, taskId }) => {
      return Pet.FindOneAndUpdate(
        { _id: petId },
        { $pull: { taskList: { _id: { $eq: taskId } } } },
        { new: true }
      );
    },
  },
};
