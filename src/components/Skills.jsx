import React from "react";
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiSelenium, SiScratch } from "react-icons/si"; // Scratch icon
import "../styles/skills.css";

function Skills() {
    return (
        <div className="skills">
            <div className="skills-container">
                <h2>My Skills</h2>
                <div className="skills-list">
                    <div className="skill-item">
                        <FaJava className="skill-icon" />
                        <p>Java</p>
                    </div>
                    <div className="skill-item">
                        <SiSelenium className="skill-icon" />
                        <p>Selenium</p>
                    </div>
                    <div className="skill-item">
                        <FaHtml5 className="skill-icon" />
                        <p>HTML</p>
                    </div>
                    <div className="skill-item">
                        <FaCss3Alt className="skill-icon" />
                        <p>CSS</p>
                    </div>
                    <div className="skill-item">
                        <FaJs className="skill-icon" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-item">
                        <FaReact className="skill-icon" />
                        <p>React</p>
                    </div>
                    <div className="skill-item">
                        <FaDatabase className="skill-icon" />
                        <p>MySQL</p>
                    </div>
                    <div className="skill-item">
                        <SiScratch className="skill-icon" />
                        <p>Scratch</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;