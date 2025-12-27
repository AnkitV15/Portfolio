import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9" />; // Avoid hydration mismatch
    }

    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || (theme === "system" && isSystemDark);

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
        >
            {isDark ? (
                <Moon className="w-5 h-5 text-zinc-900 dark:text-white" />
            ) : (
                <Sun className="w-5 h-5 text-zinc-900 dark:text-white" />
            )}
        </button>
    );
}
