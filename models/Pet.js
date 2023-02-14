const { Schema, model } = require('mongoose');

const petSchema = new Schema ({
    petName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    species: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        unique: false,
        trim: true,
    },
    parentUsername: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    notes: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    }
})

const Pet = model('Pet', petSchema);

module.exports = Pet;