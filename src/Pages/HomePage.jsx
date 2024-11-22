import React from 'react';
import { NavBarPage } from '../Router/ReactRouterNavBar/NavBarPage/NavBarPage';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
    const navigateTo = useNavigate();
    const contactPagePath = '/contact';
    const productPagePath = '/product';
    const hooksPagePath = '/use-reducer-hook';

    function LoadContactPageButtonClickHandler(event) {
        event.preventDefault();
        navigateTo(contactPagePath);
    }

    function LoadProductPageButtonClickHandler(event) {
        navigateTo(productPagePath);
    }

    function LoadHooksPageButtonClickHandler(event) {
        navigateTo(hooksPagePath);
    }

    function BackButtonOnClickEventHandler(event) {
        navigateTo(-1);
    }

    return (
        <>
            <NavBarPage />
            <h3>This is Home Page!</h3>

            <div>
                <button onClick={LoadContactPageButtonClickHandler}>Contact Page</button>
                <button onClick={LoadProductPageButtonClickHandler}>Product Page</button>
                <button onClick={LoadHooksPageButtonClickHandler}>Hooks Page</button>
                <button onClick={BackButtonOnClickEventHandler}>Back</button>
            </div>

        </>
    )
}