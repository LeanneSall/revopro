const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send('get user info')
});


module.exports = router;