const mongoose = require('mongoose');


const exerciseSchema = mongoose.Schema(
    {
        type: {
            type: String
        },
        name: {
            type: String
        },
        duration : {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance:{
            type: Number
        }

    }
)



module.exports = exerciseSchema;
