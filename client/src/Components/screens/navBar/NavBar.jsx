import React from 'react';
import {Link} from 'react-router-dom';
import './NavBarStyle.css'

const NavBar = () => {
    return (
        <nav className='navbar d-flex align-items-center mx-5'>
            <div className='left-tags d-flex justify-content-between align-items-center me-auto text-white' >
            <Link to='/' className='Nav-tag text-decoration-none text-white'><h4 className='mb-0 text-center display-linebreak'>Code {"\n"} Bakery</h4></Link>
                <Link to='/catalogue' className='Nav-tag text-decoration-none text-white'>Catalogue</Link>
                <Link to='/cart' className='Nav-tag text-decoration-none text-white'>Cart</Link>
                <Link to='/about-us' className='Nav-tag text-decoration-none text-white'>About us</Link>
            </div>
            <div className='right-buttons d-flex align-items-center'>
                <Link className='login-btn text-decoration-none text-white'> Login </Link>
                <Link className='text-decoration-none'>
                <div className='white-btn d-flex justify-content-center align-items-center'>
                    <span>Sign Up</span>
                </div>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
