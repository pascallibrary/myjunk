'use client';

import { JSX } from 'react/jsx-runtime';

const Header = (): JSX.Element => {
  return (
    <header className="bg-black text-white px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between sticky top-0 z-50 shadow-md">
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold">Okereke Pascal Chinedu</h1>
        <p className="text-sm md:text-base mt-1">Software Engineer</p>
      </div>
      <nav className="mt-4 md:mt-0 flex justify-center space-x-4">
        <a href="#home" className="px-4 py-2 bg-gray-800 hover:bg-gray-600 rounded transition-all duration-300">
          Home
        </a>
        <a href="#about" className="px-4 py-2 bg-gray-800 hover:bg-gray-600 rounded transition-all duration-300">
          About
        </a>
        <a href="#contact" className="px-4 py-2 bg-gray-800 hover:bg-gray-600 rounded transition-all duration-300">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
