const Profile = require('../models/profile').Profile;
const User = require('../models/user')
require('dotenv').config
require('../config/db');

const createProfile = async (req, res) => {
    let newProfile = new Profile(req.body)
    try {
        console.log(newProfile);
        // console.log(req)
        await newProfile.save();
        await User.findOneAndUpdate({_id: req.user._id}, {profile: newProfile})
        // const {id} = req.params;
        // const {firstname, lastname, address} = req.body;
        // const user = await User.find({_id: id})
        // console.log(user)
        // const profile = await Profile.create({
        //     firstname,
        //     lastname,
        //     address
        // })
        // user[0].Profile.push(profile)
        // console.log(user[0].Profile)
        
        // res.send(user)
    }
    
    catch(err) {
        console.log(err)
    }
    
}

module.exports = {createProfile};