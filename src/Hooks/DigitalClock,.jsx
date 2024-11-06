import React, { useState } from 'react';
import '../CSS/DigitalClock.css';

export function DigitalClock() {
    const currentTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(currentTime);

    function UpdateTime() {
        const currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
    }

    setInterval(() => {
        UpdateTime()
    }, 1000);

    return (
        <>
            <div className="digital-clock-container">
                <h2>Digital Clock: </h2>
                <h3>{time}</h3>
            </div>
        </>
    );
}