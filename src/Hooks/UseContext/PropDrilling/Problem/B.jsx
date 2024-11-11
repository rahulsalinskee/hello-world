import React from 'react';
import { C } from './C';

export function B(props) {
    return (
        <>
            <C name={props.name} />
        </>
    );
}