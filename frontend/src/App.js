import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './pages/Home'
import Mentors from './pages/Mentors'
import UserForm from './pages/UserForm'
import ChatbotPopup from './components/ChatbotPopup';

function App() {
  //Dialogflow --> for chatbot
  //React.js --> frontend
  //Node.js & Express.js --> backend
  //MongoDB or Firebase --> DB

  //Features:
  //Navbar --> Home, Mentors, Create Users (form), Resources?
  //Welcome font in the middle of the screen

  //Testimonials section at the bottom of the page (very important)
  //User Testimonials: Carousel or grid display of quotes from users about their positive experiences with mentors

  return (
    <Router>
      <div className="app">
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/mentors" element= {<Mentors />} />
            <Route path="/create-user" element= {<UserForm />} />
          </Routes>
        </main>
        <ChatbotPopup/>
      </div>
    </Router>
  );
}

export default App;
