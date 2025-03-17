import React, { useState } from "react";
import "../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ activeSection }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
                <li className={activeSection === "home" ? "active" : ""}>
                    <a href="#home" onClick={closeMenu}>Home</a>
                </li>
                <li className={activeSection === "projects" ? "active" : ""}>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                </li>
                <li className={activeSection === "skills" ? "active" : ""}>
                    <a href="#skills" onClick={closeMenu}>Skills</a>
                </li>
                <li className={activeSection === "contact" ? "active" : ""}>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </li>

                {/* Social Icons
                <li className="social-icons">
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.codewars.com/users/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaCode size={20} />
                    </a>
                    <a href="https://www.hackerrank.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaHackerrank size={20} />
                    </a>
                </li> */}

            </ul>
        </nav>
    );
}

export default Navbar;