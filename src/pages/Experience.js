import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import { createPortal } from 'react-dom';

const experiences = [
    {
        id: 1,
        role: "AI Engineer",
        company: "VAAP Technologies",
        duration: "March 2025 – Present",
        description: `Provide strategic guidance to stakeholders on ways to onboard machine learning and AI solutions to streamline complex workflows and reduce redundancies by 60%.
        Enable seamless integration of agent AI workflows in company products and incorporate continuous feedback systems.`,
    },
    {
        id: 2,
        role: "Robotics Lab Student Assistant II",
        company: "Orbach Library, University of California, Riverside",
        duration: "September 2024 – March 2025",
        description: `Directed 15+ projects through ideation, prototyping and hands-on workshops in python programming, designing Internet of Things(IOT) systems and constructing monitoring and reporting systems.
        Analyzed various lightweight statistical and vision models to design efficient navigation systems for robot controlled cars in resource constrained environments.
`,
    },
    {
        id: 3,
        role: "Data Science Fellow",
        company: "National Science Foundation - UCR",
        duration: "June 2024 - August 2024",
        description: `Developed a scalable ETL pipeline to automate labeling LiDAR and image training data for self-driving cars, increasing efficiency by 25% using OpenPCDet and multiple state of the art pretrained models.
        Integrated data and sensor fusion techniques into the pipeline we enhanced 3D road scene understanding by at least 20% and confidence and accuracy of object detection by 60%.`
    },
    {
        id: 4,
        role: "Associate Software Engineer",
        company: "Accenture",
        duration: "September 2021 – July 2023",
        description: "Improved big data pipelines by benchmarking, tuning, and profiling across various systems. Gained strong experience working with Spark, Hadoop, and performance monitoring tools.",
    },
    {
        id: 5,
        role: "Software Developer Intern",
        company: "RenderPub",
        duration: "January 2021 – June 2021",
        description: `Implemented panorama stitching to merge 6 scene images into a single 360° panoramic view and graph algorithms to track user navigation paths in VR environments in an early stage startup.
        Developed interactive 3D scenes using ThreeJS and React with WebGL for browser-based rendering.`,
    },
    {
        id: 6,
        role: "Machine Learning Instructor",
        company: "Prinston Smart Engineers",
        duration: "July 2020 – April 2021",
        description: `Conducted Introductory course to Machine Learning for 6 batches 50+ students each for a duration of one month.
        Designed the course to help develop an intuition to classification and regression algorithms, guiding students with projects using relevant datasets, and help assess and enhance algorithm performance.`,
    },
];

// ExperienceModal remains unchanged, but its usage will be conditional
const ExperienceModal = ({ experience, onClose }) => {
    const getIcon = (role) => {
        switch (role) {
            case "AI Engineer":
                return "🧠";
            case "Robotics Lab Student Assistant II":
                return "🤖";
            case "Data Science Fellow":
                return "📊";
            case "Associate Software Engineer":
                return "⚙️";
            case "Software Developer Intern":
                return "✨";
            case "Machine Learning Instructor":
                return "👨‍🏫";
            default:
                return "🚀";
        }
    };

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white dark:bg-darkCard text-primary dark:text-background
                                rounded-lg shadow-2xl p-8 max-w-xl w-full mx-auto relative
                                transform scale-100 transition-all duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-primary dark:text-background text-2xl font-bold
                                hover:text-accent dark:hover:text-accent transition-colors"
                    aria-label="Close"
                >
                    &times;
                </button>

                <div className="text-5xl text-center mb-4">{getIcon(experience.role)}</div>
                <h2 className="font-grover text-3xl text-center mb-2">{experience.role}</h2>
                <p className="text-xl text-center font-body mb-2 text-gray-700 dark:text-gray-300">{experience.company}</p>
                <p className="text-lg text-center font-body text-gray-500 dark:text-gray-400 mb-6">{experience.duration}</p>
                <div className="border-t border-primary dark:border-darkBackground pt-6">
                    <p className="text-lg text-gray-800 dark:text-gray-200 font-body whitespace-pre-line">{experience.description}</p>
                </div>
            </motion.div>
        </motion.div>,
        document.body
    );
};

const Experience = () => {
    // This state now tracks the ID of the experience currently expanded in portrait mode,
    // or the ID of the experience whose modal is open in landscape mode.
    const [selectedExperienceId, setSelectedExperienceId] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // Get the actual experience object for the modal
    const selectedExperience = experiences.find(exp => exp.id === selectedExperienceId);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Effect for handling body scroll lock only for the modal (landscape)
    useEffect(() => {
        if (!isMobile && selectedExperienceId) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Cleanup function for when component unmounts or selectedExperienceId/isMobile changes
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedExperienceId, isMobile]);

    // Define the SVG path data (only used for non-mobile)
    const svgPath = `
        M 50 150
        C 200 50, 350 250, 550 150
        S 750 50, 950 150
        S 1150 250, 1350 150
    `;

    // Define points along the path for each experience. (only used for non-mobile)
    const experiencePositions = [
        { x: 150, y: 85, alignment: 'top' },    // AI Engineer
        { x: 340, y: 200, alignment: 'bottom' }, // Robotics Lab
        { x: 550, y: 95, alignment: 'top' }, // Data Science Fellow
        { x: 790, y: 125, alignment: 'bottom' },    // Associate Software Engineer
        { x: 1050, y: 135, alignment: 'top' }, // Software Developer Intern
        { x: 1250, y: 250, alignment: 'bottom' },   // Machine Learning Instructor
    ];

    const handleCardClick = (id) => {
        if (isMobile) {
            // Toggle expanded state for mobile
            setSelectedExperienceId(prevId => (prevId === id ? null : id));
        } else {
            // Open modal for landscape
            setSelectedExperienceId(id);
        }
    };

    const handleCloseModal = () => {
        setSelectedExperienceId(null);
    };

    return (
        <div>
            <h1 className="font-body text-3xl font-bold mb-2 text-primary dark:text-orange-300">Trail Logs</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 font-body">
                {isMobile ? "Tap on an experience to expand details!" : "Click on a landmark to learn more about my experience!"}
            </p>

            {isMobile ? (
                // Portrait (Mobile) Layout - Use motion.div with layout for smooth re-layout
                <motion.div layout className="flex flex-col items-center space-y-4 py-8 px-4"> {/* Added px-4 for padding on edges */}
                    {experiences.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            experience={exp}
                            onClick={handleCardClick}
                            isMobile={true}
                            isExpanded={selectedExperienceId === exp.id} // Control expansion via prop
                        />
                    ))}
                </motion.div>
            ) : (
                // Landscape (Laptop) Layout - Original SVG
                <div className="relative w-full max-w-screen-xl mx-auto" style={{ height: '350px' }}>
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 1400 350"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" className="stop-color-primary" />
                                <stop offset="50%" className="stop-color-primary" />
                                <stop offset="100%" className="stop-color-primary" />
                            </linearGradient>
                        </defs>

                        {/* The main trail path */}
                        <path
                            d={svgPath}
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="25"
                            strokeLinecap="round"
                        />

                        {/* Render ExperienceCards (small cards + dots) along the path */}
                        {experiences.map((exp, index) => {
                            const pos = experiencePositions[index];
                            if (!pos) return null;

                            return (
                                <ExperienceCard
                                    key={exp.id}
                                    experience={exp}
                                    onClick={handleCardClick}
                                    x={pos.x}
                                    y={pos.y}
                                    alignment={pos.alignment}
                                    // isSelected will only highlight the dot, modal is separate
                                    isSelected={selectedExperienceId === exp.id}
                                />
                            );
                        })}
                    </svg>
                </div>
            )}
            
            {/* AnimatePresence for the modal (only appears in landscape) */}
            <AnimatePresence>
                {!isMobile && selectedExperience && (
                    <ExperienceModal
                        experience={selectedExperience}
                        onClose={handleCloseModal}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Experience;