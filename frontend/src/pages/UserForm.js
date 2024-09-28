import React, {useState} from 'react'
import './UserForm.css'

function UserForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'mentee', // Default role
    })

    const [message, setMessage] = useState('')
    const [messageStatus, setMessageStaus] = useState('')
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/mentees', { // Adjust the URL to your backend endpoint
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(formData),
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const data = await response.json();
            setMessage('User created successfully!')
            setMessageStaus('success')

            // Reset the form or redirect the user
            setFormData({
              name: '',
              email: '',
              password: '',
              role: 'mentee',
            })
        } catch (error) {
            console.error('Error creating user:', error)
            setMessage('Error occurred while processing your request.')
            setMessageStaus('error')
        }
    }


    return (
        <div className="user-form section">
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                />
                <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                />
                <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                />
                <label>
                Role:
                <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="mentee">Mentee</option>
                    <option value="mentor">Mentor</option>
                </select>
                </label>
                <button type="submit" className="button">Create User</button>
            </form>
            {message && ( 
                <div className={`feedback-message ${messageStatus}`}> {/* Status on whether or not user was successfully created */}
                    {message}
                </div>
            )}
        </div>
    )
}

export default UserForm