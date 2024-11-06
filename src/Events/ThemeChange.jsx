import React, { useState } from 'react';
import '../CSS/ThemeChange.css';

export function ThemeChange() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [background, setBackground] = useState("white");

    function SwitchTheme() {
        if (isDarkTheme) {
            setIsDarkTheme(false);
            setBackground("white");
        }
        else {
            setIsDarkTheme(true);
            setBackground("#282828");
        }
    }

    return (
        <>
            <div className="switch-dark-theme-container" style={{ backgroundColor: background }}>
                <button onClick={SwitchTheme}>{isDarkTheme ? 'Light Theme' : 'Dark Theme'}</button>
            </div>
        </>
    )
}

