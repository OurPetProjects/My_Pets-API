const { Schema, model } = require('mongoose');

const petSchema = new Schema ({
    petName: {
        type: String,
        required: true,
    },
    species: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    parentUsername: {
        type: Number,
        required: true,
    },
    notes: {
        type: String,
        required: false,
    }
})

const Pet = model('Pet', petSchema);

module.exports = Pet;