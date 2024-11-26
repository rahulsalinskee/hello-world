import { useMemo, useDeferredValue, useEffect } from 'react'

export default function List({ input }) {
    const DATA_SIZE = 5000;
    const deferredInput = useDeferredValue(input);

    const list = useMemo(() => {
        const a = [];
        for (let i = 0; i < DATA_SIZE; i++) {
            a.push(
                <div key={i}>{deferredInput}</div>
            );
        }
        return a;
    }, [deferredInput]);

    useEffect(() => {
        console.log(`Input: ${input} \nDeferred Input: ${deferredInput}`);
    })

    return list;
}
