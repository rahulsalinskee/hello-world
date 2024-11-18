 Use Location Hook: 
    - It is used to access the current URL location object. 
    - With this hook, we can access the current URL pathname, search parameters, and other URL-related information.
    - It's particularly useful when you need to access the current URL location programmatically.
    - It's commonly used in scenarios where you need to perform actions based on the current URL location, such as redirecting the user to a different page or updating the URL programmatically.
    - It is used to return the current location of React component in the form of object.
    - It uses location object to access key, pathname, state, hash and search of the component.
    - It returns the path in the format of 
        - For contact page: /contact
        - For login page: /log
        - For home page: /home
        - For about page: /about

- Check code of ProductPage & DashboardPage for example.

- Code change: ProductPage.jsx (Only 1 file) & DashboardPage.jsx (Only 1 file)