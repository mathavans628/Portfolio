import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../styles/themetoggle.css";

function ThemeToggle() {
    const [theme, setTheme] = React.useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
    );
}

export default ThemeToggle;