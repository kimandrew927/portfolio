import React, { useState } from 'react';

export default function ProjectCard() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: "Fit Fuel",
      description: "Full Stack fitness based web-application (React, PHP, mySQL)",
      details: "Fit Fuel is a comprehensive fitness application that allows users to track their workouts, manage their diet, and connect with trainers. Built with React for the frontend, PHP for the backend, and mySQL for the database."
    },
    {
      title: "Personal Portfolio Website",
      description: "The frontend website you're looking at! (React/Vite)",
      details: "This portfolio website showcases my skills and projects. It is built using React and Vite for a fast and modern development experience."
    },
    {
      title: "Relational Database Emulator",
      description: "Fully functional Relational Database based on SQL written in Rust (Rust)",
      details: "A relational database emulator that supports SQL queries, implemented in Rust. It includes features like table creation, data insertion, and query execution. Using an optimized B+ tree I developed lard read/write operations from disk were 300% faster"
    }
  ];

  const handleMoreClick = (index) => {
    setExpandedProject(index);
  };

  const handleBackClick = () => {
    setExpandedProject(null);
  };

  return (
    <div className="project-card">
      <h2>Projects</h2>
      {expandedProject === null ? (
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <strong style={{ display: 'block', textAlign: 'center' }}>{project.title}</strong>
              <p>{project.description}</p>
              <button onClick={() => handleMoreClick(index)}>More</button>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h3 style={{ textAlign: 'center' }}>{projects[expandedProject].title}</h3>
          <p>{projects[expandedProject].details}</p>
          <button onClick={handleBackClick}>Back</button>
        </div>
      )}
    </div>
  );
}