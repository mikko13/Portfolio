import React from 'react';

const Logo = () => {
  return (
    <li>
      <a href="#home">
        <img
          src="images/logo.png"
          alt="Logo"
          className="h-12"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
      </a>
    </li>
  );
};

export default Logo;
