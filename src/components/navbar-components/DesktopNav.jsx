import React from 'react';

const DesktopNav = () => {
  return (
    <ul className="hidden md:flex flex-2 justify-end items-center space-x-12">
      <li><a href="#home" className="text-[#1c3c4d] font-bold relative hover:text-[#C28957] transition-colors duration-300">Home</a></li>
      <li><a href="#about" className="text-[#1c3c4d] font-bold relative hover:text-[#C28957] transition-colors duration-300">About</a></li>
      <li><a href="#skills" className="text-[#1c3c4d] font-bold relative hover:text-[#C28957] transition-colors duration-300">Skills</a></li>
      <li><a href="#projects" className="text-[#1c3c4d] font-bold relative hover:text-[#C28957] transition-colors duration-300">Projects</a></li>
      <li><a href="#contact" className="text-[#1c3c4d] font-bold relative hover:text-[#C28957] transition-colors duration-300">Contact</a></li>
    </ul>
  );
};

export default DesktopNav;
