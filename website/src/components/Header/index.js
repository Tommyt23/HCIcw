import React from 'react';
import Sidebar from '../Sidebar';
import './index.scss';

const Header = ({ title }) => {
    return (
        <header className="header-container">
            <Sidebar />
            <h1>{title}</h1>
        </header>
    );
}

export default Header;