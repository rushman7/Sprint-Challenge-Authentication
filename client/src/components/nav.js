import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => { // basic nav page that links the three routes from the /api homepage
    return (
        <div className='nav-container'>
            <Link to='/api/jokes'> Jokes </Link>
            <Link to='/api/signin'> Sign In </Link>
            <Link to='/api/signup'> Sign Up </Link>
        </div>
    );
}

export default Nav;