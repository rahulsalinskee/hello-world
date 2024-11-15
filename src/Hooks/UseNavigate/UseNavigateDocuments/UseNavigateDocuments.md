
Use Navigate:

Functionalities: This hook offers 2 functions - 
 - Navigation to a page on a button click
 - Navigation to the previous page / Go Back
    - For that we need to pass -1 as an argument in navigate function without (single/double) quote.




Difference between UseNavigate and NavLink?

Purpose:

UseNavigate: useNavigate is a React Router hook that allows you to programmatically navigate to different routes. Example: On a click of a button to navigate to a different page.
NaveLink: NavLink is a React Router component that renders a navigation link and automatically adds an "active" class when the link's route is active.


Functionality:

UseNavigate: useNavigate provides a function that you can call to navigate to a different route, e.g., const navigate = useNavigate(); navigate('/about').
NavLink: NavLink is a specialized <a> tag that handles the "active" state of the link for you, making it easier to style active links.


Style:

UseNavigate: useNavigate doesn't affect the styling of the navigation link. You need to style the link yourself.
NavLink: NavLink automatically applies an "active" class to the link when the current URL matches the link's to prop, which you can use to style the active link.


Use Cases:

UseNavigate: useNavigate is useful when you need to navigate programmatically, such as in response to a button click or form submission.
NavLink: NavLink is better suited for creating navigation menus or lists of links, where you want the active link to be visually distinguished.


