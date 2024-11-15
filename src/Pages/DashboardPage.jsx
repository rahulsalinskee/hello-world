import React from 'react';
import { useParams } from 'react-router-dom';
import { NavBarPage } from '../Router/ReactRouterNavBar/NavBarPage/NavBarPage';

export function DashboardPage() {
    /* ***** 
     * Use Params - 2. The variable name(s) should be same as the variable name(s) in the route (App JS) 
     * Here, firstName & lastName come as an object.
     * Hence, we need to access the value of the object using { }.
    ***** */
    const { firstName, lastName } = useParams();

    return (
        <>
            <NavBarPage />
            <h1>This is Dashboard Page!</h1>
            <h2>Welcome {firstName} {lastName}!</h2>
        </>
    )
}