import React, { useState } from 'react';
import Logo from './navbar-components/Logo';
import MenuButton from './navbar-components/MenuButton';
import DesktopNav from './navbar-components/DesktopNav';
import MobileNav from './navbar-components/MobileNav';

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
            <Logo />
          </ul>

          <MenuButton toggleMenu={toggleMenu} />

          <DesktopNav />

          <MobileNav isOpen={isOpen} />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
