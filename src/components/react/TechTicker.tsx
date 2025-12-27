import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../../config";

export default function TechTicker() {
    // We need enough items to fill the screen width plus some buffer to ensure smooth looping
    // Tripling the list usually ensures it's long enough
    const skills = [...siteConfig.skills, ...siteConfig.skills, ...siteConfig.skills];

    return (
        <section className="py-10 overflow-hidden border-y border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
            <div className="flex whitespace-nowrap overflow-hidden mask-image-linear-gradient">
                <motion.div
                    className="flex gap-16 pr-16" // Add padding-right to maintain gap between loops
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30, // Slower for better readability
                        ease: "linear",
                        repeat: Infinity
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Render the full list twice effectively in one big container */}
                    {/* Actually, the cleaner way is to just render the list twice in this container 
                and move -50% if the list is identical halves. 
                But since 'skills' is already tripled, let's just render it once big enough 
                and duplicate THAT whole block for the seamless effect. 
             */}

                    {/* Let's try the "Twin Container" approach which is more robust for widths */}
                    {skills.map((skill, index) => (
                        <div key={`set1-${index}`} className="flex items-center gap-2">
                            <span className="text-4xl text-zinc-300 dark:text-zinc-800 transition-colors">•</span>
                            <span className="text-2xl md:text-4xl font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter hover:text-black dark:hover:text-white transition-colors cursor-default">
                                {skill}
                            </span>
                        </div>
                    ))}

                    {/* Duplicate set for loop */}
                    {skills.map((skill, index) => (
                        <div key={`set2-${index}`} className="flex items-center gap-2">
                            <span className="text-4xl text-zinc-300 dark:text-zinc-800 transition-colors">•</span>
                            <span className="text-2xl md:text-4xl font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter hover:text-black dark:hover:text-white transition-colors cursor-default">
                                {skill}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
