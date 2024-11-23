import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { CounterAppWithUseState } from '../Hooks/UseReducer/CounterAppWithUseState/CounterAppWithUseState'

export function ReducerHooksPage() {
    const navigateTo = useNavigate();
    const homePagePath = '../home';

    function HomeButtonOnClickEventHandler(event) {
        event.preventDefault();
        navigateTo(homePagePath);
    }
    return (
        <>
            <div>Reducer Hooks Page</div>
            <button onClick={HomeButtonOnClickEventHandler}>Home Page</button>
            <div className='nested-route-container'>
                <NavLink to='without-use-reducer'>Counter App With UseState</NavLink>
                <NavLink to='with-use-reducer'>Counter App With UseReducer</NavLink>
                <NavLink to='use-layout-effect-hook'>Use Layout Effect Hook</NavLink>
            </div>
            <Outlet />
        </>
    )
}