import React from 'react';

function Prodetail() {
  return (
    <div className="flex justify-center space-x-40 mb-12"> {/* Increased space between main divs */}
      <div className="flex flex-col w-1/4 bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* First row of images */}
        <div className="flex space-x-6"> {/* Horizontal spacing between images */}
          <img src="/src/assets/8.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
          <img src="/src/assets/11.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
        </div>
        {/* Second row of images */}
        <div className="flex space-x-6 mt-6"> {/* Horizontal spacing between images and margin-top */}
          <img src="/src/assets/14.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
          <img src="/src/assets/13.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
        </div>
        <h3 className="text-2xl font-semibold mt-6 mb-6 text-center">Project Usaari</h3> {/* Increased font size and margin */}
      <p className='text-center px-3'>Project Usaari, an initiative by Initiators of Change, has adopted government schools in Ludhiana and Delhi to provide free evening education to underprivileged children. This program aims to bridge the educational gap by offering supplementary classes, educational resources, digital literacy, skill development workshops, mentorship, and extracurricular activities. By creating a supportive learning environment, Project Usaari empowers students to excel academically and develop essential life skills, fostering a brighter future for them and their communities.</p></div>
      <div className="flex flex-col w-1/4 bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* First row of images */}
        <div className="flex space-x-6"> {/* Horizontal spacing between images */}
          <img src="/src/assets/17.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
          <img src="/src/assets/16.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
        </div>
        {/* Second row of images */}
        <div className="flex space-x-6 mt-6"> {/* Horizontal spacing between images and margin-top */}
          <img src="/src/assets/21.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
          <img src="/src/assets/22.jpg" alt="Awareness Projects" className="w-1/2 h-60 object-cover" /> {/* Increased image height */}
        </div>
        
        <h3 className="text-2xl mt-6 mb-6 font-semibold text-center">Project Saanjh</h3> {/* Increased font size and margin */}
        <p className='text-center py-5 px-3'>Project Saanjh, an initiative focused on mental health awareness, aims to help individuals navigate their mental health challenges. This project provides resources, support, and educational programs to promote mental well-being. One of its key events is Mann Mela, an annual gathering that features workshops, seminars, and activities designed to destigmatize mental health issues and provide practical tools for coping. Through Project Saanjh and Mann Mela, the initiative fosters a supportive community, encouraging open conversations about mental health and empowering individuals to seek help and support.</p>
      </div>
    </div>
  );
}

export default Prodetail;
