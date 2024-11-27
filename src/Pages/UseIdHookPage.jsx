import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export default function UseIdHookPage() {
    const navigateTo = useNavigate();
    const homePagePath = '/home';

    function LoadHomePageOnButtonClick(event) {
        event.preventDefault();
        navigateTo(homePagePath);
    }

    return (
        <>
            <button onClick={LoadHomePageOnButtonClick}>Home</button>
            <div style={{ backgroundColor: 'lightgoldenrodyellow', margin: '2rem', padding: '3rem', border: '1px solid gray', width: '25rem' }}>
                <h3>Use Id Hook Page</h3>
                <NavLink to='use-id-hook-application'>Use Id Hook Application</NavLink>
            </div>
            <Outlet />
        </>
    )
}
