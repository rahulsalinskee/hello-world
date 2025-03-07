- UseRoutes Hook in React Router
    - React Router is a library that is used for handling navigation and routing in React applications
    - It provides a way to navigate between 
        - Different components or pages while maintaining a single-page application (SPA) structure
    - One of the key features is the useRoutes hook.
    - It allows us to define routes in a declarative manner.

- What is useRoutes Hook?
    - useRoutes hook is a part of the React Router library introduced in React Router v6 
    - It is used to define and configure routes in a React application
    - It provides a flexible approach to defining routing configurations programmatically
    - It is a functional equivalent of <Routes>
    - We can define a route configuration JavaScript object that maps specific paths to React components

- Syntax:
    Example 1:
        Reference URL: https://www.geeksforgeeks.org/useroutes-hook-in-react-router/

        import { useRoutes } from 'react-router-dom';

        const routeConfig = [
            { 
                path: '/', 
                element: <Home />,
            },
            { 
                path: '/about', 
                element: <About />, 
            },
            // Add more route configurations as needed
        ];

        const App = () => {
            const routeResult = useRoutes(routeConfig);
            return routeResult;
        };

    Example 2:
        Reference URL: https://api.reactrouter.com/v7/functions/react_router.useRoutes.html

        import * as React from "react";
        import { useRoutes } from "react-router";

        function App() {
            let element = useRoutes(
            [
                {
                    path: "/",
                    element: <Dashboard />,
                    children: 
                    [
                        {
                            path: "messages",
                            element: <DashboardMessages />,
                        },
                        { 
                            path: "tasks", 
                            element: <DashboardTasks /> 
                        },
                    ],
                },
                { 
                    path: "team", 
                    element: <AboutPage /> 
                },
            ]);
            return element;
        }

    - Explanation:
        - This code snippet is using the `useRoutes` hook from the `react-router` library to define the routing configuration for a React application.
        - The `useRoutes` hook takes an array of route configurations as an argument. 
        - Each route configuration object has properties like 
            - `path`
                - The `path` property specifies the URL path for the route
            - `element`
                - The `element` property specifies the component to render when the route is matched
            - `children`
                - The `children` property specifies any child routes
        
        - In this specific example, the `useRoutes` hook is used to define two routes:
            - The first route has a path of "/" and an element of `<Dashboard />`
                - It also has two child routes with paths "messages" and "tasks" and corresponding elements
                    - `<DashboardMessages />`
                    - `<DashboardTasks />`

                - The second route has a path of "team" and an element of `<AboutPage />`.
                - The `useRoutes` hook returns the element to render based on the current URL.

        - The `App` component renders the result of the `useRoutes` hook, which will be the element corresponding to the current URL.
