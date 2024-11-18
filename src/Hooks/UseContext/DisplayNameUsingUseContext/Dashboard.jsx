/* ***** This is Parent Component! ***** */
import React, { createContext } from 'react';
import { Home } from './Home';

/* ***** 
 * UseContext Hook 
 * Like Context API, For UseContext Hook, there are 4 main things
 * For Parent Component
 *      1. Create Context
 *      2. Provider
 *      3. Export the created context.
 * For Child Component
 *      4. Use Context Hook - In Child component we use useContext hook to access the value of the context.
***** */

/* ***** 1. Create Context ***** */
const FirstNameContext = createContext();
const LastNameContext = createContext();

const firstName = 'Rahul';
const lastName = 'Salinskee';

export function Dashboard() {
    return (
        <>
            {/* ***** 2. Provider ***** */}
            <FirstNameContext.Provider value={firstName}>
                <LastNameContext.Provider value={lastName}>
                    <Home />
                </LastNameContext.Provider>
            </FirstNameContext.Provider>
        </>
    )
}

/* ***** 3. Export the created context for First Name and Last Name ***** */
export { FirstNameContext, LastNameContext };