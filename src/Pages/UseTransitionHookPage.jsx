import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function UseTransitionHookPage() {
    const navigateTo = useNavigate();
    const homePagePath = '../home';

    function HomePageLoadButton(event) {
        event.preventDefault();
        navigateTo(homePagePath);
    }

    return (
        <>
            <div>
                <div>Use Transition Hook Page</div>
                <button style={{ marginTop: '2rem' }} onClick={HomePageLoadButton}>Home Page</button>
                <div style={{ marginBottom: '2rem', backgroundColor: 'lightyellow', display: 'flex', marginTop: '2rem', flexDirection: 'row', gap: '2rem' }}>
                    <NavLink to='count-application-without-is-pending'>Count Application Without Is Pending</NavLink>
                    <NavLink to='performance-problem-in-search-functionality'>Performance problem for search functionality</NavLink>
                    <NavLink to='solution-for-performance-in-search-functionality'>Performance solution for search functionality</NavLink>
                </div>
            </div>
            <Outlet />
        </>
    )
}
