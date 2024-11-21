- Lazy Loading:
    - It helps to optimize the performance of React application.
    - It means waiting to render/load the content/data on a webpage until the user or browser needs it. 
    - It helps to speed up the loading time of the webpage.

- Code Changes (Within 1 file):
 - In the component where data is massive (Where we need to do lazy loading), we need to import the lazy function from the react library.
 - Then we need to wrap the component with the lazy function.

- Steps:
 - Import the lazy & Suspense function from the react library.
    - import React, { lazy, Suspense } from 'react';

 - Lazy function: 
    - It takes a callback function as an argument.
    - It also takes an import function to pass the path of the component that we want to lazy load.
    - The callback function returns the component that we want to lazy load.
        - const Data = lazy(() => import('./DataWithLazyLoading'));

 - Suspense Component Tag:
    - It is used to wrap the component that we want to lazy load.
    - It has a property called fallback.
    - Fallback Property:
        - It provide an option to show a loading spinner or any other component or a simple message (Please Wait...) while the component is being loaded.
        <Suspense fallback={<div className='fallback-message-style-container'><h1>Please Wait While Data Is Loading...</h1></div>}>
            {/* ***** Lazy Loading: Fallback property: It is to show the message while date is getting loaded ***** */}
            <Data />
        </Suspense>