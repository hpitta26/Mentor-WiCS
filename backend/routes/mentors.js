const express = require('express');
const router = express.Router();
const Mentor = require('../models/mentorModel')
const User = require ('../models/userModel')

// Create a mentor
router.post('/', async (req, res) => {
  const { name, email, password, role, bio, skills, specialization, availability } = req.body;

  try {
    // Create a new user
    const newUser = new User({
        name,
        email,
        password, // Remember to hash passwords in production
        role,
        bio,
        skills
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Create a new mentor associated with the user
    const newMentor = new Mentor({
        user: savedUser._id,
        specialization,
        availability
    });

    // Save the mentor to the database
    await newMentor.save();

    return res.status(201).json(newMentor)
    } catch (error) {
      console.error('Error creating mentor:', error);
      return res.status(500).json({
        message: 'Error creating mentor',
        error: error.message
    });
}
});


router.get('/', async (req, res) => {
    try {
      const allMentors = await Mentor.find().populate('user')
      res.status(200).json(allMentors)
    } catch (error) {
      res.status(500).json({ message: err.message })
    }
})

// Add other mentor-specific routes here (e.g., get mentors, update mentor, etc.)

module.exports = router;