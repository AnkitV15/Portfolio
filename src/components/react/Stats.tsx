import React from "react";
import { motion } from "framer-motion";

const stats = [
    { label: "Years Coding", value: 4, suffix: "+" },
    { label: "Projects Built", value: 15, suffix: "+" },
    { label: "Commits", value: 500, suffix: "+" },
    { label: "Coffee Cups", value: 1000, suffix: "+" },
];

export default function Stats() {
    return (
        <section className="py-20 bg-slate-100/50 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-2 font-mono transition-colors"
                            >
                                {/* Simple counter simulation with css/keyframe or just static for reliability + visual pop */}
                                {stat.value}{stat.suffix}
                            </motion.div>
                            <span className="text-zinc-500 font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
