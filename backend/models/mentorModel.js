const mongoose = require('mongoose')
const { Schema } = mongoose

//Mentor --> user with some additional features
const mentorSchema = new Schema({
  user: { //Here we 'import all of the'
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true 
  },
  specialization: {
    type: String,
    required: true,
  },
  availability: {
    type: [String], // e.g., ["Monday", "Wednesday"]
    default: [],
  },
//   sessions: [{
//     type: Schema.Types.ObjectId,
//     ref: 'Session' // If you have a session model
//   }],
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongoose.model('Mentor', mentorSchema, 'mentor');