import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <nav className='navbar'>
            <NavLink
                to='/'
                style={({ isActive }) => {
                    return { color: isActive ? 'red' : 'grey' };
                }}
            >
                Home
            </NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                About
            </NavLink>
            <NavLink to='/products'>Products</NavLink>
        </nav>
    );
}

export default Navbar;
