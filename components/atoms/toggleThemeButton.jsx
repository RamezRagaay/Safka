
"use client"
import { useState, useEffect } from "react";
const ToggleThemeButton = ({display}) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        setDarkMode(true);
      }
    }, [])

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode])

    return (
        <button
            className={`text-2xl ${display}`}
            onClick={() => {
                setDarkMode(!darkMode);
            }}
        >
            {darkMode ? "Dark" : "Light"}
        </button>
    )
    
}

export default ToggleThemeButton
