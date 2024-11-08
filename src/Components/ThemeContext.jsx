import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check for saved theme in localStorage or default to light mode
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light'); // Save to localStorage
            return newMode;
        });
    };

    // Sync with system preference on mount
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            setIsDarkMode(e.matches); // Sync with system preference
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []); // Only run once on mount

    // Effect to update body class based on isDarkMode
    useEffect(() => {
        const rootElement = document.getElementById('root');
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            rootElement.classList.add('dark-mode'); // Add dark-mode class to root
        } else {
            document.body.classList.remove('dark-mode');
            rootElement.classList.remove('dark-mode'); // Remove dark-mode class from root
        }
    }, [isDarkMode]); // Run when isDarkMode changes


    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
