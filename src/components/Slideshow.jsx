import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const images = [
  '35.jpg',
  '20.jpg',
  '34.jpg',
  '36.jpg'
];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={`/img/${image}`}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-start py-80 px-60">
        <div className="text-white justify-start text-2xl font-serif space-y-6">
          <h2>Welcome to Initiators of Change</h2>
          <p className="text-5xl">Creating Leaders, Changing Lives</p>
          <div className="mt-8 mx-3">
            <Link 
              to="/donate" 
              className="bg-inherit text-white mx-5 py-2 px-4 rounded-full text-xl font-bold border-2 border-white hover:bg-white hover:bg-opacity-20"
            >
              Donate Now 
            </Link>
            <Link 
              to="/joinus" 
              className="bg-inherit text-white mx-5 py-2 px-4 rounded-full text-xl font-bold border-2 border-white hover:bg-white hover:bg-opacity-20"
            >
              Join Us 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
