import React from 'react';
import '../../../CSS/NavBarPage.css';

/* ***** This import statement for Link is for NavBar ***** */
import { Link } from 'react-router-dom';

export function NavBarPage() {
    return (
        <>
            {/* /* ***** This entire nav tag including Link tag is for NavBar ***** */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}