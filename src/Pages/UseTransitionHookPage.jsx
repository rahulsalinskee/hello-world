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
                    <NavLink to='performance-problem-in-filter-functionality'>Performance problem for filter functionality</NavLink>
                    <NavLink to='solution-for-performance-in-filter-functionality'>Performance solution for filter functionality</NavLink>
                </div>
            </div>
            <Outlet />
        </>
    )
}
