import React from 'react';


const Projects = () => {
  return (
    <div className="text-center py-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Our Three Pillars</h1>
      <div className="flex justify-center space-x-4 mb-8">
        <div className="w-1/5 bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/src/assets/8.jpg" alt="Awareness Projects" className="w-full h-48 object-cover" />
          <h3 className="text-xl mt-4 mb-4">Education </h3>
        </div>
        <div className="w-1/5 bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/src/assets/7.jpg" alt="Education Projects" className="w-full h-48 object-cover" />
          <h3 className="text-xl mt-4 mb-4">Awareness </h3>
        </div>
        <div className="w-1/5 bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/src/assets/9.jpg" alt="Humanitarian Projects" className="w-full h-48 object-cover" />
          <h3 className="text-xl mt-4 mb-4">Humanitarian Aid</h3>
        </div>
      </div>
    
    </div>
  );
}

export default Projects;
