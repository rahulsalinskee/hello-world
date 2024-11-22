- Use Reducer Hook:
    - About:
        - It is a built-in hook in React.
        - It is an alternative to useState hook.

    - Uses:
        - It is used to manage complex state logic in a more organized, efficient way and in predictable manner especially when we are dealing with state transition that involves multiple actions.
        - It is an alternative of useState hook when the state management logic is more complex.
        - The same work can be done with the help of useState hook but it is not recommended to use it in complex cases because
        the code becomes hard to read, understand and maintain. The code becomes more messy.

    - What is inside UseReducer hook:
        - State & Dispatch: 
            - Inputs:
                - UseReducer hook takes 2 arguments as inputs:
                    I1. A reducer function.
                        => Reducer Function: 
                            ==> It is a function that is responsible for handling the state based on the action dispatched.
                            - Input (For Reducer Function):
                                - It takes two arguments:
                                    I1a. The current state.
                                    I2b. The action object which is being dispatched.
                                    => Action Object:
                                        ==> It is an object that describes that what kind of state change we want to perform. 
                                        ==>They typically have 'type' (key) property to identify the type of action and additional data as needed.
                            - Returns (From Reducer Function):
                                - It returns the new state based on action's logic.
                    I2. An initial state.

            - Returns:
                - The useReducer hook returns an array with two elements. 
                    R1. The first element is the current state and 
                    R2. The second element is the dispatch function.
                    => Dispatch function:
                        ==> The dispatch function is used to dispatch/send an action to the reducer, which then processes the action and returns a new state accordingly.

    - Syntax Similarities:
        - Use State:
            - const [count, setCount] = useState(0);

        - Use Reducer:
            - const [state, dispatch] = useReducer(Reducer, InitialState);

    - Code change: Code change happens to be in only one file.

    - Steps:
        1.  Import Use Reducer hook.
        2.  Return: It returns an array of -
            - Current state (here, it is state)
            - Dispatch function
        3.  Use of dispatch function (Similar to setState of useState hook). 
            The exact same value of type property (Which is key here) will be mentioned in case of switch statement in Reducer function (Step 5)
        4.  Declare & initialize value to InitializeState placeholder (Similar to 0 of ==> const [count, setCount] = useState(0) hook) 
            This has to be in the form of an object.
        5.  Return: It returns a new state based on action' logic (Step 3). Reducer function with state and action as an input. 
            It can contain either Switch statement OR IF-ELSE. This will return state.
            It takes 2 input - 
                - state: State is to access initialState value through key (Here, key is count)
                - action: Action is dispatch type of step 3

    - Code Reference: CounterAppWithUseReducer JSX