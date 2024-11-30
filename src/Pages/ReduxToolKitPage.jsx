import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export default function ReduxToolKitPage() {
    const navigateTo = useNavigate();
    const homePagePath = '/home';

    function HomeButtonOnClickEventHandler(event) {
        event.preventDefault();
        navigateTo(homePagePath);
    }
    return (
        <>
            <div>
                <h3>Redux Tool Kit Page!</h3>
                <br />
                <button onClick={HomeButtonOnClickEventHandler}>Home</button>
                <NavLink to='redux-tool-kit-todo-app'>Redux ToolKit Todo App</NavLink>
            </div>
            <Outlet />
        </>
    )
}
