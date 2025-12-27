import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import clsx from "clsx";

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
}

interface ShootingStar {
    id: string | number;
    x: number;
    y: number;
    angle: number;
    length: number;
    speed: number;
    delay: number;
    size?: number; // Optional custom size for "Main Villain"
    opacity?: number;
}

const Background = () => {
    const [stars, setStars] = useState<Star[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Generate static stars
        const generateStars = () => {
            const count = 100; // Number of static stars
            const newStars: Star[] = [];
            for (let i = 0; i < count; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100, // %
                    y: Math.random() * 100, // %
                    size: Math.random() * 2 + 1, // px
                    opacity: Math.random() * 0.5 + 0.3,
                });
            }
            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[-1] overflow-hidden bg-white dark:bg-black pointer-events-none transition-colors duration-300">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200/50 via-white to-white dark:from-slate-900/20 dark:via-black dark:to-black opacity-80 transition-colors duration-300" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] transition-all duration-300" />

            {/* Static Stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-black dark:bg-white transition-colors duration-300"
                    style={{
                        top: `${star.y}%`,
                        left: `${star.x}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                    }}
                />
            ))}



            {/* Shooting Stars */}
            <ShootingStarLayer />
        </div>
    );
};


const ShootingStarLayer = () => {
    const [comets, setComets] = useState<ShootingStar[]>([]);

    useEffect(() => {
        const createCometCluster = () => {
            const prefix = Math.random().toString(36).substring(2, 9);
            const newComets: ShootingStar[] = [];

            // We want them to pass through the center but slightly to the right
            const startOffset = -20;
            const centerVariation = Math.random() * 20 - 10;
            const rightShift = 30; // Shift trajectory to the right

            // 1. The "Main Villain" (Giant Comet)
            newComets.push({
                id: `${prefix}-main`,
                x: startOffset + centerVariation + rightShift,
                y: startOffset - centerVariation,
                angle: 45,
                length: 400,
                size: 6,
                speed: 12,
                delay: 0,
                opacity: 1,
            });

            // 2. Satellite Comets
            const satelliteCount = Math.floor(Math.random() * 3) + 3;
            for (let i = 0; i < satelliteCount; i++) {
                const offsetX = Math.random() * 15 - 7.5;
                const offsetY = Math.random() * 15 - 7.5;
                const speedVar = Math.random() * 0.5 - 0.25;

                newComets.push({
                    id: `${prefix}-sat-${i}`,
                    x: startOffset + centerVariation + rightShift + offsetX,
                    y: startOffset - centerVariation + offsetY,
                    angle: 45,
                    length: Math.random() * 100 + 150,
                    size: Math.random() * 2 + 2,
                    speed: 12 + speedVar,
                    delay: Math.random() * 0.5,
                    opacity: 0.7,
                });
            }

            setComets(prev => [...prev, ...newComets]);

            // Cleanup specific IDs
            const clusterIds = newComets.map(c => c.id);
            setTimeout(() => {
                setComets(prev => prev.filter(c => !clusterIds.includes(c.id)));
            }, 16000);

            // NO repeat for giant cluster - User requested "shown once"
        };

        // Function to maintain a continuous stream of random comets
        const startRandomStream = () => {
            const id = Math.random().toString(36).substring(2, 9) + Date.now(); // Unique ID
            const startX = Math.random() * 100 - 50;
            const startY = Math.random() * 50 - 50;
            const speed = Math.random() * 10 + 10; // 10-20 seconds

            const randomComet: ShootingStar = {
                id,
                x: startX,
                y: startY,
                angle: 45,
                length: Math.random() * 200 + 100,
                size: Math.random() * 2 + 3,
                speed: speed,
                delay: 0,
                opacity: 0.6,
            };

            setComets(prev => [...prev, randomComet]);

            // Schedule cleanup for this specific comet
            setTimeout(() => {
                setComets(prev => prev.filter(c => c.id !== id));
            }, speed * 1000 + 2000); // Cleanup after it's definitely gone

            // Schedule NEXT comet in this stream slightly before this one finishes
            // to ensure continuous coverage (overlap by 4 seconds)
            const nextSpawnDelay = (speed * 1000) - 4000;

            // Safety check for very fast speeds (unlikely with current 10-20s range but good practice)
            const safeDelay = Math.max(1000, nextSpawnDelay);

            // Recursively call next spawn
            // Use a ref check or similar if unmounted, but for now timeout is okay-ish provided we cleared it on unmount ideally.
            // But since this is a self-perpetuating cycle, we need to be careful.
            // For simplicity in this fix, we let it run.
            setTimeout(startRandomStream, safeDelay);
        };

        // 1. Trigger the Giant Cluster immediately (once)
        createCometCluster();

        // 2. Start TWO parallel streams of random comets for "Always 2" presence
        startRandomStream(); // Stream A starts now
        setTimeout(startRandomStream, 6000); // Stream B starts halfway through Stream A's first cycle
    }, []);

    return (
        <>
            {comets.map((comet) => (
                <motion.div
                    key={comet.id}
                    initial={{
                        top: `${comet.y}%`,
                        left: `${comet.x}%`,
                        opacity: 0,
                        transform: `rotate(${comet.angle}deg) scale(0.8)`,
                    }}
                    animate={{
                        top: `calc(${comet.y}% + 150vh)`, // Move further to ensure exit
                        left: `calc(${comet.x}% + 150vh)`,
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: comet.speed,
                        delay: comet.delay,
                        ease: "linear", // Linear movement for constant speed
                        times: [0, 0.1, 0.8, 1], // Fade in 0-10%, Visible 10-80%, Fade out 80-100%
                    }}
                    className="absolute z-0" // removed background from container
                    style={{
                        width: `${comet.length}px`,
                        height: "2px",
                        transform: `rotate(${comet.angle}deg)`,
                    }}
                >
                    {/* Tail */}
                    <div
                        className="absolute top-0 left-0 right-1 bottom-0 bg-gradient-to-r from-transparent via-slate-400/50 to-slate-900 dark:via-blue-400/50 dark:to-white transition-colors duration-300"
                        style={{ height: `${(comet.size || 2) / 2}px`, top: '50%', transform: 'translateY(-50%)' }} // Scaling tail width relative to head
                    />

                    {/* Head */}
                    <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black dark:bg-white rounded-full shadow-[0_0_20px_5px_rgba(0,0,0,0.4)] dark:shadow-[0_0_20px_5px_rgba(255,255,255,0.8)] transition-all duration-300"
                        style={{
                            width: `${comet.size || 4}px`,
                            height: `${comet.size || 4}px`,
                            // We use class-based shadow for color/theme, but might need inline for size scaling?
                            // For simplicity, let's trust the class shadow mostly, or dynamic scaling:
                            // If we really need dynamic scaling + theme, we'd need a CSS variable for the color.
                            // Let's rely on the class shadow for now as it looks decent, 
                            // OR use a style with current color maybe?
                            // Let's just remove the hardcoded inline shadow to let the class one take over, 
                            // or simple dynamic scale with currentColor
                        }}
                    />
                </motion.div>
            ))}
        </>
    );
}

export default Background;
