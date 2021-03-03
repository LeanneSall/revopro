const express = require('express')
const { getUser, createUser } = require('../controllers/auth.js')


const router = express.Router();

router.post('/login', getUser)
router.post('/signup', createUser)

module.exports = router;