import React from 'react';

const saveUser = (user)=>{
    let Users = JSON.parse(localStorage.getItem('Users'));
    Users.push(user);
    localStorage.setItem('Users',JSON.stringify(Users));
    alert('Sign Up successfull, you can log in now!')
}

const getFormData = (e)=>{
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#pwd').value;
    const user = {
        uername: username,
        email: email,
        password: password
    };
    saveUser(user);
}

const SignupForm = () => {
    return (
        <div className="form-container">
            <h3>Sign Up</h3>
            <form className="home-form" onSubmit={(e)=>getFormData(e)}>
                <div className="input-container">
                    <i className="fa fa-user icon"></i>
                    <input type="text" name="username" placeholder="Username" id="username"/>
                </div>
                <div className="input-container">
                    <i className="fa fa-envelope icon"></i>
                    <input type="email" name="email" placeholder="Enter email address" id="email"/>
                </div>
                <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input type="password" name="password" placeholder="Password" id="pwd"/>
                </div>
                <div className="form-footer">
                    <div className="form-checkbox" id="full-width-checkbox">
                        <input type="checkbox" name="checkbox" id=""/>
                        <label htmlFor="checkbox">I accept the terms & conditions</label>
                    </div>
                </div>
                <div className="input-container">
                    <button type="submit" className="form-btn">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignupForm
