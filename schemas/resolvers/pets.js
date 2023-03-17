const { UserInputError } = require("apollo-server-express");
const { create } = require("../../models/Pet");
const Pet = require("../../models/Pet");

const Pets = {
  Query: {
    // ! Find All Pets
    async getPets() {
      try {
        const pets = await Pet.find();
        return pets;
      } catch (error) {
        throw new Error(error);
      }
    },
// ! Find One Pet
    async findPet ( _, {petId}) {
      try {
        const pet = Pet.findOne({ _id: petId });
        if (pet) return pet;
        else throw new Error("Pet does not exist.");
      } catch (error) {
        throw new Error(error);
      }
    }
  },

  Mutation: {
    // ! Create Pet
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
// ! Delete Pet
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
    // ! Edit Pet
    async editPet(_, { petName, species, age, parentUsername, notes }) 
    {
      const pet = await Pet.findOne(petId);
      if (!pet) throw new Error("Pet not found.");

      if (petName === "") throw new Error("Invalid field.");
      if (species === "") throw new Error("Invalid field.");
      if (age === null ) throw new Error("Invalid field.");
      if (parentUsername === "") throw new Error("Invalid field.");
      if (notes === "") throw new Error("Invalid field.");

      const petEdits = {
        petName,
        species,
        age, 
        parentUsername,
        notes
      };

      pet.push(petEdits);

      try{
        await pet.save();
        const updatePet = await Pet.find();
        return updatePet;
      } catch (error) {
        throw new Error("Cannot edit pet.");
      }

    }
}
};

module.exports = { Pets };
