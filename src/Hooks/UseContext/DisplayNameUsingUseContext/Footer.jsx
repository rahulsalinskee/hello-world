import React, { useContext } from 'react';
import { FirstNameContext, LastNameContext } from './Dashboard';


export function Footer() {
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