- UseId:
    - About:
        - It is a hook to generate unique IDs that can be passed to accessibility attributes.

    - Syntax:
        - `const id = useId();`

    - Use Cases:
        - Generating unique IDs for accessibility attributes.
        - It is called at the top level of the component.
        - It returns a unique ID string associated with this particular component useId call in this particular component.
        - If you need to give IDs to multiple related elements, you can call useId to generate a shared prefix for all the IDs.