import React, { useSyncExternalStore } from 'react';

export default function UseSyncExternalStoreApplication() {
    const width = useSyncExternalStore((listener) => {
        window.addEventListener('resize', listener);
        return (() => {
            window.removeEventListener('resize', listener);
        })
    }, () => {
        return window.innerWidth;
    });
    return (
        <>
            <h3>Use Sync External Store Application</h3>
            <h4>Window Size: {width}</h4>
        </>
    )
}
