const express = require('express')
const { getUser, createUser } = require('../controllers/auth.js')


const router = express.Router();

router.get('/login', getUser)
router.get('/signup', createUser)

module.exports = router;