import React, { createContext } from 'react';
import { Home } from './Home';

const firstName = 'Rahul';
const lastName = 'Salinskee';
const firstNameContext = createContext();
const lastNameContext = createContext();

export function Dashboard() {
    return (
        <>
            <firstNameContext.Provider value={firstName}>
                <lastNameContext.Provider value={lastName}>
                    <Home />
                </lastNameContext.Provider>
            </firstNameContext.Provider>
        </>
    )
}

export { firstNameContext, lastNameContext };