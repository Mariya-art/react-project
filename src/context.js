import React, { createContext, useState } from 'react';

export const themes = {
    light: {
        background: '#bfc8da',
        text: '#000',
    },
    dark: {
        background: '#24314b',
        text: '#eee',
    },
}

export const ThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(prevState => prevState === themes.light ? themes.dark : themes.light);
    };

    return (
        <ThemeContext.Provider value={{ themes: theme, toggleTheme: toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    );
}

export default DarkThemeProvider;