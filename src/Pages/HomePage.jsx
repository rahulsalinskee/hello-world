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
    const useIdHookPage = '/use-id-hook-application-page';

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
        navigateTo(useIdHookPage);
    }

    return (
        <>
            <NavBarPage />
            <h3>This is Home Page!</h3>

            <div>
                <button onClick={BackButtonOnClickEventHandler}>Back</button>
                <button onClick={LoadContactPageButtonClickHandler}>Contact Page</button>
                <button onClick={LoadProductPageButtonClickHandler}>Product Page</button>
                <button style={{ width: '200px' }} onClick={LoadHooksPageButtonClickHandler}>Reducer Hooks Page</button>
                <button style={{ width: '350px' }} onClick={LoadUseSyncExternalStoreHooksPageButtonClickHandler}>Use Sync External Store Hooks Page</button>
                <button style={{ width: '250px' }} onClick={LoadUseTransitionHooksPageButtonClickHandler}>Use Transition Hook Page</button>
                <button style={{ width: '300px' }} onClick={LoadUseDeferredValueHooksPageButtonClickHandler}>Use Deferred Value Hook Page</button>
                <button style={{ width: '170px' }} onClick={UseIdHookPageButtonClickHandler}>Use Id Hook Page</button>
            </div>
        </>
    )
}