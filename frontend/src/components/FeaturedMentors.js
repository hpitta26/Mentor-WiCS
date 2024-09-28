import React, {useState} from 'react'
import './FeaturedMentors.css'

function FeaturedMentors() {
    return (
        <div className="featured-mentors">
            <h2>Featured Mentors</h2>
            <div className="mentor-cards">
                {/* Example Mentor Card */}
                <div className="mentor-card">
                    <h3>Mentor Name 1</h3>
                    <p>Specialization 1</p>
                </div>
                <div className="mentor-card">
                    <h3>Mentor Name 2</h3>
                    <p>Specialization 2</p>
                </div>
                {/* Repeat for more mentors... */}
            </div>
        </div>
    )
}

export default FeaturedMentors

