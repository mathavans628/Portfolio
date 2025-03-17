import React, { useEffect, useState } from "react";
import "../styles/scrollIndicator.css";

function ScrollIndicator() {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            setScrollWidth(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <div className="scroll-indicator" style={{ width: `${scrollWidth}%` }} />;
}

export default ScrollIndicator;