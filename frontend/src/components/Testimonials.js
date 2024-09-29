import React, {useState} from 'react'
import './Testimonials.css'

function Testimonials() {

    return (
        <div className='testimonials-container'>
            <h2>What Our Users Say</h2>
            <div className='testimonials-wrapper'>
                <div className="testimonial-card">
                    <div className="quote-icon">“</div> {/* Optional quote icon */}
                    <blockquote>My mentor guided me through the most challenging times in my studies. Their insights and support helped me not only understand the material but also gain confidence in my abilities!</blockquote>
                    <div className="author-info">
                        <h4>Emily J.</h4>
                        <p>Sophomore, Computer Science</p>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="quote-icon">“</div> {/* Optional quote icon */}
                    <blockquote>Having a mentor who genuinely cares has been a game-changer. Their advice on navigating my career path and networking opportunities has opened doors I never thought possible!</blockquote>
                    <div className="author-info">
                        <h4>Sarah P.</h4>
                        <p>Senior, Information Systems</p>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="quote-icon">“</div> {/* Optional quote icon */}
                    <blockquote>The guidance I received from my mentor was invaluable. They provided me with the tools to succeed in my studies and motivated me to pursue my dreams!</blockquote>
                    <div className="author-info">
                        <h4>Simone L.</h4>
                        <p>Freshman, Engineering</p>
                    </div>
                </div>
            </div>
            
        </div>
        

        // <div className="testimonials">
        //     <h2>What Our Users Say</h2>
        //     <div className="testimonial">
        //         <p>"This app changed my career!" - User 1</p>
        //     </div>
        //     <div className="testimonial">
        //         <p>"My mentor helped me find my path!" - User 2</p>
        //     </div>
        // </div>
    )
}

export default Testimonials