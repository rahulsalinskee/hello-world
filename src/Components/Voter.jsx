import React from 'react';

function IsVoterEligibleToVote(age) {
    if (age !== NaN || age < 18) {
        return false;
    }
    else {
        return true;
    }
}

export function Voter(props) {
    let isVoterEligible = IsVoterEligibleToVote(props.age);
    return (
        <>
            <h3>Voter Eligibility = {isVoterEligible ? 'Yes' : 'No'}</h3>
        </>
    )
};