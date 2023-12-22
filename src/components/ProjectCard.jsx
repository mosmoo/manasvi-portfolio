import React from "react";

function ProjectCard({ image, title, description, link }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img src={image} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-stone-700 text-xl mb-2">{title}</div>
        <p className="text-stone-600 text-base">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-4 text-blue-500 font-semibold hover:text-blue-700"
        >
          View
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Munch Meet",
      description:
        "Crafted a dynamic food-centric platform merging Django PostgreSQL backend with React Node.js frontend, fostering a vibrant community sharing delectable food experiences and locations.",
      image: "https://i.postimg.cc/d1nW353c/Munch-Meet.png",
      link: "https://munch-meet.netlify.app",
    },
    {
      title: "Food Wars",
      description:
        "Welcome to 'Food Wars,' a captivating MERN stack app that invites anime enthusiasts into the vibrant world of culinary creativity. Delve into a comprehensive catalogue of characters and their tantalizing dishes from the beloved anime 'Food Wars,' while experiencing seamless user interactions.",
      image: "https://i.postimg.cc/MZVJDQHk/FoodWars.png",
      link: "https://food-wars.netlify.app/", // Replace with your actual link
    },
    {
      title: "Pixel Art Game",
      description:
        "Discover a charming pixel art game made using just Vanilla JavaScript. Dive into a nostalgic adventure where every pixel creates a simple, delightful experience. It's a fun journey into classic gaming simplicity!",
      image:
        "https://i.postimg.cc/FRzMhzXh/Screenshot-2023-12-21-at-10-28-52-PM.png",
      link: "https://mosmoo.github.io/Pixel-Art-Game/", // Replace with your actual link
    },
  ];

  return (
    <div className="pt-10 ">
      <marquee behavior="scroll" direction="down" scrollamount="1" loop="1">
        <h1 style={{ textAlign:"center", fontFamily: "'Kalnia', serif" }} className="text-3xl text-slate-600 p-3"> Projects </h1>
      </marquee>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
