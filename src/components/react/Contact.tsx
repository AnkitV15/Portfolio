import React from "react";
import { siteConfig } from "../../config";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden transition-colors duration-300">
            {/* Background gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-purple-200/50 dark:from-purple-900/20 to-transparent pointer-events-none transition-colors duration-300"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-8 tracking-tighter transition-colors">
                    Let's Work Together
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 transition-colors">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>

                <a
                    href={`mailto:${siteConfig.social.email}`}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    Say Hello
                </a>
            </div>
        </section>
    );
}
