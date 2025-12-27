import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { siteConfig } from "../../config";

import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 inset-x-0 h-16 z-50 flex items-center justify-center px-4 pt-4"
        >
            <div className="bg-white/50 dark:bg-black/50 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full px-6 py-3 flex items-center gap-6 shadow-lg transition-colors duration-300">
                <a href="#" className="font-bold text-foreground text-lg tracking-tight">
                    AV.
                </a>

                <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">
                        About
                    </a>
                    <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">
                        Projects
                    </a>
                    <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">
                        Experience
                    </a>
                    <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">
                        Contact
                    </a>
                </div>

                <div className="flex items-center gap-4 border-l border-zinc-200 dark:border-zinc-800 pl-6 transition-colors duration-300">
                    <ThemeToggle />

                    <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                    </a>

                    <a
                        href={siteConfig.social.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
