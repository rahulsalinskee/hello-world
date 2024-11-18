/* ***** This is Inner Child Component! ***** */
import React, { useContext } from 'react';
import { FirstNameContext, LastNameContext } from './Dashboard';


export function Footer() {
    /* ***** 4. Use Context Hook - In Child component we use useContext hook to access the value of the context. ***** */
    const firstName = useContext(FirstNameContext);
    const lastName = useContext(LastNameContext);
    return (
        <>
            <h3>Using UseContext Hook - </h3>
            <h1>First Name is: {firstName}</h1>
            <h1>Last Name is: {lastName}</h1>
        </>
    )
}