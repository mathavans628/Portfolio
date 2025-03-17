import React, { useState, useEffect, useCallback } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ScrollIndicator from "./components/ScrollIndicator";
import "./styles/global.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    const sections = ["home", "projects", "skills", "contact"];
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const bottomPosition = window.scrollY + windowHeight;

    let newActiveSection = "home";

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          newActiveSection = section;
          break;
        }
      }
    }

    // Ensure "contact" is selected when scrolled to the bottom
    if (bottomPosition >= documentHeight - 10) {
      newActiveSection = "contact";
    }

    setActiveSection((prev) => (prev !== newActiveSection ? newActiveSection : prev));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="container">
      <Navbar activeSection={activeSection} />
      <ScrollIndicator />
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;