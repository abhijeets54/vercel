import React from 'react';

function Team() {
  return (
    <div id="about-us" className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-1/2">
        <img
          src="/src/assets/27.jpg"
          alt="Initiators of Change"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 bg-teal-700 flex items-center p-8">
        <div className="text-white space-y-4">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-lg">
            Initiators of Change is a national award-winning non-profit charitable organisation working on leadership development, education for all, social-political awareness of youth and disaster management in the states of Punjab and Delhi. Started with a team of four in 2015 in Ludhiana, IOC has now impacted lacs of young lives across the country by engaging over 3000 volunteers in several projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
