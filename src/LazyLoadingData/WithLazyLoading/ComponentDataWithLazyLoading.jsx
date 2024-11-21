/* ***** Lazy Loading: 1. Import lazy & Suspense function ***** */
import React, { lazy, Suspense } from 'react';
import DataWithLazyLoading from './DataWithLazyLoading';
import '../../CSS/ComponentWithLazyLoading.css';

/* ***** 
 * Lazy Loading: 2. lazy function takes a callback function as an argument which returns the component to be lazy 
 *loaded with help of import().
 * We need to store the return value of lazy function in a variable.
 ***** */
const Data = lazy(() => import('./DataWithLazyLoading'));

export default function ComponentDataWithLazyLoading() {
    return (
        <>
            <h3>Component Data</h3>

            {/* ***** Lazy Loading: 3. Wrap the component with Suspense component to handle errors with help of fallback property. ***** */}
            <Suspense fallback={<div className='fallback-message-style-container'><h1>Please Wait While Data Is Loading...</h1></div>}>
                {/* ***** Lazy Loading: Fallback property: It is to show the message while date is getting loaded ***** */}
                <Data />
            </Suspense>
        </>
    )
}