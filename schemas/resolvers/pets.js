const Pet = require("../../models/Pet");

const Pets = {
  Query: {
    async getPets(){
      try{
        const pets = await Pet.find();
        return pets;
      } catch (error) {
        throw new Error(error)
      }
    }


    // pet: async (parent, { petId }) => {
    //   return Pet.findOne({ _id: petId });
    // },
    
    }
  }

//   Mutation: {
//     addPet: async (parent, { user }, context) => {
//       if (context.user) {
//         console.log("Adding pet to user profile");
//         return User.FindOneAndUpdate(
//           { _id: context.user._id },
//           {
//             petList: petList,
//           },
//           {
//             new: true,
//             runValidators: true,
//           }
//         );
//       }
//     },
//     removePet: async (parent, { userId, petId }) => {
//       return User.FindOneAndUpdate(
//         { _id: userId },
//         { $pull: { petList: { _id: { $eq: petId } } } },
//         { new: true }
//       );
//     },
//   },
// };

module.exports = { Pets };
