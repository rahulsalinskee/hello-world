import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {

    const navigateTo = useNavigate();

    function LoadPreviousPageButtonClickHandler(event) {
        event.preventDefault();
        /* ***** This will take us to the previous page. Please pass -1 as a parameter without any quotes. ***** */
        navigateTo(-1);
    }
    return (
        <>
            <div>
                <h3>This is Cart Page!</h3>
                <button onClick={LoadPreviousPageButtonClickHandler}>Go Back</button>
            </div>
        </>
    )
}
