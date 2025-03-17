import React, { useState } from "react";
import "../styles/projects.css";

// Import images
import codeAiDLogo from "../assets/CodeAiD_Final_Logo_WithBG.png";
import AssignTrack from "../assets/AssignTrack.png";
import TreeDataStructure from "../assets/Tree_Data_Structure.png";
import ZOHOSchoolsExamlessAppliationForm from "../assets/ZOHOSchools_Examless_Appliation_Form.jpg";
import ThiraiyagamLogo from "../assets/ThiraiyagamLogo.png";
import To_DO_List from "../assets/To-Do-List.png";
import MiceGame from "../assets/MiceGame.png";

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("Java");

    const categories = ["Java", "Testing", "HTML, CSS, JS", "Scratch"];

    const projects = [
        {
            title: "CodeAiD",
            description: "A web-based IDE with AI-powered code generation and voice assistance.",
            link: "https://github.com/mathavans628/CodeVision.git",
            image: codeAiDLogo,
            alt: "CodeAiD project preview",
            category: "Java"
        },
        {
            title: "AssignTrack",
            description: "An app to track student assignments easily.",
            link: "https://github.com/mathavans628/AssignTrack.git",
            image: AssignTrack,
            alt: "Student Assignment Tracking System",
            category: "Java"
        },
        {
            title: "Tree Data Structure",
            description: "A way to organize data like a family tree, with a root and branches.",
            link: "https://github.com/mathavans628/TreeDataStructure.git",
            image: TreeDataStructure,
            alt: "Tree Data Structure",
            category: "Java"
        },
        {
            title: "ZS Examless Form Validation",
            description: "Automated testing for ZOHO Schools application form using Selenium.",
            link: "https://workdrive.zohoexternal.com/external/f4e65c6e56a729e71f92dbeb31211f1d30f3c023315e5fcd6d79106bacb96bfa",
            image: ZOHOSchoolsExamlessAppliationForm,
            alt: "ZOHO Schools Application Form Validation",
            category: "Testing" 
        },
        {
            title: "Thiraiyagam",
            description: "A movie ticket booking app for theaters and users.",
            link: "https://github.com/mathavans628/Thiraiyagam.git",
            image: ThiraiyagamLogo,
            alt: "Movie Ticket Booking App screenshot",
            category: "HTML, CSS, JS"
        },
        {
            title: "To-DO-List",
            description: "A simple to-do list app to keep track of tasks.",
            link: "https://github.com/mathavans628/To-Do-List",
            image: To_DO_List,
            alt: "To-DO-List screenshot",
            category: "HTML, CSS, JS"
        },
        {
            title: "Mice Game",
            description: "A board game like Snakes and Ladders.",
            link: "https://scratch.mit.edu/projects/1044105409/fullscreen/",
            image: MiceGame,
            alt: "Mice game preview",
            category: "Scratch"
        }
    ];

    const filteredProjects = projects.filter(project => project.category === selectedCategory);

    return (
        <div className="projects">
            <div className="projects-container">
                <h2>Projects</h2>
                
                {/* Category Menu */}
                <div className="category-menu">
                    {categories.map((category, index) => (
                        <button 
                            key={index} 
                            className={`category-button ${selectedCategory === category ? "active" : ""}`} 
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Project List */}
                <div className="project-list">
                    {filteredProjects.map((project, index) => (
                        <a 
                            key={index} 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-card"
                        >
                            <img src={project.image} alt={project.alt} className="project-image"/>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;