import React, {useState, useContext} from 'react'
import './FeaturedMentors.css'

import MentorCard from './MentorCard'
import { MentorsContext } from '../App'

function FeaturedMentors() {
    const mentors = useContext(MentorsContext).mentors.slice(0, 4)

    
    return (
        <div className="featured-mentors">
            <h2>Featured Mentors / Alumni</h2>
            <div className="mentor-cards-wrapper">
                {mentors.map(mentor => (
                    <MentorCard mentor={mentor} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedMentors



{/* <div className="mentor-card">
                    <div className='circular-frame'>
                        <img src='/images/woman-one.jpg' alt='Mentor 1' className='circular-image' />
                    </div>
                    <div>
                        <h3>Mentor 4</h3>
                        <p className='mentor-description'>Bio: aoijwhdoihawo</p>
                    </div>
                </div> */}
                
                {/* Repeat for more mentors... */}