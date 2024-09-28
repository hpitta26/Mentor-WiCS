import React, {useState} from 'react'
import './Testimonials.css'

function Testimonials() {
    return (
        <div className="testimonials">
            <h2>What Our Users Say</h2>
            <div className="testimonial">
                <p>"This app changed my career!" - User 1</p>
            </div>
            <div className="testimonial">
                <p>"My mentor helped me find my path!" - User 2</p>
            </div>
            {/* Add more testimonials as needed */}
        </div>
    )
}

export default Testimonials