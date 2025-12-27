import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../../config";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white transition-colors">Selected Work</h2>
                    <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {siteConfig.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group relative block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 flex flex-col shadow-sm dark:shadow-none"
                        >
                            {/* Image Section - Clickable to Live */}
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="aspect-video bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden block cursor-pointer">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-zinc-900 opacity-60 transition-colors duration-300"></div>

                                {/* Floating Action Button */}
                                <div className="absolute top-4 right-4 p-2 bg-black/10 dark:bg-white/10 backdrop-blur-sm rounded-full text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </a>

                            <div className="p-6 relative z-10 -mt-12 bg-gradient-to-t from-white via-white to-transparent dark:from-zinc-900 dark:via-zinc-900 transition-colors duration-300 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                        {project.name}
                                    </a>

                                    {/* Links Row */}
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                                                title="View Source Code"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                            </a>
                                        )}

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                            title="Live Demo"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3 leading-relaxed transition-colors">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.skills.map((skill, i) => (
                                        <span key={i} className="text-xs px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full border border-zinc-200 dark:border-zinc-700/50 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
