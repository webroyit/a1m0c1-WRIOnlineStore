import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
    }

    const register = (e) => {
        e.preventDefault();
    }

    return(
        <div className='login'>
            <Link to='/'>
                <img className="login__logo" src="/images/logo.png" alt="Logo" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button className="login__signInButton" type="submit" onClick={signIn}>
                        Sign In
                    </button>
                </form>

                <p>By signing-in you agree to WRI Online Store's Conditions of Use & Sale.</p>

                <button className="login__registerButton" onClick={register}>
                    Create your account
                </button>
            </div>
        </div>
    )
}

export default Login;