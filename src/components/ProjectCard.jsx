import React from "react";

function ProjectCard({ image, title, description }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img src={image} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-stone-700 text-xl mb-2">{title}</div>
        <p className="text-stone-600 text-base">{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      image: "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      image: "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        title: "Project 1",
        description: "Description for Project 1",
        image: "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
      }
    // Add more projects here as needed
  ];

  return (
    <div className="flex flex-wrap justify-center pt-10">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
}

export default Projects;
