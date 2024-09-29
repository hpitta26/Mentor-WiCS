import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {

    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>inTech Girls - FIU</h1>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/create-user">Create User</Link>
          </li>
          <li>
            <Link to="/mentors">Mentors</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar

