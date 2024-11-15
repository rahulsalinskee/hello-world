UseParams Hook: 
 - It is a hook from React Router that allows you to access URL parameters (also called route parameters) from the current URL. 
 - It's particularly useful when you need to access dynamic values passed in the URL path.


Steps:
    - UseParams Hook: 
        1. Need to add route (Here, route is 'firstName' and 'lastName' variable) for DashboardPage where BrowserRouter is implemented (In this example, BrowserRouter is implemented in App JS) 
        2. We need to use this (variable name) route in DashboardPage JXS file

Code Change:
   1. In App JS, we need to add route (Here, route is 'firstName' and 'lastName' variable) for DashboardPage where BrowserRouter is implemented (In this example, BrowserRouter is implemented in App JS)
    <Route path='/dashboard/:firstName/:lastName' element={<DashboardPage />} />

    2. We need to use this (variable name(s)) route in the file for which this route (variable name(s)) in App JS is for (In this case, it is used for Dashboard Page).

    export function DashboardPage() {
    /* ***** 
     * Use Params - 2. The variable name(s) should be same as the variable name(s) in the route (App JS) 
     * Here, firstName & lastName comes as an object.
     * Hence, we need to access the value of the object using { }.
    ***** */
    const { firstName, lastName } = useParams();

    return (
        <>
            <NavBarPage />
            <h1>This is Dashboard Page!</h1>
            <h2>Welcome {firstName} {lastName}!</h2>
        </>
    )
}