import React from 'react'
import LightButton from "../assets/light-mode-button.png"
import DarkButton from "../assets/dark-mode-button.png"

const DarkMode = () => {

    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") 
        ? localStorage.getItem("theme") 
        : "light"
    );

    const element = document.documentElement;

    React.useEffect(() => {
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className="relative">

            <img 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            src={LightButton}
            alt="Light Mode"
            className={`w-10 cursor-pointer absolute right-0 z-10 ${
                theme === "dark" ? "opacity-0" : "opacity-100"
            } transition-all duration-300`}
            />

            <img 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            src={DarkButton}
            alt="Dark Mode"
            className={`w-10 cursor-pointer ${
                theme === "dark" ? "opacity-100" : "opacity-0"
            } transition-all duration-300`}
            />

        </div>
    )
}

export default DarkMode