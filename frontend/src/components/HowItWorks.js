import React, {useState} from 'react'
import './HowItWorks.css'

function HowItWorks() {
    return (
        <div className="how-it-works">
            <h2>How It Works</h2>
            <div className="steps">
                <div className="step">
                    <h3>Sign Up</h3>
                    <p>Create a free account to get started.</p>
                </div>
                <div className="step">
                    <h3>Choose Your Mentor</h3>
                    <p>Browse our list of mentors and select one that fits your needs.</p>
                </div>
                <div className="step">
                    <h3>Start Learning</h3>
                    <p>Engage in meaningful conversations and grow your skills.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks