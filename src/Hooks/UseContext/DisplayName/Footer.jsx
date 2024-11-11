import React from 'react';
import { firstNameContext, lastNameContext } from './Dashboard';

/* ***** 
 * There is a problem with Context API that code becomes more complicated and more complex. 
 * It also becomes hard to read and maintain 
 * To solve this problem we use useContext hook
***** */
export function Footer() {
    return (
        <>
            <firstNameContext.Consumer>
                {
                    function ShowFirstName(firstName) {
                        return (
                            <>
                                <lastNameContext.Consumer>
                                    {
                                        function ShowLastName(lastName) {
                                            return (
                                                <>
                                                    <h3>First Name: {firstName}</h3>
                                                    <h3>Last Name: {lastName}</h3>
                                                </>
                                            )
                                        }
                                    }
                                </lastNameContext.Consumer>
                            </>
                        )
                    }
                }
            </firstNameContext.Consumer>
        </>
    )
}