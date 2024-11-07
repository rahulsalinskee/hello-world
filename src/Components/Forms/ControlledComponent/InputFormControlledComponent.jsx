import React, { useState } from 'react';
import '../../../CSS/InputForm.css';

const InputForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [showData, setShowData] = useState("");

    function GetNameOnChange(event) {
        if (event.target.name === 'firstName') {
            setFirstName(event.target.value);
        }
        if (event.target.name === 'lastName') {
            setLastName(event.target.value);
        }
    }

    function Submit(event) {
        event.preventDefault();
        DisplayInputData();
    }

    function DisplayInputData() {
        setShowData(`${firstName} ${lastName}`);
    }

    return (
        <>
            <form onSubmit={Submit}>
                <h2>Enter Data: {showData}</h2>
                <label>Enter First Name: </label>
                <input name="firstName" type="text" placeholder='Enter First Name' onChange={GetNameOnChange} value={firstName} />
                <label>Enter First Name: </label>
                <input name="lastName" type="text" placeholder="Enter Last Name" onChange={GetNameOnChange} value={lastName} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default InputForm