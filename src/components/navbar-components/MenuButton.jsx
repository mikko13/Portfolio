import React from 'react';

const MenuButton = ({ toggleMenu }) => {
  return (
    <div className="md:hidden flex items-center">
      <button onClick={toggleMenu} className="text-[#1c3c4d] focus:outline-none">
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default MenuButton;
