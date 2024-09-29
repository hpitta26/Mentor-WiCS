import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-section">
            <div className='hero-mid-wrapper'>
                <h1>Unlock Your Potential with a Mentor</h1>
                <p>
                    <b>Connect with experienced professionals to guide your journey.</b>
                </p>
                <div className="hero-buttons">

                    {/* <button>Find a Mentor</button>
                    <button>Create an Account</button> */}
                    {/* <div>Find a Mentor</div> */}
                    <Link className='hero-btn-link' to="/mentors">Find a Mentor</Link>
                    <Link className='hero-btn-link' to="/create-user">Create an Account</Link>
                    {/* <div>Create an Account</div> */}
                </div>
            </div>
        </div>
    )
}

export default HeroSection