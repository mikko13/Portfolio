import React from 'react';
import './HomeImage.css';
const HomeImageUI = ({ isVisible }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/Mikko.png`}
      alt="Mikko"
      className={`w-[300px] md:w-[350px] lg:w-[480px] h-auto object-cover select-none transition-all duration-1000 ease-out ${
        isVisible ? 'fade-up' : 'opacity-0 translate-y-5'
      }`}
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
    />
  );
};

export default HomeImageUI;
