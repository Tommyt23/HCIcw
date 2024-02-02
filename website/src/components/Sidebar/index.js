// import react functions
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//import external functions
//import Login from './Login';

// import stylesheet
import './index.scss';

// import assets
import Logo from '../../assets/images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
    const [buttonText, setButtonText] = useState('');
    const [iconSize, setIconSize] = useState('');
//    const [loggedIn, setLoggedIn] = useState(false)

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

    return (
        <div className='nav-bar'>
            <Link className='Logo' to='/'>
                <img src={Logo} alt="logo" />
            </Link>
            <nav>
                <button id='login-btn'>
                    <FontAwesomeIcon icon={faUser} color='#ddd' style={{ fontSize: iconSize }} />
                    {buttonText}
                </button>
            </nav>
        </div>
        );
}

export default Sidebar;
