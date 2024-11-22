/* ***** Use Reducer Hook: 1. Import Use Reducer ***** */
import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

/* ***** 
 * Use Reducer Hook: 5. Writing Reducer function with state and action as an input
 * It can contain either Switch statement OR IF-ELSE 
 * This will return state
 * It takes 2 input - state & action
 * State is to access initialState value through key (Here, key is count)
 * The same state
 * Action is dispatch type of step 3
 ***** */
function Reducer(state, action) {
    console.log(state, action);

    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
            break;

        case 'RESET':
            return { count: state.count = 0 };
            break;

        case 'DECREMENT':
            return {
                count: state.count - 1
            }
            break;

        default:
            return state;
    }
}

export function CounterAppWithUseReducer() {
    const navigateTo = useNavigate();

    /* ***** 
     * Use Reducer Hook: 4. Declare & initialize value to
     * InitializeState placeholder (Similar to 0 of ==> const [count, setCount] = useState(0) hook) 
     * This has to be in the form of an object. Here, key is count and its initial value is set to 0.
    ***** */
    const initialState = { count: 0 };

    /* ***** 
     * Use Reducer Hook: 2. Return: It returns an array of -
     * Current state (here, it is state)
     * Dispatch function
     ***** */
    const [state, dispatch] = useReducer(Reducer, initialState);

    function BackButtonOnClickEventHandler(event) {
        event.preventDefault();
        navigateTo(-1);
    }

    function IncrementButtonClickEventHandler(event) {
        event.preventDefault();
        /* ***** 
         * Use Reducer Hook: 3. Use of dispatch function (Similar to setState of useState hook) 
         * The exact same value of type property (Which is key here) will be mentioned in case of switch statement in 
         * Reducer function (Step 5)
        ***** */
        dispatch({ type: "INCREMENT" });
    }

    function ResetButtonClickEventHandler(event) {
        event.preventDefault();
        /* ***** 
         * Use Reducer Hook: 3. Use of dispatch function (Similar to setState of useState hook) 
         * The exact same value of type property (Which is key here) will be mentioned in case of switch statement in 
         * Reducer function (Step 5)
        ***** */
        dispatch({ type: "RESET" });
    }

    function DecrementButtonClickEventHandler(event) {
        event.preventDefault();
        /* ***** 
         * Use Reducer Hook: 3. Use of dispatch function (Similar to setState of useState hook) 
         * The exact same value of type property (Which is key here) will be mentioned in case of switch statement in 
         * Reducer function (Step 5)
        ***** */
        dispatch({ type: "DECREMENT" });
    }

    return (
        <>
            <div>Counter App With Use Reducer</div>
            <h3>Count: {state.count}</h3>
            <button onClick={IncrementButtonClickEventHandler}>Increment</button>
            <button onClick={ResetButtonClickEventHandler}>Reset</button>
            <button onClick={DecrementButtonClickEventHandler}>Decrement</button>
            <button onClick={BackButtonOnClickEventHandler}>Go Back</button>
        </>
    )
}