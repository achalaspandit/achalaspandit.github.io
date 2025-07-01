import React, { useState, useEffect } from "react";

function DarkModeToggle() {
    const [dark, setDark] = useState(() =>
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    return (
        <button
            className="fixed bottom-6 right-6 bg-green-200 dark:bg-green-800 p-2 rounded-full shadow-lg transition"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
        >
            {dark ? (
                <span role="img" aria-label="Light mode">
                    🌞
                </span>
            ) : (
                <span role="img" aria-label="Dark mode">
                    🌙
                </span>
            )}
        </button>
    );
}

export default DarkModeToggle;