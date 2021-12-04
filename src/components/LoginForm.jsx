import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';

const LoginForm = () => {
    const [auth,setAuth] = useState(false);
    const findUser = (email, password) => {
        const Users = JSON.parse(localStorage.getItem('Users'));

        let success = false;
        Users.forEach((user) => {
            if (user.email === email && user.password === password) {
                success = true;
            }
        });
        return success;
    }

    const getUser = (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#pwd').value;
        if (findUser(email, password)) {
            setAuth(true);
            localStorage.setItem('CurrentUser',email);
        }else{
            alert('Check input again or sign up...');
            setAuth(false);
        }
    }
    if(auth){
        return <Redirect to='/board' />
    }else{
    return (
        <div className="form-container">
            <h3>Log in</h3>
            <form className="home-form">
                <div className="input-container">
                    <i className="fa fa-envelope icon"></i>
                    <input type="email" name="email" placeholder="Email Address" id='email'/>
                </div>
                <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input type="password" name="password" placeholder="Password" id='pwd' />
                </div>
                <div className="form-footer">
                    <div className="form-checkbox">
                        <input type="checkbox" name="checkbox" id=""/>
                        <label htmlFor="checkbox">Remember me</label>
                    </div>
                    <a href="#">Forgot Password ?</a>
                </div>
                <div className="input-container">
                        <button  
                        type="submit" 
                        className="form-btn"
                        onClick = {getUser}
                        >Log In</button>
                </div>
            </form>
        </div>
    );
    }
}

export default LoginForm
