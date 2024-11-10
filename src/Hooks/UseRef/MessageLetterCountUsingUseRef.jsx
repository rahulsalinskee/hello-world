import React, { useState, useRef } from 'react';
import '../../CSS/MessageLetterCountUsingUseRef.css';

export function MessageLetterCountUsingUseRef() {
    const [enteredText, setEnteredText] = useState("");
    const referenceElement = useRef(0);

    function GetLetterCountOnChange(event) {
        setEnteredText(event.target.value);
    }

    function MessagePostOnButtonClick(event) {
        event.preventDefault();
        setEnteredText("");
        referenceElement.current.focus();
        alert(`Your message is Posted!`)
    }

    return (
        <>
            <div className="message-letter-count-container">
                <label>Enter Your Text: </label>
                <input placeholder="Enter Your Text" onChange={GetLetterCountOnChange} value={enteredText} ref={referenceElement} />
                <button onClick={MessagePostOnButtonClick}>Submit</button>
            </div>
        </>
    )
}