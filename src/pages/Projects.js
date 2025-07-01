import React from "react";
import ProjectCard from "../components/ProjectCard";


const projects = [
    {
        title: "AI-Powered Job Application Automation Workflow",
        description: "An intelligent, LangGraph-orchestrated AI workflow that automates job application tracking. It fetches job listings from a URL, extracts structured details and appends them to a CSV tracker.",
        tech: ["Python", "LangGraph", "Gemini API", "Jina AI Reader", "Pydantic"],
        github: "https://github.com/achalaspandit/ai-job-app-tracker",
        demo: "", 
        image: "" 
    },
    {
        title: "Portfolio Website",
        description: "This portfolio website built with React and Tailwind CSS.",
        tech: ["React", "Tailwind CSS"],
        github: "https://github.com/achalaspandit/achalaspandit.github.io",
        demo: "",
        image: "",
    },
];

function Projects() {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-6 text-primary dark:text-orange-300">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
