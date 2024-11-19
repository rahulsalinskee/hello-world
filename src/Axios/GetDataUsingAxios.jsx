import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

export function GetDataUsingAxios() {
    const GET_DATA = 'https://jsonplaceholder.typicode.com/posts';
    const [data, setData] = useState([]);
    const [isDataShown, setIsDataShown] = useState(true);
    const [error, setError] = useState(null);

    function GetApiData() {
        axios.get(GET_DATA)
            .then((response) => {
                setData(response.data);
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    function ShowApiDataOnButtonClick() {
        setIsDataShown(!isDataShown);

        if (isDataShown) {
            GetApiData();
        }
        else {
            setData([]);
        }
    }

    function ReadApiData(responseData) {
        return responseData;
    }

    const getApiData = useMemo(() => {
        return ReadApiData(data);
    }, [data]);

    return (
        <>
            <h1>Axios</h1>
            <button onClick={ShowApiDataOnButtonClick}>{isDataShown ? "Show Data" : "Hide Data"}</button>
            <h3>
                {
                    error ? (
                        <h3>Error: {error}</h3>
                    ) : (
                        <div>
                            <h3>Response:</h3>
                            {
                                getApiData.map(post => (
                                    <div key={post.id}>
                                        <h4>{post.title}</h4>
                                        <p>{post.body}</p>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </h3>
        </>
    );
}