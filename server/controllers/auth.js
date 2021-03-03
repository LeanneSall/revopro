const User = require('../models/User')
const bcrypt = require('bcryptjs');

module.exports = {

    getUser: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email })
            const validPass = await bcrypt.compare(password, user.password);
            if (!user) {
                res.send("You must register to enter this website!")
            }
            if (!validPass) {
                res.send("Invlalid Credentials")
                res.status(404)
            }

            res.send("logged in!")
        } catch (error) {
            console.error(error.message)
        }

    },
    createUser: async (req, res) => {
        try {

            const { email, username, password } = req.body;

            const salt = await bcrypt.genSalt(10);
            const encrypted = await bcrypt.hash(password, salt)

            const newUser = new User({
                email,
                username,
                password: encrypted
            })

            newUser.save()
            res.send(newUser)

        } catch (error) {

        }

    }

}