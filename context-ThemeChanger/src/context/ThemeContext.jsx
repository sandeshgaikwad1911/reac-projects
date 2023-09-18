import {createContext, useEffect, useState} from "react";

export const ThemeContext =  createContext()

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({children})=>{

    const [theme , setTheme] = useState('light');

    useEffect(()=>{
        document.querySelector('html').classList.remove('light', 'dark')
        document.querySelector('html').classList.add(theme)
    },[theme])
    
    /*  <style>
        html.dark body{
            background-color: black;
            color: white 
      }
    </style> */

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

