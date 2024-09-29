import React, {useState} from 'react'
import './HowItWorks.css'

function HowItWorks() {
    return (
        <div className="how-it-works">
            <h2>Join Our Community</h2>
            <div className="steps">
                <div className="step">
                    <h3>Find Scholarships</h3>
                    <p>
                        Discover a wide range of scholarships for women in Computer Science. 
                        Unlock opportunities to fund your education and achieve your dreams.
                    </p>
                </div>
                <div className="step middle-step">
                    <h3>Choose Your Mentor</h3>
                    <p>
                        Connect with experiences mentors who are passionate about guiding women in tech. 
                        Browse our list of mentors and select one that fits your needs and goals.
                    </p>
                </div>
                <div className="step">
                    <h3>Start Learning</h3>
                    <p>
                        Become a part of a supportive community of women in Computer Science. 
                        Share experiences, collaborate on projects, and grow together.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks