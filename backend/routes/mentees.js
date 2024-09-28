const express = require('express')
const router = express.Router()
const User = require('../models/userModel') // Adjust the path to your User model


//POST --> one
router.post('/', async (req, res) => {
  try {
    const newMentee = new User(req.body)
    await newMentee.save()
    res.status(201).json(newMentee); // Send back the created user
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Get --> all
router.get('/', async (req, res) => {
  try {
    const allMentees = await User.find()
    res.status(200).json(allMentees)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


//DELETE --> all
router.delete('/', async (req, res) => {
  try {
    await User.deleteMany({})
    res.status(200).json({ message : 'All Mentees Deleted'})
  } catch (error) {
    res.status(500).json({ message: err.message })
  }
  
})

module.exports = router