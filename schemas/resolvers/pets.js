const { UserInputError } = require("apollo-server-express");
const { create } = require("../../models/Pet");
const Pet = require("../../models/Pet");

const Pets = {
  Query: {
    async getPets() {
      try {
        const pets = await Pet.find();
        return pets;
      } catch (error) {
        throw new Error(error);
      }
    },

    async findPet ( _, {petId }) {
      try {
        const pet = Pet.findOne({ _id: petId });
        if (pet) return pet;
        else throw new Error("Pet does not exist.");
      } catch (error) {
        throw new Error(error);
      }
    }
    // pet: async (parent, { petId }) => {
    //   return Pet.findOne({ _id: petId });
    // },
  },

  Mutation: {
    async createPet(
      _, 
      { petName, species, age, parentUsername, notes }
    ) {
      const newPet = new Pet({
        petName, species, age, parentUsername, notes
      });
      const savedPet = await newPet.save();
      return savedPet;
    }, 

    async deletePet(_, { petId }) {
			const pet = await Pet.findById(petId);
			if (!pet) {
				throw new UserInputError("Pet does not exist.");
			}
			try {
				if (pet) {
					await pet.delete();
					const removePet = await Pet.find();
					return removePet;
				} else
					throw new AuthenticationError(
						"You can not delete this pet."
					);
			} catch (error) {
				throw new UserInputError(error);
			}
		},
}
};

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
