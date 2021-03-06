const mongoose = require("mongoose");
const ProfileSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});
const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = {Profile, ProfileSchema};