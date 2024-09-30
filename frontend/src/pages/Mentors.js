import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Mentors.css'

function Mentors({ mentors }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [matchedMentors, setMatchedMentors] = useState([]);

    useEffect(() => {
      const handler = setTimeout(() => {
          if (!mentors) return;

          const filteredMentors = mentors.filter(mentor => 
              mentor.specialization.toLowerCase().replace(/\s/g, "").includes(searchTerm.toLowerCase().replace(/\s/g, ""))
              || mentor.user.bio.toLowerCase().replace(/\s/g, "").includes(searchTerm.toLowerCase().replace(/\s/g, ""))        
          )

          setMatchedMentors(filteredMentors.slice(0, 4)); // Get top 3 matches
      }, 500); // Debounce delay (500ms)

      return () => {
          clearTimeout(handler); // Cleanup timeout on unmount or when searchTerm changes
      };
    }, [searchTerm, mentors]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value); // Update searchTerm with input value
    }


    return (
        <div className="mentor-page">
          <section className="hero">
            <h2>Find Your Ideal Mentor</h2>
            <p>Type keywords (e.g., data, engineering)</p>
          </section>
          <input
            type="text"
            placeholder="Search for mentors..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
          <div className="mentor-cards">
            {matchedMentors.map(mentor => (
              <div className="mentor-card" key={mentor.id}>
                <h3 className="mentor-name">{mentor.user.name}</h3>
                <p className="mentor-title">{mentor.specialization}</p>
                <p className='mentor-bio'>{mentor.user.bio}</p>
                {/* <button className="connect-button">Connect</button> */}
                <Link to={`/user/${mentor.user.name}`} className='connect-button'>Connect</Link>
              </div>
            ))}
          </div>
      </div>
    )
}

export default Mentors