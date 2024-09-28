import React, {useState} from 'react'
import './Home.css'

import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import FeaturedMentors from '../components/FeaturedMentors'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function Home() {


    return (
        <div className="section home">
            {/* <h1>Welcome to the Mentoring App!</h1> */}

            <HeroSection/>
            <HowItWorks/>
            <FeaturedMentors/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default Home