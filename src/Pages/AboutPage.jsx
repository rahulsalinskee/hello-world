import React from 'react';
import { NavBarPage } from '../Router/ReactRouterNavBar/NavBarPage/NavBarPage';
import { GetDataUsingAxios } from '../Axios/GetData/GetDataUsingAxios';

export function AboutPage() {
    return (
        <>
            <NavBarPage />
            <h3>This is about page for Axios!</h3>
            <GetDataUsingAxios />
        </>
    )
}