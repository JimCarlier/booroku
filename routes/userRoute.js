const express = require('express');
const router = express.Router();
const {register, login, getUsers} = require('../controller/userController');


router.post('/register', register)
router.post('/login', login)
router.get('/seeUsers', getUsers)
module.exports = router;