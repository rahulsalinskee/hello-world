import React, { createContext } from 'react';
import { B } from './B';

/* ***** SOLUTION: As a part of the solution for Prop Drilling, we have 3 ways to solve this problem. 
 * 1 way - Use of Context API - Create Context | Provider | Consumer 
 * 2 Way - Use of Use Context Hook instead of Consumer (Of Context APi. - Create Context & Provider will remain same)
 * 3 Way - Use of external library - Redux
 * This approach is using context API
 * Context API - There are 3 important things in context API 
 * A. Create Context
 * B. Provider (a. Use Name Tag for the context we created in step 1 and write the tag in Return statement b. export this name tag)
 * C. Consumer (Here, consumer will also have complex code for which consumer eventually will be replaced by UseContext hook)
***** */

/* *****
 * 1. Create Context
 ***** */
const nameContext = createContext();
const name = "Rahul";

export function A() {
    return (
        <>
            {/* ***** 2a. Provider = Write the variable we created in step 1, as tag, connecting to a property provider and then we need to export it ***** */}
            <nameContext.Provider value={name}>
                <B />
            </nameContext.Provider>
        </>
    );
}

/* ***** 2b ***** */
export { nameContext };