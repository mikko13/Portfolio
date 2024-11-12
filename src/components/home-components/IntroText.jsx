import React from 'react';
import { ReactTyped } from 'react-typed';

const IntroText = () => {
  return (
    <div className="intro-text mt-0 md:mt-[-50px] text-center md:text-left flex flex-col items-center md:items-start w-[250px] md:w-[350px] lg:w-[400px]">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1C3C4D]">
        <span className="inline-block">
          <ReactTyped
            strings={["Hello!", "I'm Mikko!"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </span>
      </h1>
      <h2 className="text-lg md:text-xl lg:text-2xl italic text-[#1C3C4D] mb-4">
        <span className="inline-block">
          <ReactTyped
            strings={["3rd Year IT Student"]}
            typeSpeed={40}
            backSpeed={50}
            startDelay={1000}
            showCursor={false}
          />
        </span>
      </h2>
    </div>
  );
};

export default IntroText;
