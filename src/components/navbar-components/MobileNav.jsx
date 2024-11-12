import React from 'react';

const MobileNav = ({ isOpen }) => {
  return (
    <ul
      className={`md:hidden absolute top-16 right-10 w-48 bg-[#1c3c4d] mt-2 shadow-lg rounded-lg space-y-4 py-4 transition-all duration-300 ease-out transform ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      } z-50`}
    >
      <li><a href="#home" className="block text-white font-bold px-4 hover:text-[#C28957] transition-colors duration-300">Home</a></li>
      <li><a href="#about" className="block text-white font-bold px-4 hover:text-[#C28957] transition-colors duration-300">About</a></li>
      <li><a href="#skills" className="block text-white font-bold px-4 hover:text-[#C28957] transition-colors duration-300">Skills</a></li>
      <li><a href="#projects" className="block text-white font-bold px-4 hover:text-[#C28957] transition-colors duration-300">Projects</a></li>
      <li><a href="#contact" className="block text-white font-bold px-4 hover:text-[#C28957] transition-colors duration-300">Contact</a></li>
    </ul>
  );
};

export default MobileNav;
