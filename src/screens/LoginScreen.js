import React, { useState } from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen'

function LoginScreen() {

    const [signIn, setSignIn] = useState(false)

    const signInChange = event => {
        setSignIn(true);
    }
    return (

        
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img className="loginScreen__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="login_logo"/>
                <button className="loginScreen__button" onClick={signInChange}>Sign In</button>
            </div>

            <div className="loginScreen__gradient" />

            <div className="loginScreen__body">
                {signIn ? (
                    <SignInScreen />
                ) : (
                    <>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <div className="loginScreen__input">
                        <form>
                            <input type="email" placeholder="Email Address" />
                            <button className="loginScreen__getStarted" onClick={signInChange}>GET STARTED </button>
                        </form>
                     </div>
                </>
                )
            }

            </div>



        </div>
    )
}

export default LoginScreen
