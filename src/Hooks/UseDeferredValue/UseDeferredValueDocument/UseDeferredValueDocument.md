
- Use Deferred Value Hook:
    - About:
        - It is used to defer updating a part of the UI.

    - Syntax:
        - const deferredValue = useDeferredValue(value);

    - Primary Use Cases:
        - Call use Deferred Value Hook at the top of the component to get the deferred version of that value.
        - Deferring re-rendering part of the UI.
        - It also can be used for performance optimization. 
        - It is useful when a part of your UI is slow to re-render, there is no easy way to optimize it and you want to prevent it from blocking the rest of the UI.

    - Difference between useDeferredValue and useTransition:
        - UseDeferredValue Hook:
            - Purpose: 
                - Allows you to defer updating a value, helping to optimize performance for heavy rendering tasks
            - It creates a "delayed" version of the value that React will update with lower priority
            - Useful when you want to keep the UI responsive during expensive computations
            - Does not block the main thread completely
            - Best for scenarios where you want to delay non-critical updates

        - UseTransition Hook
            - Purpose: 
                - Allows you to mark state updates as transitions, which can be interrupted
            - Provides more explicit control over the priority of state updates
            - Gives you a way to indicate that a state update is not urgent
            - Returns a startTransition function and a isPending boolean
            - Better for more complex state management and navigation scenarios

        - Key Differences
            - Control:
                - UseDeferredValue automatically defers the value
                - UseTransition requires you to explicitly mark state updates as transitions

            - Use Cases:
                - UseDeferredValue: 
                    - Best for filtering large lists, complex rendering
                - UseTransition: 
                    - Better for navigation, tab switching, or less time-sensitive updates

        - Syntax:
            - UseDeferredValue creates a deferred value directly
            - UseTransition provides a function to wrap state updates