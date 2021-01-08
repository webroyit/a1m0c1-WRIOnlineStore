import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

import './Login.css';

function Login() {
    const history = useHistory();       // For changing URL
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        // Login the user
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // Success
                if (auth) {
                    // Redirect to home page
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
    }

    const register = (e) => {
        e.preventDefault();

        // Create an new account with firebase auth
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // It successfully created a new user
                if (auth) {
                    // Redirect to home page
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
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