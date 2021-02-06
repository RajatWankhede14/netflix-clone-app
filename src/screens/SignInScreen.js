import React from 'react';
import './SignInScreen.css';

function SignInScreen() {
    return (
        <div className="signInScreen">
            <form>
            <h1>Sign In</h1>
            <input placeholder="Email Address" type="email"/>
            <input placeholder="Password" type="password"/>
            <button className="signInScreen__button" type="submit">Sign In</button>
            </form>

        </div>
    )
}

export default SignInScreen;
