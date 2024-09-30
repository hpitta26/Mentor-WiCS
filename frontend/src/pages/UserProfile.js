import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import './UserProfile.css'

function UserProfile() {
    const {username} = useParams()
    

    return (
        <div>
            <h1 className='user-profile-container'>User Profile Page</h1>
            <div>{username}</div>
        </div>
    )
}

export default UserProfile