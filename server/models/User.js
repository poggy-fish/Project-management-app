const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
        type: String,
        min: 10,
    },
    picturePath:{
        type: String,
        default: '',
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
    },
    age: {
        type: Number,
        min: 18,
        required: true,
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
    NumberOftasks: {
        type: Number,
        default: 0,
    },
    tasks: {
        type: Array,
        default: [],
    },
    team: {
        type: Array,
        defsult: [],
    },
    teammates: {
        type: Array,
        default: [],
    }
});

//saving the user schema as user
const User = mongoose.model('User', userSchema);
module.exports = User;