import React from 'react';
import { NavBarPage } from '../Router/ReactRouterNavBar/NavBarPage/NavBarPage';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
    const navigateTo = useNavigate();
    const contactPagePath = '/contact';

    function LoadContactPageButtonClickHandler(event) {
        // event.preventDefault();
        navigateTo(contactPagePath);
    }
    return (
        <>
            <NavBarPage />
            <h3>This is Home Page!</h3>

            <button onClick={LoadContactPageButtonClickHandler}>Contact Page</button>
        </>
    )
}