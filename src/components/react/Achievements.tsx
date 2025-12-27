import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../../config";

export default function Achievements() {
    return (
        <section className="py-24 px-4 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white transition-colors">Hackathons & Awards</h2>
                        <div className="h-1 w-20 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-lg text-sm md:text-base transition-colors">
                        Beyond regular coding, I love participating in hackathons and competitions to test my skills under pressure.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {siteConfig.hackathons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-slate-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300"
                        >
                            <div className="absolute top-8 right-8 text-yellow-500/20 group-hover:text-yellow-500/40 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-16 h-16">
                                    <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.348zm7.92 7.249a5.25 5.25 0 003.093-4 5.25 5.25 0 003.093 4zm-7.463 1.25a.75.75 0 00.92-1.166 6.75 6.75 0 01-.113-10.457.75.75 0 00-1.059-1.062 8.25 8.25 0 00.138 12.685zM5 2.612c0-.5.5-.5.5.9.5 0 0 .5-.5-.9 0-1.14.3-2.24.84-3.21a.75.75 0 00-1.06-1.06 8.25 8.25 0 00.22 13.91v.01z" clipRule="evenodd" />
                                    {/* Simplified Trophy Icon path - or a standard one */}
                                    <path d="M9.603 12.637l5.297-6.52A7.108 7.108 0 0012 5.25a7.125 7.125 0 00-2.397.867z" />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors">{item.name}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed transition-colors">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill, i) => (
                                    <span key={i} className="text-xs px-2 py-1 bg-white dark:bg-zinc-800 text-yellow-700 dark:text-yellow-200/70 border border-yellow-500/30 rounded transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
