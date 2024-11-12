import React, { useState } from 'react'
import TodoWithMemoFunction from './TodoWithMemoFunction';
import '../../../CSS/CallBack.css';

export default function CallBackWithMemoFunction() {
    const [add, setAdd] = useState(0);
    const [todoData, setTodoData] = useState([]);

    /* ***** 
     * Here, Addition is a button and Todo is a component which is injected in CallBack component. 
     * Todo component takes two values - TodoList function and todoData.
     * TodoList function is a callback function which is passed in Todo component.
     * Problem statement: When we click on Addition button, it is executing TodoList function again & again.
     * Reason of happening: Whenever we update a value using useState hook, it rerenders/refresh our component and then executes our entire code.
     * Hence, here, when our useState gets updated, our component rerenders. That means that our TodoList function will also get 
     * called & rerendered on the click on Addition button.
     * Even though there is no connection between Addition button and Todo Component (TodoList Function).
     * This is causing performance issue.
     ***** */

    function AdditionButtonClick(event) {
        setAdd(add + 1);
    }

    function TodoList() {
        setTodoData((previousData) => {
            return [...previousData, "New Todo"];
        });
    }

    return (
        <>
            <h3>Call Back</h3>
            <div className="add-todo-button-container">
                <TodoWithMemoFunction todo={TodoList} data={todoData} />
                <button onClick={AdditionButtonClick}>Addition</button>
            </div>
            <h3>Addition: {add}</h3>
        </>
    )
}
