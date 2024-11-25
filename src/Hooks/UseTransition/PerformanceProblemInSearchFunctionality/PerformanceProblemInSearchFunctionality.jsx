import React, { useEffect, useState, useTransition } from 'react';

export default function PerformanceProblemInSearchFunctionality() {
    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState();
    const [dataList, setDataList] = useState([]);
    const DATA_SIZE = 10000;

    // useEffect(() => {
    //     console.log('Use State Run!!')
    // }, [count]);

    function InputOnChangeEventHandler(event) {
        setInput(event.target.value);
        const a = [];
        for (let i = 0; i < DATA_SIZE; i++) {
            a.push(event.target.value);
        }
        setDataList(a);
    }

    return (
        <>
            <div>
                <h3>Use Transition Hook Application Without Is Pending - Display Count</h3>
                <div>
                    <input type='text' value={input} onChange={InputOnChangeEventHandler} />
                    {
                        dataList.map((data, index) => {
                            return (
                                <div key={index}>{data}</div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}