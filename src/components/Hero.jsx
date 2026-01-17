import React from 'react';
import myPhoto from '../assets/amged.jpg';

export default function Hero() {
  return (
    <header id="about" className="pt-40 pb-24 px-6 bg-white dark:bg-gray-950">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl transform rotate-3 transition group-hover:rotate-0"></div>
            <img 
              src={myPhoto} 
              alt="Amged Sayed" 
              className="relative w-72 h-96 object-cover rounded-2xl shadow-2xl transition duration-500"
              onError={(e) => { e.target.src = "https://via.placeholder.com/300x400?text=Amged+Sayed"; }}
            />
          </div>
        </div>
        <div className="md:w-2/3 text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Amged Sayed</h1>
          <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-bold mb-6 uppercase tracking-widest">
            Marketing Specialist & Web Developer
          </p>
          <p className="max-w-2xl text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-medium text-left">
            Innovative Marketing Specialist with a strong Full-Stack Development background (PERN Stack). 
            Unique ability to combine psychology-based marketing strategies with technical execution.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition">
              View My Work
            </a>
            <a href="mailto:amgd.sayed@gmail.com" className="bg-gray-900 dark:bg-white dark:text-black text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:opacity-90 transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}