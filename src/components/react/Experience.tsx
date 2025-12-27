import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../../config";

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white transition-colors">Experience</h2>
                    <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto md:mx-0"></div>
                </motion.div>

                <div className="space-y-12">
                    {siteConfig.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline line for desktop */}
                            <div className="hidden md:block absolute left-[20%] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 transition-colors"></div>

                            <div className="md:flex gap-10 group">
                                {/* Date */}
                                <div className="md:w-[20%] pt-1 md:text-right relative">
                                    <div className="hidden md:block absolute right-[-25px] top-[10px] w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800 border-2 border-white dark:border-black group-hover:bg-blue-500 transition-colors z-10"></div>
                                    <span className="text-zinc-500 font-mono text-sm transition-colors">{exp.dateRange}</span>
                                </div>

                                {/* Content */}
                                <div className="md:w-[80%] bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm dark:shadow-none">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white transition-colors">{exp.title}</h3>
                                            <div className="text-blue-600 dark:text-blue-400 font-medium transition-colors">{exp.company}</div>
                                        </div>
                                        {exp.logo && (
                                            <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-zinc-100 p-1">
                                                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                                            </div>
                                        )}
                                    </div>

                                    <ul className="mt-4 space-y-2">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} className="flex gap-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full flex-shrink-0 transition-colors"></span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
