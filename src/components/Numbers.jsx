import React, { useEffect, useState } from 'react';

function NumberCounter({ targetNumber, duration, label }) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const startTimestamp = performance.now();

    const step = (timestamp) => {
      const progress = timestamp - startTimestamp;
      const newNumber = Math.min(Math.floor((progress / duration) * targetNumber), targetNumber);
      setNumber(newNumber);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [targetNumber, duration]);

  return (
    <div className="flex flex-col items-center justify-center h-52 bg-[#F6D3CB] p-4 rounded-lg">
      <h2 className="text-6xl font-bold text-[#57305F]">{number}+</h2>
      <p className="text-xl text-[#57305F]">{label}</p>
    </div>
  );
}

function Numbers() {
  return (
    <div className="flex flex-wrap justify-around items-center space-y-4 md:space-y-0 bg-[#F6D3CB] py-10">
      <NumberCounter targetNumber={150} duration={2000} label="Volunteers" />
      <NumberCounter targetNumber={10} duration={2000} label="Schools adopted" />
      <NumberCounter targetNumber={1000} duration={2000} label="Students impacted" />
    </div>
  );
}

export default Numbers;
