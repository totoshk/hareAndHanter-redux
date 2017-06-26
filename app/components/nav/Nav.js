import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav () {
    return (
        <nav className='main-nav'>
            <NavLink to='/' exact className='main-nav__item' activeClassName = 'active'>Hunters Creator</NavLink>
            <NavLink to='/hunters' className='main-nav__item' activeClassName = 'active'>List of Hunters</NavLink>
            <NavLink to='/hare-page' className='main-nav__item' activeClassName = 'active'>Look at Hare</NavLink>
        </nav>
    )
};

export default Nav;