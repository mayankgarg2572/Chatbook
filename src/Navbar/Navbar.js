import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };
    return(
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/Dashboard/Dashboard">
                    <li>Dashboard</li>
                </Link>
                <Link style={navStyle} to="/Signin/Signin">
                    <li>Sign in</li>
                </Link>
                <Link style={navStyle} to="/Signup/Signup">
                    <li>Sign up</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav; 