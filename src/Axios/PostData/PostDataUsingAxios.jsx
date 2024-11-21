import axios from 'axios';
import React, { useState } from 'react';

export function PostDataUsingAxios() {
    const data = {
        firstName: "",
        lastName: "",
    };
    const [inputData, setInputData] = useState(data);
    const POST_DATA = 'https://jsonplaceholder.typicode.com/todos';


    function InputHandler(event) {
        setInputData(previousData => ({ ...previousData, [event.target.name]: event.target.value, }));
    }

    function SubmitButtonHandler(event) {
        event.preventDefault();
        axios.post(POST_DATA, inputData).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <div>
                <h1>Post Data Using Axios</h1>
                <form onSubmit={SubmitButtonHandler}>
                    <input type='text' placeholder='First Name' name='firstName' onChange={InputHandler} />
                    <input type='text' placeholder='Last Name' name='lastName' onChange={InputHandler} />

                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}