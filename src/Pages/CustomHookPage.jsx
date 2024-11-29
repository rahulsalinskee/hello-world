import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export default function CustomHookPage() {
    const navigateTo = useNavigate();
    const homePagePath = '/home';

    function LoadHomePageButtonOnClickEventHandler(event) {
        event.preventDefault();
        navigateTo(homePagePath);

    }
    return (
        <>
            <h2>Custom Hook Page</h2>
            <button onClick={LoadHomePageButtonOnClickEventHandler}>Home</button>
            <div style={{ backgroundColor: 'yellow', height: '2rem', width: '50rem', gap: '1rem', justifyContent: 'left', marginTop: '1rem', padding: '1rem' }}>
                <NavLink to='custom-hook-application'>Custom Hook Application</NavLink>
            </div>
            <Outlet />
        </>
    )
}
