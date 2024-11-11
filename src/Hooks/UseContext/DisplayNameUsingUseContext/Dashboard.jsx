import React, { createContext } from 'react';
import { Home } from './Home';

/* ***** 
 * UseContext Hook 
 * Like Context API, For USeContext Hook, there are 3 main things
 * 1. Create Context
 * 2. Provider
 * 3. Use Context Hook
***** */

const FirstNameContext = createContext();
const LastNameContext = createContext();

const firstName = 'Rahul';
const lastName = 'Salinskee';

export function Dashboard() {
    return (
        <>
            <FirstNameContext.Provider value={firstName}>
                <LastNameContext.Provider value={lastName}>
                    <Home />
                </LastNameContext.Provider>
            </FirstNameContext.Provider>
        </>
    )
}

export { FirstNameContext, LastNameContext };