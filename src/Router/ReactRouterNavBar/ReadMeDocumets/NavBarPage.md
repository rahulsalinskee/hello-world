1. Create a new component called NavBar.js

2. Use HTML nav tag to create a navigation bar.

3. Inside that use Link tag from React-Router-DOM to create a link to all the pages.

Example code:
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