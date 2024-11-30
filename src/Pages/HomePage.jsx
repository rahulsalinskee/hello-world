import React from 'react';
import { NavBarPage } from '../Router/ReactRouterNavBar/NavBarPage/NavBarPage';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
    const navigateTo = useNavigate();
    const contactPagePath = '/contact';
    const productPagePath = '/product';
    const hooksPagePath = '/use-reducer-hook';
    const useSyncExternalStoreHooksPagePath = '/use-sync-external-store-hook-page';
    const useTransitionHookPagePath = '/use-transition-hook-page';
    const useDeferredValueHookPagePath = '/use-deferred-value-hook-page';
    const useIdHookPagePath = '/use-id-hook-application-page';
    const customHookPagePath = '/custom-hook-page';
    const reduxToolKitPage = '/redux-tool-kit-page';

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

    function LoadUseSyncExternalStoreHooksPageButtonClickHandler(event) {
        navigateTo(useSyncExternalStoreHooksPagePath);
    }

    function LoadUseTransitionHooksPageButtonClickHandler(event) {
        event.preventDefault();
        navigateTo(useTransitionHookPagePath);
    }

    function LoadUseDeferredValueHooksPageButtonClickHandler(event) {
        event.preventDefault();
        navigateTo(useDeferredValueHookPagePath);
    }

    function UseIdHookPageButtonClickHandler(event) {
        event.preventDefault();
        navigateTo(useIdHookPagePath);
    }

    function CustomHookButtonClickHandler(event) {
        event.preventDefault();
        navigateTo(customHookPagePath);
    }

    function ReduxToolKitButtonClickHandler(event) {
        event.preventDefault();
        navigateTo(reduxToolKitPage);
    }

    return (
        <>
            <NavBarPage />
            <h3>This is Home Page!</h3>

            <div style={{ textAlignment: 'center', backgroundColor: 'lightgreen', display: 'flex', flexDirection: 'row', gap: '1rem', height: '10rem', width: 'auto', padding: '1.5rem', }}>
                <button onClick={BackButtonOnClickEventHandler} style={{ color: 'green', backgroundColor: 'transparent', border: '1px solid black' }}>Back</button>
                <button onClick={LoadContactPageButtonClickHandler} style={{ color: 'green', backgroundColor: 'transparent', border: '1px solid black' }}>Contact Page</button>
                <button onClick={LoadProductPageButtonClickHandler} style={{ color: 'green', backgroundColor: 'transparent', border: '1px solid black' }}>Product Page</button>
                <button style={{ width: '200px', color: 'green', backgroundColor: 'transparent', border: '1px solid black' }} onClick={LoadHooksPageButtonClickHandler}>Reducer Hooks Page</button>
                <button style={{ width: '350px', color: 'green', backgroundColor: 'transparent', border: '1px solid black' }} onClick={LoadUseSyncExternalStoreHooksPageButtonClickHandler}>Use Sync External Store Hooks Page</button>
                <button style={{ width: '250px', color: 'green', backgroundColor: 'transparent', border: '1px solid black' }} onClick={LoadUseTransitionHooksPageButtonClickHandler}>Use Transition Hook Page</button>
                <button style={{ width: '300px', color: 'green', backgroundColor: 'transparent', border: '1px solid black' }} onClick={LoadUseDeferredValueHooksPageButtonClickHandler}>Use Deferred Value Hook Page</button>
                <button style={{ width: '170px', color: 'green', backgroundColor: 'transparent', border: '1px solid black' }} onClick={UseIdHookPageButtonClickHandler}>Use Id Hook Page</button>
                <button style={{ width: '170px', color: 'green', backgroundColor: 'transparent', border: '1px solid black' }} onClick={CustomHookButtonClickHandler}>Custom Hook Page</button>
                <button style={{ width: '170px', color: 'green', backgroundColor: 'transparent', border: '1px solid black' }} onClick={ReduxToolKitButtonClickHandler}>Redux Tool Kit Page</button>
            </div>
        </>
    )
}