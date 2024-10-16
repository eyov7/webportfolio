import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'ML Image Classifier', description: 'A machine learning project that classifies images.' },
    { title: 'Web Scraping Tool', description: 'A Python-based web scraping tool for data collection.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p>{project.description}</p>
          <a href="#" className="text-blue-500 hover:underline">View project</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;