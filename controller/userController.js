const User = require('../models/user');
require('dotenv').config();
require('../config/db');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');


const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!(name && email && password)) {
            res.send('Envoie tout a fou')
        }
        const oldUser = await User.findOne({email})
        if (oldUser) {
            return res.send('T\'es pas dans un moulin')
        }
        const hash = await bcrypt.hash(password, 8)
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password: hash
        })
        
        // res.send(user)
        const token = JWT.sign({
            user_id: user._id, email
        }, 
        process.env.TOKEN_KEY,
        {
            expiresIn: '2h'
        })
        user.token = token
        res.status(201).json(user)
        res.send(user)
    }
    catch (err) {
        console.log(err || 'chien')
    }
}




const login =  async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!(email && password)) {
            res.send('Envoie tout a fou')
        }
        const userExist = await User.findOne({email});
        if(userExist && (await bcrypt.compare(password, userExist.password))) {
            const token = JWT.sign({
                user_id: userExist._id, email
            }, 
            process.env.TOKEN_KEY,
            {
                expiresIn: '2h'
            })
            userExist.token = token
            res.status(201).json(userExist)
            res.send(userExist)
        
        }


    }
    catch (err) {
        console.log(err)
    }
}

const getUsers = async (req, res) => {
    const usrs = await User.find({});
    res.send({usrs})
}



module.exports = {register, login, getUsers};
