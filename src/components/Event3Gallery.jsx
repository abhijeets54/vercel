import React from 'react';

const Event1Gallery = () => {
  return (
    <div className="text-center py-10 bg-gray-100">
      <h1 className="text-4xl font-bold font-serif mb-8">Youth Fest '23</h1>
      <div className="flex flex-wrap justify-center space-x-4">
        <div className="w-1/4 p-2">
          <img src="/img/28.jpg" alt="Event 1 Photo 1" className="w-full h-full object-contain" />
        </div>
        <div className="w-1/4 p-2">
          <img src="/img/29.jpg" alt="Event 1 Photo 2" className="w-full h-full object-contain" />
        </div>
        <div className="w-1/4 p-2">
          <img src="/img/30.jpg" alt="Event 1 Photo 3" className="w-full h-full object-contain" />
        </div>
        <div className="w-1/4 p-2">
          <img src="/img/31.jpg" alt="Event 1 Photo 4" className="w-full h-full object-contain" />
        </div>
        <div className="w-1/4 p-2">
          <img src="/img/32.jpg" alt="Event 1 Photo 5" className="w-full h-full object-contain" />
        </div>
        <div className="w-1/4 p-2">
          <img src="/img/33.jpg" alt="Event 1 Photo 6" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Event1Gallery;
