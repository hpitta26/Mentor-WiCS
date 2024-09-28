const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['mentee', 'mentor'], // Define user roles
    required: true,
  },
  bio: {
    type: String,
    default: '',
  },
  skills: {
    type: [String], // Array of skills
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongoose.model('User', userSchema);