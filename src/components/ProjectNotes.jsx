import React from 'react';

const ProjectNotes = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">LANL Risk Modeling Project</h3>
      <div className="space-y-4">
        <p className="text-gray-700">
          Key findings and documentation from the Los Alamos National Laboratory risk modeling project.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Developed comprehensive risk assessment methodology</li>
          <li>Created standardized evaluation criteria</li>
          <li>Enhanced risk visibility and decision-making process</li>
          <li>Improved resource allocation strategies</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectNotes;