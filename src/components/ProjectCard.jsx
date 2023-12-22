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
      title: "Munch Meet",
      description: "Crafted a dynamic food-centric platform merging Django PostgreSQL backend with React Node.js frontend, fostering a vibrant community sharing delectable food experiences and locations.",
      image: "https://i.postimg.cc/d1nW353c/Munch-Meet.png",
    },
    {
      title: "Food Wars",
      description: "Welcome to 'Food Wars,' a captivating MERN stack app that invites anime enthusiasts into the vibrant world of culinary creativity. Delve into a comprehensive catalogue of characters and their tantalizing dishes from the beloved anime 'Food Wars,' while experiencing seamless user interactions.",
      image: "https://i.postimg.cc/MZVJDQHk/FoodWars.png",
    },
    {
        title: "Pixel Art Game",
        description: "Discover a charming pixel art game made using just Vanilla JavaScript. Dive into a nostalgic adventure where every pixel creates a simple, delightful experience. It's a fun journey into classic gaming simplicity!",
        image: "https://i.postimg.cc/FRzMhzXh/Screenshot-2023-12-21-at-10-28-52-PM.png",
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
