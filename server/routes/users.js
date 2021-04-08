const express = require('express');
const User = require('../models/User');

const router = express.Router();



router.post('/', (req, res) => {
    res.send('get user info')
});


module.exports = router;