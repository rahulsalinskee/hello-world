import React from 'react';
/* ***** UseLocation Hook: 1. Adding Use Location Hook */
import { useParams, useLocation } from 'react-router-dom';
import { NavBarPage } from '../Router/ReactRouterNavBar/NavBarPage/NavBarPage';

export function DashboardPage() {
    /* ***** UseLocation Hook: 2. Use Location Hook to get the current location ***** */
    const location = useLocation();
    /* ***** 
     * Use Params - 2. The variable name(s) should be same as the variable name(s) in the route (ApplicationRouter JSX) 
     * Here, firstName & lastName come as an object.
     * Hence, we need to access the value of the object using { }.
    ***** */
    const { firstName, lastName } = useParams();

    return (
        <>
            <NavBarPage />
            <h1>This is Dashboard Page!</h1>
            <h2>Welcome {firstName} {lastName}!</h2>
            {/* UseLocation Hook: 3. Show the current location path with help of pathname property */}
            <h3>Current Page Location: {location.pathname}</h3>
            { /* UseLocation Hook: 4. Show a button on a condition based on location pathname. Here, we are checking if the pathname is '/dashboard/rahul/salinskee' then only we are showing the button. */}
            <p>{location.pathname === '/dashboard/rahul/salinskee' ? <button>Get URL</button> : null}</p>
        </>
    )
}