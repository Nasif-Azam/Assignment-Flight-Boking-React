import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbarStyle'>
            <ul className='ulStyle'>
                <li className='liStyle button'>
                <a className='linkStyle' href="#">Dashboard</a>
                </li>
                <li className='liStyle button'>
                    <a className='linkStyle' href="#">Master Price</a>
                </li>
                <li className='liStyle button'>
                    <a className='linkStyle' href="#">Custom Price</a>
                </li>
                <li className='liStyle button'>
                    <a className='linkStyle' href="#">Calender</a>
                </li>
                <li className='liStyle button'>
                    <a className='linkStyle' href="#">Reports</a>
                </li>
            </ul >
        </nav >
    );
}

export default Navbar;
