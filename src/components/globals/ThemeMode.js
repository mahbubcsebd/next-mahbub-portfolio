"use client"

import { useEffect, useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';

const ThemeMode = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
        document.body.classList.toggle('light', !darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <button
            type="button"
            onClick={toggleDarkMode}
            className="text-lg text-white py-4 px-6 rounded-sm bg-primary-main"
        >
            {darkMode ? <CiLight /> : <CiDark />}
        </button>
    );
};

export default ThemeMode;