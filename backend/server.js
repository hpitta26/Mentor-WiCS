const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3000' //Frontend
}))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mentor-wics-db')
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


//localhost:8000/api/mentees
const menteesRouter = require('./routes/mentees')
app.use('/api/mentees', menteesRouter)

//localhost:8000/api/mentors
const mentorsRouter = require('./routes/mentors')
app.use('/api/mentors', mentorsRouter)

//localhost:8000/api/chatbot
const chatbotRouter = require('./routes/chatbot')
app.use('/api/chatbot', chatbotRouter)


app.listen(8000, (error) => { //Listens to requests @ Port:8000
    if (!error) {
        console.log('Server is Running')
    } else {
        console.log('Error Occurred: ', error)
    }
})