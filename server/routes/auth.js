const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('login')
});

router.post('/', (req, res) => {
    res.send('register')
});

module.exports = router;