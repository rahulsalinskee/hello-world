import React from 'react';

export default function Todo({ todo, data }) {

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
}
