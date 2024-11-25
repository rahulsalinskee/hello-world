import React, { useEffect, useState, useTransition } from 'react';

export default function CountApplicationWithoutIsPending() {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Use State Run!!')
    }, [count]);

    function CountButtonOnClickEventHandler(event) {
        startTransition(() => {
            setCount(count + 1);
            console.log('Count Button On Click Event Handler Run!!!');
        })
    }

    return (
        <>
            <div>
                <h3>Use Transition Hook Application Without Is Pending - Display Count</h3>
                <div>
                    <h3>Current Count: {count}</h3>
                    <button onClick={CountButtonOnClickEventHandler}>Update Count</button>
                </div>
            </div>
        </>
    )
}
