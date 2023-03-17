const { Pet } = require("../../models");
const Task = require("../../models/Task");

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

    // TODO: Delete task

  },
};

module.exports = { Tasks };
