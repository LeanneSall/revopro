const express = require('express')
const { createHabits, updateHabits, getHabits, deleteHabits } = require("../controllers/habits")


const router = express.Router();

router.get('/habits', getHabits)
router.post('/createhabit', createHabits)
router.patch('/update/:id', updateHabits)
router.delete('/delete/:id', deleteHabits)

export default router;