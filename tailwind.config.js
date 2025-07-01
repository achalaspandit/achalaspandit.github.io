module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            colors: {
            primary: "#023b1e",     // Forest green
            accent: "#f97316",      // Orange (like a campfire)
            background: "#fefae0",  // Warm off-white
            darkBackground: "#1a1f1c", // For dark mode
            darkCard: "#2f3e34",    // For dark cards
            },
            fontFamily: {
                body: ["Forum", "serif"],
                grover: ["Barriecito", "system-ui"],
            },
        },
    },
    plugins: [],
};