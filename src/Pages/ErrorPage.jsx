import React from 'react';
import { useNavigate } from 'react-router-dom';

export function ErrorPage() {
    const navigateTo = useNavigate();
    const homePagePath = './home';

    function HomeButtonOnClickEventHandler(event) {
        event.preventDefault();
        navigateTo(homePagePath);
    }

    return (
        <>
            <h3>Sorry! Page Not Found! : 404 Error</h3>
            <button onClick={HomeButtonOnClickEventHandler}>Home</button>
        </>
    )
}