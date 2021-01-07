import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

function Login() {
    return(
        <div className='login'>
            <Link to='/'>
                <img className="login__logo" src="/images/logo.png" alt="Logo" />
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className="login__signInButton">Sign In</button>
                </form>

                <p>By signing-in you agree to WRI Online Store's Conditions of Use & Sale.</p>

                <button className="login__registerButton">
                    Create your account
                </button>
            </div>
        </div>
    )
}

export default Login;