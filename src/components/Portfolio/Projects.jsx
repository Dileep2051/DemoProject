import React from "react";

const Projects = () => {
  const projects = [
    { title: "Ultimatix", description: "An internal project for efficient resource management." },
    { title: "Portfolio Website", description: "This portfolio is built using React and Tailwind CSS." },
  ];

  return (
    <section id="projects" className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
