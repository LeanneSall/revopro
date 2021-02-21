const express = require('express')


const router = express.Router();

router.get('/habits')
router.get('/createhabit')
router.get('/update/:id')
router.get('/delete/:id')

export default router;