require('dotenv').config()
const express = require('express')
const router = express.Router()


router.post('/', async (req, res) => {
    try {
        console.log('\n\n\n\n\n')
        console.log(req.body.message)
        console.log('\n\n\n\n\n')
        res.status(201).json({ message: 'Chatbot fetch Received' });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
    
})


module.exports = router //export as Express.js Router