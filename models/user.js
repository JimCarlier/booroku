const mongoose = require('mongoose');
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
    Profile: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Profile'
        }
    ]
}) 
const User = mongoose.model('User', UserSchema);
module.exports = User