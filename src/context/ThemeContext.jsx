
import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        try {
            const savedTheme = localStorage.getItem('portfolio-theme');

            if (savedTheme === 'light' || savedTheme === 'dark') {
                return savedTheme;
            }
        } catch (error) {
            console.warn('Tema yaddaşdan oxuna bilmədi:', error);
        }

        return 'dark';
    });

    useEffect(() => {
        const root = document.documentElement;

        root.classList.toggle('dark', theme === 'dark');
        root.style.colorScheme = theme;

        try {
            localStorage.setItem('portfolio-theme', theme);
        } catch (error) {
            console.warn('Tema yadda saxlanıla bilmədi:', error);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === 'dark' ? 'light' : 'dark'
        );
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            'useTheme must be used within ThemeProvider'
        );
    }

    return context;
};
