const mongoose = require('mongoose');

const habitSchema = mongoose.Schema({

    userID: {
        type: String,
        required: true,
    },
    name: String,
    leadin: String,
    description: String,
    category: [String],
    createdAt: {
        type: Date,
        default: new Date()
    },
    progress: Number,


})

module.exports = Habit = mongoose.model('habit', habitSchema)

