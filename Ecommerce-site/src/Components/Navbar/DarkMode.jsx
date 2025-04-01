import React, { useState, useEffect } from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png'; // Assuming you have this asset

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    const element = document.documentElement;
    
    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark'); // Added quotes
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light'); // Added quotes
        }
    }, [theme]); // Added theme as dependency
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    return (
        <div className='relative'>
            <img 
                src={LightButton} 
                alt="light-button" 
                onClick={toggleTheme} 
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 right-0 z-10 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`} 
            />
            <img 
                src={DarkButton} // Use DarkButton if available
                alt="dark-button" 
                onClick={toggleTheme} 
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute top-0 right-0 z-10 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} 
            />
        </div>
    );
};

export default DarkMode;