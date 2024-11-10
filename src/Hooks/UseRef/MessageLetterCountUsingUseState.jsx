import React, { useState, useEffect, useRef } from 'react';
import '../../CSS/MessageLetterCountUsingUseState.css';

export function MessageLetterCountUsingUseState() {
    const MAXIMUM_MESSAGE_SIZE_LENGTH = 10;
    const [message, setMessage] = useState("");
    const [messageLetterCount, setMessageLetterCount] = useState(MAXIMUM_MESSAGE_SIZE_LENGTH);
    const currentMessageLengthReferenceElement = useRef(1);
    const currentMessageReferenceElement = useRef("");
    const currentMessageLeftOutCountReferenceElement = useRef(1);

    function GetLetterCountOnChange(event) {
        event.preventDefault();
        setMessage(event.target.value);
        let currentMessageLength = event.target.value.length;
        setMessageLetterCount(MAXIMUM_MESSAGE_SIZE_LENGTH - currentMessageLength);

        if (IsMessageValidBasedOnLength(currentMessageLength)) {
            currentMessageLengthReferenceElement.current.style.color = "green";
            currentMessageReferenceElement.current.style.color = "black";
            currentMessageLeftOutCountReferenceElement.current.style.color = 'green';
        }
        else {
            currentMessageLengthReferenceElement.current.style.color = "red";
            currentMessageReferenceElement.current.style.color = "red";
            currentMessageLeftOutCountReferenceElement.current.style.color = 'red';
        }
    }

    function MessagePostOnButtonClick(event) {
        event.preventDefault();
        if (IsMessageValidBasedOnLength(messageLetterCount)) {
            alert(`Your message is Posted!`)
        }
        else {
            alert(`Your message length is too long!`);
        }
    }

    function IsMessageValidBasedOnLength(currentMessageLetterCount) {
        if ((currentMessageLetterCount >= 0) && (currentMessageLetterCount <= MAXIMUM_MESSAGE_SIZE_LENGTH)) {
            return true;
        }
        else {
            return false;
        }
    }

    /* ***** 
     * Problem: Problem with using UseEffect is Re-Rendering 
     * Solution for this problem is - useRef Hook
    ***** */
    // useEffect(() => {
    //     if (IsMessageValidBasedOnLength(messageLetterCount)) {

    //     }

    //     return () => {
    //         second
    //     }
    // }, [message]);

    IsMessageValidBasedOnLength(messageLetterCount);
    return (
        <>
            <div className="get-letter-count-container">
                <label>Enter Your Text: </label>
                <input type="text" placeholder="Enter your text" ref={currentMessageReferenceElement} className="get-letter-count-input" onChange={GetLetterCountOnChange} value={message} />
                <div className="display-message-length-container">
                    <label ref={currentMessageLengthReferenceElement}>Entered Letter Count: {message.length}</label>
                    <label ref={currentMessageLeftOutCountReferenceElement}>Letters Left: {messageLetterCount}</label>
                </div>
                <button className="get-letter-count-button" onClick={MessagePostOnButtonClick}>Post</button>
            </div>
        </>
    );
}
/* ***** 2. Persisting Values Between Renders ***** */
