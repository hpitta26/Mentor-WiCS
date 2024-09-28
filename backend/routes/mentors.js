const express = require('express');
const router = express.Router();
const Mentor = require('../models/mentorModel')

// Create a mentor
router.post('/', async (req, res) => {
  try {
    const newMentor = new Mentor(req.body);
    await newMentor.save();
    res.status(201).json(newMentor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add other mentor-specific routes here (e.g., get mentors, update mentor, etc.)

module.exports = router;