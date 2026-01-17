import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Amged Sayed</span>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex space-x-8 mr-4">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">About</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">Projects</a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">Experience</a>
          </div>
          <ThemeToggle />
          <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition hidden md:block">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}