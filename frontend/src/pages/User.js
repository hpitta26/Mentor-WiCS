import React, {useState, useContext, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import './User.css'
import { MentorsContext } from '../App'

function User() {
    const [mentor, setMentor] = useState({})
    const { username } = useParams();
    const mentors = useContext(MentorsContext).mentors

    useEffect(() => { //called when page is initially loaded

        // for (let i=0; i < mentors.length; i++) {
        //     if (mentors[i].user.name)
        // }
        // const targetMentor = mentors.filter(m => m.user.name === username);
        
        // setMentor(targetMentor)
    }, [username])

    
    return (
        <div className="user-page-container">
            <h1>User Profile Page!</h1>
            <div>{username}</div>
        </div>
    )
    
}

export default User