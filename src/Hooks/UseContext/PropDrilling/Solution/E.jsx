import React from 'react';
import { nameContext } from './A';

export function E() {
    return (
        <>
            { /* ***** 3. Consumer = The context name we created in step 1, we use here connecting with Consumer property and then we need to write a function inside the tag ***** */}
            <nameContext.Consumer>
                {
                    /* ***** 4. Writing function here inside context name tag is mandatory ***** */
                    function ShowName(name) {
                        return (
                            <>
                                <h2> Name displayed in E component: {name}</h2>
                            </>
                        )
                    }
                }
            </nameContext.Consumer>
        </>
    );
}