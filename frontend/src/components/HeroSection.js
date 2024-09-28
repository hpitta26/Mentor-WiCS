import React, {useState} from 'react'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-section">
            <h1>Unlock Your Potential with a Mentor</h1>
            <p>Connect with experienced professionals to guide your journey.</p>
            <div className="hero-buttons">
                <button>Find a Mentor</button>
                <button>Create an Account</button>
            </div>
        </div>
    )
}

export default HeroSection