import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav-container'>
            <Link to='/api/jokes'> Jokes </Link>
            <Link to='/api/signin'> Sign In </Link>
            <Link to='/api/signup'> Sign Up </Link>
        </div>
    );
}

export default Nav;