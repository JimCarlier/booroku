const mongoose = require('mongoose');
const ProfileSchema = require('../models/profile').ProfileSchema

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        default: null,
        required: true
    },
    email: {
        type: String,
        default: null,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    profile: ProfileSchema
}) 
const User = mongoose.model('User', UserSchema);
module.exports = User