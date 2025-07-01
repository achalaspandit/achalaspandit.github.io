import React from "react";
import profileImg from "../assets/profile_picture.jpeg";


const skills = [
    "Python",
    "R",
    "Machine Learning",
    "Deep Learning",
    "Data Visualization",
    "SQL",
    "Pandas",
    "TensorFlow",
    "React",
];

function About() {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-4 text-primary dark:text-accent">Trail Notes</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                    src={profileImg}
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-cover border-4 border-green-300 dark:border-green-800 shadow-lg"
                />
                <div>
                    <p className="mb-4 text-primary dark:text-orange-200">
                        I'm Achala, a passionate Data Scientist with experience in building predictive models, data pipelines, and insightful dashboards. I enjoy solving real-world problems using data and collaborating with cross-functional teams. Outside of work, you'll find me hiking trails, discovering hidden food gems, or diving into spontaneous adventures.
                    </p>
                    <h3 className="font-semibold mb-2 text-lg text-primary dark:text-accent">Key Skills:</h3>
                    <ul className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <li
                                key={skill}
                                className="bg-green-100 dark:bg-green-800 text-primary dark:text-orange-200 px-3 py-1 rounded-full shadow text-sm transition-all"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    );
}
export default About;