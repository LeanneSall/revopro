const express = require('express')
const { getUser, createUser } = require('../controllers/auth')


const router = express.Router();

router.get('/login', getUser)
router.get('/signup', createUser)


export default router;