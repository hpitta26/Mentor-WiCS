import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, {useState, useEffect, useContext, createContext} from 'react'

import Navbar from './components/Navbar';
import Home from './pages/Home'
import Mentors from './pages/Mentors'
import UserForm from './pages/UserForm'
import ChatbotPopup from './components/ChatbotPopup';
import User from './pages/User';

export const MentorsContext = createContext([])

function App() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => { //Called when page is initially loaded
      const getMentors = async() => {
        const res = await fetch('http://localhost:8000/api/mentors')
        const data = await res.json()

        setMentors(data)
      }
      getMentors()
  }, [])

  return (
    <Router>
      <div className="app">
       <MentorsContext.Provider value={{mentors: mentors}}> 
          <Navbar/>
          <main>
            <Routes>
              <Route path="/" element= {<Home />} />
              <Route path="/mentors" element= {<Mentors mentors={mentors} />} />
              <Route path="/create-user" element= {<UserForm />} />
              <Route path="/user/:username" element= {<User/>} />
            </Routes>
          </main>
          <ChatbotPopup/>
        </MentorsContext.Provider>
      </div>
    </Router>
  );
}

export default App;



//Dialogflow --> for chatbot
//React.js --> frontend
//Node.js & Express.js --> backend
//MongoDB or Firebase --> DB

//Features:
//Navbar --> Home, Mentors, Create Users (form), Resources?
//Welcome font in the middle of the screen

//Testimonials section at the bottom of the page (very important)
//User Testimonials: Carousel or grid display of quotes from users about their positive experiences with mentors


//Reach Out (Feature)
//Give variety of attributes to AI --> AI will search Linked-in for example and return 
//the email/linked-in of someone who matches your search so that you can reach out

//Page Header --> Get out of your Comfort Zone
//Way of Organically attracting new mentors to our App.
