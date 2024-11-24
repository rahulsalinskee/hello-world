import React, { useSyncExternalStore } from 'react';

/* ***** ------------------------------------------- ***** */

// Create a simple external store
const createStore = (initialState) => {
    let state = initialState;
    const listeners = new Set();

    return {
        subscribe: (listener) => {
            listeners.add(listener);
            return () => listeners.delete(listener);
        },
        getSnapshot: () => state,
        setState: (newState) => {
            state = typeof newState === 'function' ? newState(state) : newState;
            listeners.forEach(listener => listener());
        }
    };
};

// Create a counter store
const counterStore = createStore(0);

/* ***** ------------------------------------------- ***** */

// Custom hook to use the counter store
const useCounter = () => {
    const count = useSyncExternalStore(
        counterStore.subscribe,
        counterStore.getSnapshot
    );

    const increment = () => counterStore.setState(currentCount => currentCount + 1);
    const decrement = () => counterStore.setState(currentCount => currentCount - 1);

    return { count, increment, decrement };
};

/* ***** ------------------------------------------- ***** */

// Counter component using the external store
const Counter = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <div>
            <h2>Counter: {count}</h2>
            <div>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
};

/* ***** ------------------------------------------- ***** */

// Display component to show counter value elsewhere
const CounterDisplay = () => {
    const { count } = useCounter();
    return (
        <div>
            <p>Counter value: {count}</p>
        </div>
    );
};

/* ***** ------------------------------------------- ***** */

export default function CounterApplicationUsingUseSyncExternalStoreHook() {
    return (
        <>
            <h3>Counter Application Using Use Sync External Store Hook</h3>
            <Counter />
            <CounterDisplay />
        </>
    )
}
