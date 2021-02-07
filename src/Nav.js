import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';


function Nav() {

    const [show, handleShow] = useState(false);

    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []) 

    


    return (
        <div className={`nav ${show === true && "nav__black"}`}>

            <div className="nav__contents">
                <img onClick={() => history.push("/")} className="nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix-logo"/>

                <img onClick={() => history.push('/profile')} className="nav__avatar" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="netflix-avatar"/>

            </div>
            
            
        </div>
    )
};


export default Nav
