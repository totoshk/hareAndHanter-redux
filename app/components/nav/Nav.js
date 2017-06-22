import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav () {
    return (
        <nav className='main-nav'>
            <NavLink to='/' exact className='main-nav__item' activeClassName = 'active'>Form page</NavLink>
            <NavLink to='/main' className='main-nav__item' activeClassName = 'active'>Hare page</NavLink>
        </nav>
    )
};

export default Nav;