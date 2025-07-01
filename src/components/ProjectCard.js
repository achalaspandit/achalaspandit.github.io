function ProjectCard({ project }) {
    return (
        <div className="bg-green-100 dark:bg-darkCard rounded-lg shadow p-4 flex flex-col">
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="rounded mb-3 h-40 object-cover"
                />
            )}
            <h3 className="font-body text-lg text-primary dark:text-orange-300 font-semibold mb-1">{project.title}</h3>
            <p className="font-body text-base text-gray-800 dark:text-gray-200 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="bg-darkCard dark:bg-green-100 font-body text-gray-100 dark:text-gray-800 px-2 py-0.5 rounded text-xs"
                    >
                        {t}
                    </span>
                ))}
            </div>
            <div className="mt-auto flex space-x-2">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-semibold text-accent dark:text-green-200 hover:underline"
                    >
                        GitHub
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-semibold text-accent dark:text-green-200 hover:underline"
                    >
                        Demo
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;