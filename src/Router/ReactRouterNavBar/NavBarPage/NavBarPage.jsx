import React from 'react';
import '../../../CSS/NavBarPage.css';

/* ***** This import statement for Link is for NavBar ***** */
import { Link } from 'react-router-dom';

/* ***** 
 * We will use NavLink tag instead of Link tag in order to track current or active page 
 * How it tracks the current or active page: It has a property called "activeClassName" which is used to 
 * Highlight the current or active page. This property has a value called 'active' which is being set for className and it can be seen
 * in inspect element. This feature is not available in Link tag and that is main difference between Link tag and NavLink tag.
 * Whatever the page we or user is on, this className value will be set as 'active' and that is how we 
 * track and highlight the current or active page or its link in navBar.
 * For that tracking, we need to add a class "active" to CSS file.
***** */
import { NavLink } from 'react-router-dom';

export function NavBarPage() {
    return (
        <>
            {/* /* ***** This entire nav tag including NavLink tag is for NavBar ***** */}
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}