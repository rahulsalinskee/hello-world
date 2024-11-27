import React, { useId } from 'react';

export default function Email() {
    const id = useId();
    return (
        <>
            <label htmlFor={`${id}-label`}>Email</label>
            <input type="text" id={`${id}-email`} autoComplete='off' />
            <br />
            <br />
            <label htmlFor={`${id}-name`}>Name</label>
            <input type="text" id={`${id}-name`} autoComplete='off' />
        </>
    )
}
