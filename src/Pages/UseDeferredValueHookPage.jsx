import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

export default function UseDeferredValueHookPage() {
    const navigateTo = useNavigate();
    const homePagePath = '../home';

    function NavigateToHomeButtonClickHandler(event) {
        event.preventDefault();
        navigateTo(homePagePath);
    }
    return (
        <>
            <h3>Use Deferred Value Hook Page</h3>
            <button style={{ marginTop: '2rem' }} onClick={NavigateToHomeButtonClickHandler}>Home</button>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
                <NavLink to='similar-problem-like-use-transition-without-using-use-deferred-value-hook-application'>Without using Use Deferred Value Application</NavLink>
                <NavLink to='similar-problem-solution-like-use-transition-using-use-deferred-value-hook-application'>Using Use Deferred Value Application</NavLink>
                <NavLink to='counter-application-using-use-deferred-value-hook'>Counter Application Using Use Deferred Value Hook</NavLink>
            </div>
            <Outlet />
        </>
    )
}
