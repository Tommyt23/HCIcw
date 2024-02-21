// import react functions
import React, { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom';

// import stylesheet
import './index.scss';

// import assets
import Logo from '../../assets/images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import Modal from "../Modal/modal";
import Email from "../Email";

const Sidebar = () => {
    const [buttonText, setButtonText] = useState('');
    const [iconSize, setIconSize] = useState('');
    const [visible, setvisible] = useState(false)
    //const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        function handleResize() {
            const buttonElement = document.getElementById('login-btn');
            if (buttonElement.offsetWidth > 100) {
                setButtonText(' Login');
            } else {
                setButtonText('');
            }
            if (buttonElement.offsetHeight > 40){
                setIconSize('3vh');
                setButtonText(' Login');
            } else {
                setIconSize('20px');
                setButtonText('');
            }
        }

        // Attach event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize initially
        handleResize();

        // no Cleanup function to allow for function to be called whenever in use
    }, []); // Empty dependency array ensures the effect runs only once on mount


    function handlelogin(){
            setButtonText("Logged in");
            setvisible(false);
    }



    return (
        <div className='nav-bar'>
            <Link className='Logo' to='/'>
                <img src={Logo} alt="logo" />
            </Link>
            <nav>
                <NavLink id='email-btn' to={Email}>
                    <FontAwesomeIcon icon={faEnvelopeOpen} color='#ddd' style={{fontSize: iconSize}} />
                </NavLink>
            </nav>
                <button id='login-btn' onClick={() => setvisible(true)} >
                    <FontAwesomeIcon icon={faUser} color='#ddd' style={{ fontSize: iconSize }} />
                    {buttonText}
                </button>
                <Modal open={visible} onClose={() => setvisible(false)} onLoggedIn={handlelogin}/>
        </div>
        );
}

export default Sidebar;
