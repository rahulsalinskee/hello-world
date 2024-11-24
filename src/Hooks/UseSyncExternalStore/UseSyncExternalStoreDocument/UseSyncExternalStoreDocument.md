
- Use Sync External Store Hook:
    - About:
        - The useSyncExternalStore hook is a React hook that allows you to synchronize external state with React.

    - Use Cases:
        - Call this hook at the top level of the component to read a value from an external data store.
        - It returns the snapshot of the data in the store.

    - Usage:
        - Subscribing to an external store:
            - Most of the React component will only read data from their props, state and context.
            - However sometimes a component needs to read data from some store outside of React that changes over time.

    - Syntax:
        - const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?);
        - There are 3 parameters it takes:
            1. Subscribe: 
                - A subscribe function should subscribes to the store and returns a function that unsubscribe from the external state.
            2. Get Snapshot:
                - A getSnapshot function should read a snapshot of the data from the store.
            3. Get Server Snapshot (Optional):  