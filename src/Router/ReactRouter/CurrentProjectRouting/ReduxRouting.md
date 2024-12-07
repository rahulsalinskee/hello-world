- In this file, we are documenting about Routing in Redux using React Router (To launch Todo Application using Redux Tool Kit).

- There are in total 2 URLs (path) are used to navigate.
    A. 'redux-tool-kit-page': Lets name is as P1
    B. 'redux-tool-kit-product-dashboard': Lets name it as P2 

- Where these P1 and P2 paths are being used:
    - P1: 
        - 'redux-tool-kit-page'
            - This is used in these files:
                - HomePage.jsx
                - ApplicationRouter.jsx (Outer Route R1)

    - P2:
        - 'redux-tool-kit-product-dashboard'
            - This is used in these files:
                - ApplicationRouter.jsx
                - ReduxToolKitPage.jsx (Inner Route R2)

- Current navigational Functionality for Redux Tool Kit Todo Application:
    - Home Page => 
        Home Page contains Button - 'Redux Tool Kit Page' => 
            Click on 'Redux Tool Kit Page' Button => 
                'Redux Tool Kit Page' is loaded with URL: (Path P1) => 
                    There is hyperlink (NavLink) for 'Redux Tool Kit Product Dashboard' (For Path P2) on 'Redux Tool Kit Page' (On Path P1) => 
                        Click on the hyperlink (NavLink) on 'Redux Tool Kit Page' to navigate on Product Dashboard using Redux Tool Kit =>
                            Now user is on Redux Tool Kit Product Dashboard (Path P2)

    - URL Format: http://localhost:3000/redux-tool-kit-page/redux-tool-kit-product-dashboard
        - http://localhost:3000/P1/P2

- How many files need to be changed for adding route (1 level inner route): 3 files
    1. File Name: HomePage.jsx
        - This file holds a button called 'Redux Tool Kit Page'.
        - Functionality of this button is to redirect the user to P1 path from home page.
            - The onClick event handler of this button contains 'navigateTo' function (It uses UseNavigate hook), which takes P1 path as an input and redirects the user to Redux tool kit page (To P1 path).
        
            const reduxToolKitPage = '/redux-tool-kit-page';    //P1

            function ReduxToolKitButtonClickHandler(event) {
                event.preventDefault();
                navigateTo(reduxToolKitPage);
            }

    2. File Name: ApplicationRouter.jsx
        - This file contains all the Routing mechanism using React router for the application.
        - This file contains tag for 
            * Router => 
                Routes => 
                    Route (Lets say R1 - Outer Route) => 
                        Route (Lets say R2 - Inner Route in order to show nested routing)

        - Each Route tag has path and element properties
        - For Route R1 (For Outer Route): 
            - The path has to be set as P1, enclosed by '/' (without quote) from both the ends. 
            - The element has to be set as ReduxToolKitPage enclosed by tag.
        - For Route R2 (For Inner Route):
            - The path has to be set as P2.
            - The element has to be set as ReduxToolKitTodoApp enclosed by tag.

            <Route path='/redux-tool-kit-page/' element={<ReduxToolKitPage />}>                         path='P1': 
               <Route path='redux-tool-kit-product-dashboard' element={<ReduxToolKitTodoApp />} />      path='P2':
            </Route>

    3. File Name: ReduxToolKitPage.jsx (Component which gets loaded on Path P1)
        - In this component, there is a hyper link (NavLink) to load Redux Tool Kit Todo App (Path P2).
        - There is a tag (NavLink) which needs to be imported from 'react-router-dom';
        - NavLink tag contains a property 'to' and it should be initialized with value P2.
        - There is an Outlet tag which needs to be used here after NavLink in order to render the navigation (hyper link/NavLink).

            <>
                <div>
                    <h3>Redux Tool Kit Page!</h3>
                    <br />
                    <button onClick={HomeButtonOnClickEventHandler}>Home</button>
                </div>
                <NavLink to='redux-tool-kit-product-dashboard'>Redux ToolKit Product Dashboard</NavLink>  to='P2':
                <Outlet />
            </>
