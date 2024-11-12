import React, { memo } from 'react';

/* ***** 
 * Memo Function - It is a higher order function which is used to stop rerendering/refreshing a component.
 * But in this case, this is also not working as expected. Even, use of memo function does not stopping reloading of the component. 
***** */
export default memo(function TodoWithMemoFunction({ todo, data }) {

    console.log("Todo function is called... ");

    function AddTodoButtonClickEventHandler() {
        todo();
    }

    return (
        <>
            {
                data.map((eachCurrentData, index, array) => {
                    return (
                        <div key={index} className="todo-data-container">
                            <br />
                            <h3>{eachCurrentData + " - " + index}</h3>
                        </div>
                    )
                })
            }
            <button onClick={AddTodoButtonClickEventHandler}>Add Todo</button>
        </>
    )
})