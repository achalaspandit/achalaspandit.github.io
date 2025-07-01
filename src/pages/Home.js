import React from "react";
import profileImg from "../assets/profile_picture.jpeg";
import { FaBrain, FaChartBar, FaRobot, FaDatabase, FaProjectDiagram, FaCompass } from "react-icons/fa";

const interests = [
  {
    icon: <FaRobot size={48} />,
    title: "AI & Automation",
    description: "AI brings systems to life. I focus on developing smart agents and tools that streamline complex workflows and boost efficiency.",
  },
  {
    icon: <FaBrain size={48} />,
    title: "Machine Learning",
    description: "ML enables systems to learn from data. I build and fine-tune models to extract insights and drive intelligent decision-making.",
  },
  {
    icon: <FaDatabase size={48} />,
    title: "Data Engineering",
    description: "Data engineering builds the foundation. I design and optimize scalable pipelines and infrastructure to ensure data is robust and accessible.",
  },
  {
    icon: <FaChartBar size={48} />,
    title: "Data Visualization",
    description: "Visuals transform data into understanding. I craft compelling dashboards and interactive tools to tell clear, impactful stories from data.",
  },
  
  {
    icon: <FaProjectDiagram size={48} />,
    title: "Full-Stack Development",
    description: "Full-stack brings ideas to life from end-to-end. I craft responsive, user-friendly applications, handling both front-end experiences and backend logic.",
  },
  {
    icon: <FaCompass size={48} />,
    title: "Exploration",
    description: "Beyond defined paths, exploration fuels growth. I'm always seeking new technologies, diverse perspectives, and real-world problems to solve.",
  },
];

function Home() {
  return (
    <section className="min-h-screen px-6 py-2 bg-background dark:bg-darkBackground text-primary dark:text-orange-200">
      {/* Intro Row */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-6">
        <img
          src={profileImg}
          alt="Achala Profile"
          className="w-44 h-44 rounded-full object-cover border-4 border-primary dark:border-orange-200 shadow"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-body font-bold mb-2">Hi, I'm Achala</h1>
          <h2 className="text-xl font-body text-gray-800 dark:text-gray-200">
            Building Intelligent Solutions Through Data, Code, and Curiosity
          </h2>
        </div>
      </div>
      {/* About Section */}
      <div className="mb-6 max-w-3xl">
        <p className="text-base font-body text-gray-800 dark:text-gray-200">
          Welcome to my corner of the web! My venture into technology has unfolded like a grand hiking adventure. My initial spark wasn't a sudden summit, but a gradual realization – that the deliberate, creative process of programming and building brought an incredible and enduring satisfaction, compelling me deeper into the tech wilderness.
        </p>
        <p className="text-base font-body text-gray-800 dark:text-gray-200">
          I've always been driven by the belief that technology, especially AI and robotics, isn't just about code; it's about profoundly transforming how we work and live by unraveling complex challenges. From driving impactful projects like our award-winning AI assistant for dementia patients at AI LA's Cerebral Beach Hacks to contributing to cutting-edge research as an NSF as a Data Science Fellow, I thrive on leading and collaborating with bright minds, always approaching challenges with an optimistic, yet realistic, outlook.
        </p>
        <p className="text-base font-body text-gray-800 dark:text-gray-200">
          When I'm not diving into the latest tech, you'll find me out on a hiking trail, experimenting in the kitchen with new recipes, or planning exciting adventures with my family and friends – because a well-rounded life, just like a well-engineered solution, is built on diverse experiences and connections.
        </p>
      </div>

      {/* Areas of Interest */}
      <div>
        <h3 className="font-body text-2xl font-semibold mb-6">Areas of Interest</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {interests.map((item, index) => (
            <div
              key={index}
              className="bg-green-100 dark:bg-darkCard p-4 rounded-xl shadow hover:scale-[1.02] transition-transform text-center" 
            >
              <div className="flex flex-col font-body items-center justify-center mb-2 text-primary dark:text-orange-200"> 
                {item.icon}
                {/* No gap-3 needed here anymore as items are stacked */}
              </div>
              <h4 className="text-lg font-body font-semibold mb-1">{item.title}</h4> {/* Added mb-1 for spacing */}
              <p className="text-sm font-body text-gray-800 dark:text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
