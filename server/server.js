const express = require('express');
const connectDB = require('./config/db');
const auth = require('./routes/auth')
const users = require('./routes/users')
const habits = require('./routes/habits')
const app = express();

connectDB();


app.use(express.json({ extended: false }))
app.use('/api/users', require('./routes/users'))
app.use('/api/habit', require('./routes/habit'))
app.use('/api/auth', require('./routes/auth'))

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));