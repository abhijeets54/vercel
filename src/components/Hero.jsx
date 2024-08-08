import React from 'react';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-orange-500 p-8">
      <div className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left text-white px-4 md:px-8 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">From Chairman's Desk</h2>
        <p className="text-lg md:text-xl">
          “Trust the young with the world and see them create wonders.” We at IOC have been extremely fortunate to have built a space for the youth to unlock their full potential and serve the society while creating a family for themselves. We don’t aim to become the biggest organisation in terms of numbers but rather we aspire to be the happiest and the most constructive place for the youth to become the leaders of tomorrow. In a world full of competition, there has to be a space where we focus on each other’s growth, where we focus on creating sustainable solutions for the less fortunate and where we build aspirations and achieve them together. Initiators of Change is just that space. I welcome you to our family, let’s heal the world together.
        </p>
        <p className="text-lg md:text-xl font-semibold">
          - Gauravdeep Singh, Founder and Chairman
        </p>
      </div>
      <div className="w-full md:w-1/3 flex items-center justify-center p-4">
        <img
          src="/src/assets/6.jpg"
          alt="Chairman"
          className="w-full h-auto md:w-3/4 border-4 border-white"
        />
      </div>
    </div>
  );
}

export default Hero;
