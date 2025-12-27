import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../../config";

export default function About() {
    return (
        <section id="about" className="py-24 px-4 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white transition-colors">About & Skills</h2>
                    <div className="h-1 w-20 bg-green-500 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* About Text Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 md:col-span-2 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl transition-colors duration-300"
                    >
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 transition-colors">Who I am</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg transition-colors">
                            {siteConfig.aboutMe}
                        </p>
                    </motion.div>

                    {/* Location / Status Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 bg-gradient-to-br from-white to-slate-100 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700/50 p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden group transition-all duration-300"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-black dark:text-white transition-colors">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 transition-colors">Based in</h3>
                        <p className="text-2xl text-green-600 dark:text-green-400 font-mono transition-colors">{siteConfig.location}</p>
                        <div className="mt-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-zinc-600 dark:text-zinc-400 text-sm transition-colors">Open to opportunities</span>
                        </div>
                    </motion.div>

                    {/* Skills Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 md:col-span-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl transition-colors duration-300"
                    >
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 transition-colors">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {siteConfig.skills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-4 py-2 bg-slate-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-200 dark:border-zinc-700 text-sm font-medium cursor-default transition-colors hover:bg-slate-200 dark:hover:bg-zinc-700"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
