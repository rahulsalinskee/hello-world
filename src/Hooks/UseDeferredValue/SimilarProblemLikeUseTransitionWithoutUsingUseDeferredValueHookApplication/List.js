import { useMemo, useDeferredValue, useEffect } from 'react'

export default function List({ input }) {
    const DATA_SIZE = 5000;
    const list = useMemo(() => {
        const a = [];
        for (let i = 0; i < DATA_SIZE; i++) {
            a.push(
                <div key={i}>{input}</div>
            );
        }
        return a;
    }, [input])
    return list;
}
