import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="font-josefin-sans">
            <header className="px-0 py-4">
                <nav className="flex justify-between items-center px-10 md:px-16">
                    <ul className="flex-1 flex items-center">
                        <li>
                            <a href="#home">
                                <img src="images/logo.png" alt="Logo" className="h-12" draggable="false" onContextMenu={(e) => e.preventDefault()} />
                            </a>
                        </li>
                    </ul>

                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-[#1c3c4d] focus:outline-none">
                            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <ul className="hidden md:flex flex-2 justify-end items-center space-x-12">
                        <li><a href="#home" className="text-[#1c3c4d] font-bold relative hover:text-[#C28957] transition-colors duration-300">Home</a></li>
                        <li><a href="#about" className="text-[#1c3c4d] font-bold relative hover:text-[#C28957] transition-colors duration-300">About</a></li>
                        <li><a href="#skills" className="text-[#1c3c4d] font-bold relative hover:text-[#C28957] transition-colors duration-300">Skills</a></li>
                        <li><a href="#projects" className="text-[#1c3c4d] font-bold relative hover:text-[#C28957] transition-colors duration-300">Projects</a></li>
                        <li><a href="#contact" className="text-[#1c3c4d] font-bold relative hover:text-[#C28957] transition-colors duration-300">Contact</a></li>
                    </ul>

                    <ul
                        className={`md:hidden absolute top-16 right-4 w-48 bg-[#1c3c4d] mt-2 shadow-lg rounded-lg space-y-4 py-4 transition-all duration-300 ease-out transform ${
                            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                        } z-50`}
                    >
                        <li><a href="#home" className="block text-white font-bold px-4 hover:text-[#C28957] transition-colors duration-300">Home</a></li>
                        <li><a href="#about" className="block text-white font-bold px-4 hover:text-[#C28957] transition-colors duration-300">About</a></li>
                        <li><a href="#skills" className="block text-white font-bold px-4 hover:text-[#C28957] transition-colors duration-300">Skills</a></li>
                        <li><a href="#projects" className="block text-white font-bold px-4 hover:text-[#C28957] transition-colors duration-300">Projects</a></li>
                        <li><a href="#contact" className="block text-white font-bold px-4 hover:text-[#C28957] transition-colors duration-300">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
