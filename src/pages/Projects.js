import React from "react";
import ProjectCard from "../components/ProjectCard";


const projects = [
    {
        title: "AI-Powered Job Application Automation Workflow",
        description: "An intelligent, LangGraph-orchestrated AI workflow that automates job application tracking. It fetches job listings from a URL, extracts structured details and appends them to a CSV tracker.",
        tech: ["Python", "LangGraph", "LLM", "Jina AI Reader", "Pydantic"],
        github: "https://github.com/achalaspandit/ai-job-app-tracker",
        demo: "", 
        image: "" 
    },
    {
        title: "Patronus - A spell against dementia",
        description: `Patronus is an award-winning multimodal AI assistant, developed in under 24 hours, designed to support dementia patients through text, speech, image, and video interaction while ensuring maximum safety and minimizing hallucinations. This innovative project received top honors in the "Responsible AI" and "Most Innovative Product" challenges, along with recognition in the "Most Fundable Startup Track."`,
        tech: ["LangChain", "LLM", "Retreival Augmented Generation", "Flask", "React Native", "Qdrant", "MongoDB"],
        github: "https://github.com/CB2024PAV",
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
            <h2 className="font-body text-3xl font-bold mb-6 text-primary dark:text-orange-300">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
