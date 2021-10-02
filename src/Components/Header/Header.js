import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink activeStyle={{
            fontWeight:"bold",
            color:"red"
        }} 
        to="/about">About</NavLink>
        <NavLink to="/friends">Friends</NavLink>
        <NavLink to="about/culture">Culture</NavLink>
        </nav>
    );
};

export default Header;