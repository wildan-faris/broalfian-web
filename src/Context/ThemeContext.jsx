import * as React from 'react'
export const ThemeContext = React.createContext({
    Theme: null,
    setTheme: () => {},
});

export default function ThemeProvider({ children }){
    const [Theme, setTheme] = React.useState(null);
    return (
        <ThemeContext.Provider value={{ Theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

