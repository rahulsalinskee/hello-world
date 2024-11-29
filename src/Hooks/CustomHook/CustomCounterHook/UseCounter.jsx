import { useState } from 'react'

export default function UseCounter(initialValue = 0, step = 1) {
    const [count, setCount] = useState(initialValue);

    function Increment() {
        setCount(count + step);
    }

    function Decrement() {
        setCount(count - step);
    }

    return {
        count, Increment, Decrement
    };
}
