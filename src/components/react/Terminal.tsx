import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../../config";

export default function Terminal() {
    const [output, setOutput] = useState<string[]>([
        "Welcome to Ankit's Interactive Terminal v1.0.0",
        "Type 'help' to see available commands.",
    ]);
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [output]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();
        let response = "";

        switch (cmd) {
            case "help":
                response = "Available commands: help, whoami, skills, contact, social, clear, projects";
                break;
            case "whoami":
                response = siteConfig.aboutMe;
                break;
            case "skills":
                response = `Tech Stack: ${siteConfig.skills.join(", ")}`;
                break;
            case "contact":
                response = `Email: ${siteConfig.social.email}`;
                break;
            case "social":
                response = `GitHub: ${siteConfig.social.github}\nLinkedIn: ${siteConfig.social.linkedin}\nTwitter: ${siteConfig.social.twitter}`;
                break;
            case "projects":
                response = "Check out my projects in the 'Selected Work' section above! Or type 'list-projects'";
                break;
            case "clear":
                setOutput([]);
                setInput("");
                return;
            case "":
                response = "";
                break;
            default:
                response = `Command not found: ${cmd}. Type 'help' for assistance.`;
        }

        if (cmd !== "clear") {
            setOutput([...output, `> ${input}`, response]);
        }
        setInput("");
    };

    return (
        <section className="py-24 px-4 bg-slate-50 dark:bg-zinc-950 font-mono transition-colors duration-300">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 text-center"
                >
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-500 mb-2 transition-all">
                        Dev Terminal
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-500 text-sm transition-colors">For the geeks who love CLIs</p>
                </motion.div>

                <div
                    className="bg-[#0c0c0c] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl dark:shadow-none transition-shadow"
                    onClick={() => inputRef.current?.focus()}
                >
                    {/* Terminal Header */}
                    <div className="bg-zinc-900/50 p-3 flex gap-2 border-b border-zinc-800">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        <div className="ml-auto text-xs text-zinc-600">bash</div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 h-[400px] overflow-y-auto text-sm md:text-base font-mono">
                        {output.map((line, i) => (
                            <div key={i} className="mb-2 whitespace-pre-wrap text-zinc-300">
                                {line.startsWith(">") ? (
                                    <span className="text-green-400">{line}</span>
                                ) : (
                                    <span>{line}</span>
                                )}
                            </div>
                        ))}

                        <form onSubmit={handleCommand} className="flex gap-2">
                            <span className="text-green-500">➜</span>
                            <span className="text-blue-500">~</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="bg-transparent border-none outline-none text-zinc-100 flex-1 focus:ring-0 p-0"
                            />
                        </form>
                        <div ref={bottomRef}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
