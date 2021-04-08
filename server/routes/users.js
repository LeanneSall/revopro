const express = require('express');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const router = express.Router();



router.post('/', [
    check('firstName', 'name is required').not().isEmpty(),
    check('lastName', 'name is required').not().isEmpty(),
    check('email', 'valid email is required').isEmail(),
    check('password', 'password with 6 or more characters is required').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;
    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' })
        }

        const salt = await bcrypt.genSalt(10);
        const encryptedPass = await bcrypt.hash(password, salt);

        user = new User({
            firstName,
            lastName,
            email,
            encryptedPass
        })

        await user.save();

        res.send('User saved into database');

    } catch (e) {

    }

});


module.exports = router;