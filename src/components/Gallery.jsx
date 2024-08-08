import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div className="text-center py-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      <div className="flex flex-wrap justify-center space-x-4">
        <Link to="/gallery/event1" className="w-1/5 bg-white shadow-lg rounded-lg overflow-hidden m-4">
          <img src="/src/assets/24.jpg" alt="Event 1" className="w-full h-48 object-cover" />
          <h3 className="text-xl mt-4 mb-4">Mann Mela '24</h3>
        </Link>
        <Link to="/gallery/event2" className="w-1/5 bg-white shadow-lg rounded-lg overflow-hidden m-4">
          <img src="/src/assets/15.jpg" alt="Event 2" className="w-full h-48 object-cover" />
          <h3 className="text-xl mt-4 mb-4">I vote, I Lead</h3>
        </Link>
        <Link to="/gallery/event3" className="w-1/5 bg-white shadow-lg rounded-lg overflow-hidden m-4">
          <img src="/src/assets/28.jpg" alt="Event 3" className="w-full h-48 object-cover" />
          <h3 className="text-xl mt-4 mb-4">Youth Fest '23</h3>
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
