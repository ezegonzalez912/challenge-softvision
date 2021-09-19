import { createContext, useEffect, useState } from "react";

interface props {
    children: JSX.Element | JSX.Element[]
} 

type context = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const themeContext = createContext({} as context);

export const ThemeProvider = ({children}:props) => {

    const [darkMode, setDarkMode] = useState<boolean>(true)

    useEffect(() => {
        const data = window.localStorage.getItem("challenge-softvision-data-121214");
        const theme = data ? JSON.parse(data).darkMode : true;
        setDarkMode(theme)
    }, [setDarkMode])

    useEffect(() => {
        localStorage.setItem("challenge-softvision-data-121214", JSON.stringify({darkMode}))
    }, [darkMode])

    return (
        <themeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </themeContext.Provider>
    )
}