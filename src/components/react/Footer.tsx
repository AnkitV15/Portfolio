import React from "react";
import { siteConfig } from "../../config";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-zinc-200 dark:border-zinc-900 text-center transition-colors duration-300">
            <div className="flex justify-center gap-6 mb-4">
                <a href={siteConfig.social.github} target="_blank" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">GitHub</a>
                <a href={siteConfig.social.linkedin} target="_blank" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
                <a href={siteConfig.social.twitter} target="_blank" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Twitter</a>
            </div>
            <p className="text-zinc-500 dark:text-zinc-600 text-sm transition-colors">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
        </footer>
    );
}
