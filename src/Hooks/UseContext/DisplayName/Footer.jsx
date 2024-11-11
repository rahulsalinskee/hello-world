import React from 'react';
import { firstNameContext, lastNameContext } from './Dashboard';

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