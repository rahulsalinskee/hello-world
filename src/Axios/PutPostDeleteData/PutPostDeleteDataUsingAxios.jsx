import React, { useState } from 'react';
import axios from 'axios';

export function PutPostDeleteDataUsingAxios() {
    const data = {
        firstName: "",
        lastName: "",
    };
    const [inputData, setInputData] = useState(data);
    const POST_DATA = 'https://jsonplaceholder.typicode.com/todos';
    const UPDATE_DELETE_DATA = 'https://jsonplaceholder.typicode.com/todos/1';


    function InputHandler(event) {
        setInputData(previousData => ({ ...previousData, [event.target.name]: event.target.value, }));
    }

    function PostEventHandler(event) {
        event.preventDefault();
        axios.post(POST_DATA, inputData).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    function UpdateEventHandler(event) {
        event.preventDefault();
        axios.put(UPDATE_DELETE_DATA, inputData).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    function DeleteEventHandler(event) {
        event.preventDefault();
        axios.delete(UPDATE_DELETE_DATA).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    function UpdateButtonClickHandler(event) {
        UpdateEventHandler(event);
    }

    function DeleteButtonClickHandler(event) {
        DeleteEventHandler(event);
    }

    function SubmitButtonHandler(event) {
        PostEventHandler(event);
    }

    return (
        <>
            <div>
                <h1>Post Data Using Axios</h1>
                <form onSubmit={SubmitButtonHandler}>
                    <input type='text' placeholder='First Name' name='firstName' onChange={InputHandler} />
                    <input type='text' placeholder='Last Name' name='lastName' onChange={InputHandler} />

                    <button>Submit</button>
                    <button onClick={UpdateButtonClickHandler}>Update</button>
                    <button onClick={DeleteButtonClickHandler}>Delete</button>
                </form>
            </div>
        </>
    )
}