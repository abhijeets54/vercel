import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const handleHomeClick = (event) => {
    if (window.location.pathname === '/') {
      event.preventDefault();
      window.location.reload();
    }
  };

  const handleAboutClick = (event) => {
    if (location.pathname === '/') {
      event.preventDefault();
      document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      
      <nav className="bg-white p-4 shadow-3xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img className="w-15 h-12" src="/img/logo.jpg" alt="Logo" />
            <div className="text-black font-semibold text-3xl font-serif">Initiators of Change</div>
          </div>
          <div className="flex-1 flex justify-center">
            <ul className="flex space-x-4 items-center">
              <li>
                <a href="/" onClick={handleHomeClick} className="text-black font-semibold mx-3 text-2xl hover:text-red-500 border-b-3 border-transparent hover:border-red-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/" onClick={handleAboutClick} className="text-black font-semibold mx-3 text-2xl hover:text-red-500 border-b-3 border-transparent hover:border-red-500">
                  About
                </a>
              </li>
              <li>
                <Link to="/projects" className="text-black text-2xl mx-3 font-semibold hover:text-red-500 border-b-3 border-transparent hover:border-red-500">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-black text-2xl mx-3 font-semibold hover:text-red-500 border-b-3 border-transparent hover:border-red-500">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/joinus" className="text-black font-semibold mx-3 text-2xl hover:text-red-500 border-b-3 border-transparent mx-3 hover:border-red-500">
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="/donate" className="bg-red-500 mx-6 text-white py-2 px-5 rounded-full no-underline text-xl font-bold hover:bg-red-600 transition duration-300">
                  Donate
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
