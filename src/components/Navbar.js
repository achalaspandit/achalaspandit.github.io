import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
    { name: "🥾 Trail Logs", to: "/experience" },
    { name: "🏕️ Campfire Builds", to: "/projects" },
    { name: "🗺️ Journey Map", to: "https://drive.google.com/file/d/1LwUmsD6yPQ6hi-ZH79GaOLiCUvFh3BJC/view", external: true },
];

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-background/80 dark:bg-darkBackground/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Name links to home */}
                <NavLink
                    to="/"
                    className="text-4xl font-grover text-primary dark:text-accent hover:scale-110 transition"
                >
                    Achala S Pandit
                </NavLink>

                {/* Navigation links */}
                <div className="flex space-x-3">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `text-lg font-medium px-2 py-1 transition-all duration-200 ${
                                    isActive
                                        ? "text-primary dark:text-orange-200"
                                        : "text-primary dark:text-gray-200"
                                } hover:scale-110`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;