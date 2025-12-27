import React, { useEffect } from "react";
import Navbar from "./components/react/Navbar";
import Hero from "./components/react/Hero";
import TechTicker from "./components/react/TechTicker";
import About from "./components/react/About";
import Stats from "./components/react/Stats";
import Experience from "./components/react/Experience";
import Projects from "./components/react/Projects";
import Achievements from "./components/react/Achievements";
import Terminal from "./components/react/Terminal";
import Contact from "./components/react/Contact";
import Footer from "./components/react/Footer";
import Background from "./components/react/Background";
import { siteConfig } from "./config";

function App() {
    useEffect(() => {
        document.title = `${siteConfig.name} - ${siteConfig.title}`;
    }, []);

    return (
        <div className="text-white min-h-screen selection:bg-purple-500/30 selection:text-purple-200 font-inter relative">
            <Navbar />
            <Background />

            <main>
                <Hero />
                <TechTicker />
                <About />
                <Stats />
                <Experience />
                <Projects />
                <Achievements />
                <Terminal />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
