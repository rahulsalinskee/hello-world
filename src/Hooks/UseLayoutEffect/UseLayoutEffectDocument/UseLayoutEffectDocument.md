
- Use Layout Effect:
    - About:
        - useLayoutEffect is a hook that is similar to useEffect, but it runs synchronously after all DOM mutations.
        - It is useful for performing some action that rely on the most up-to-date DOM layout and before the browser has a chance to paint the screen.

    - Primary Use Case:
        - Use Layout Effect:
            - It is a React hook that used to perform side effects after rendering and before the browser's layout and paint process.
            - It is very similar to the useEffect hook, but it fires synchronously after all DOM mutations have been processed, where as useEffect fires asynchronously after the browser has painted the screen (rendering phase).
            - It is often used to action that depends on the accurate DOM measurements or that need to update the UI before it's visually present to the user.

    - Changes in File:
        - There are a couple of changes in one file.

    - Steps:
        1. Import the useLayoutEffect hook from the react library.
        2. Define a component that uses the useLayoutEffect hook to perform some action after rendering.

    - Code Reference:
        - Please refer UseLayoutEffectApplication.jsx file.