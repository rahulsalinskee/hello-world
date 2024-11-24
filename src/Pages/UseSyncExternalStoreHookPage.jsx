import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export default function UseSyncExternalStoreHookPage() {
    const navigateTo = useNavigate();
    const homePagePath = '/home';

    function HomePageButtonClickEventHandler(event) {
        event.preventDefault();
        navigateTo(homePagePath);
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', height: '100vh' }}>
                <button onClick={HomePageButtonClickEventHandler}>Home</button>
                <div>Use Sync External Store Hook Page</div>
                <div style={{ display: 'flex', flexDirection: 'row', background: 'skyblue', gap: '20px' }}>
                    <NavLink to='use-sync-external-store-application'>Use Sync External Store Application</NavLink>
                    <NavLink to='counter-application-using-use-sync-external-store-hook'>Counter Application</NavLink>
                </div>
                <Outlet />
            </div>
        </>
    )
}
