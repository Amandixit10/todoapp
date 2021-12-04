import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import '../styles/Homepage.css';
const Homepage = () => {

    const [showForm, setShowForm] = useState(true);
    return (
        <>
            <div className="homepage-wrapper">
                <div id="form-toggle" >
                    <button onClick={() => setShowForm(true)}>Log In</button>
                    <button onClick={() => setShowForm(false)}>Sign Up</button>
                </div>
                <div id="form">
                    {showForm ? <LoginForm /> : <SignupForm />}
                </div>
            </div>
        </>
    )
}

export default Homepage
