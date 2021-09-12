const express = require('express');
const router = express.Router();
const {createProfile} = require('../controller/profile');

router.post('/createProfile', createProfile);
module.exports = router;