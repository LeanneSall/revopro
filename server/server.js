const express = require('express')
const auth = require('./routes/auth')
const app = express();


app.use(express.json({ extended: false }))
app.use('/api', auth)

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));