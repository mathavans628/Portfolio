import React from "react";
import { FaGithub, FaCode, FaHackerrank } from "react-icons/fa";
import "../styles/home.css";
import profileImage from "../assets/Cliq_Profile_Image.jpeg";

function Home() {
    return (
        <section className="home">
            <div className="home-container">
                {/* Left Section - Content */}
                <div className="text-section">
                    <h1 className="title">
                        Hi, I'm <span>Mathavan S</span>
                    </h1>
                    <p className="subtitle">
                        I trained in backend development and love exploring new ideas to build amazing things!
                    </p>

                    {/* Section Title */}
                    <h2 className="section-title">My Achievements</h2>

                    {/* Social Links */}
                    <div className="social-links">
                        <a href="https://github.com" target="_blank" className="social-button github">
                            <FaGithub className="social-icon" /> GitHub
                        </a>
                        <a href="https://codewars.com" target="_blank" className="social-button codewars">
                            <FaCode className="social-icon" /> Codewars
                        </a>
                        <a href="https://hackerrank.com" target="_blank" className="social-button hackerrank">
                            <FaHackerrank className="social-icon" /> HackerRank
                        </a>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="image-section">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </div>
            </div>
        </section>
    );
}

export default Home;