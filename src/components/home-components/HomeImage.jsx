import React from 'react';

const HomeImage = () => {
  return (
    <img
      src="images/Mikko.png"
      alt="Mikko"
      className="w-[300px] md:w-[350px] lg:w-[480px] h-auto object-cover select-none"
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
    />
  );
};

export default HomeImage;
