import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaReddit } from 'react-icons/fa'; // To get the Reddit logo
import './Header.css';

const Header = () => {
    return (
        <header>
            <>
                <div id="reddit_logo">
                    <FaReddit className="logo-icon" />
                </div>

                <div className="login_register_buttons">
                    <button id="login_button">Login</button>
                    <button id="register_button">Register</button>
                </div>
            </>
        </header>
    );
};

export default Header;
