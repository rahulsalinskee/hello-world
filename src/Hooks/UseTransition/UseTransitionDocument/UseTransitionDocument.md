 - Use Transition Hook:
    - About: 
        - Use Transition Hook is a React hook that allows us to update the state without blocking the UI.
        - It is not Very Frequent to use.

    - Use Case (When to use):
        - It is to use when we issues with regards to performance in any React application.
        - This should be used to create a function which helps us to set the priority of the state to be updated.
        - Call this hook at the top level of the component to mark some state updates as transition.
        - It returns an array with two items
        - This is helpful in search functionality.

    - Syntax:
        - const [isPending, startTransition] = useTransition();
            - isPending: It tells us that if there is a pending transition.
            - startTransition: 
                - This is function that lets us mark a state update as a transition.
