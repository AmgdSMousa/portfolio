import React from 'react';

const skills = [
  { 
    title: "Web Development", 
    desc: "Building robust, full-stack web applications using the PERN Stack (PostgreSQL, Express, React, Node.js) with a focus on performance and scalability.", 
    icon: "💻" 
  },
  { 
    title: "Digital Marketing", 
    desc: "Expertise in Meta Business Suite and Lead Generation strategies. Analyzing campaign data to optimize ROI and drive business growth.", 
    icon: "🚀" 
  },
  { 
    title: "Marketing Psychology", 
    desc: "Leveraging my BA in Psychology from Ain Shams University to apply behavioral insights to technical marketing, UX design, and user conversion.", 
    icon: "🧠" 
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-500 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight text-gray-900 dark:text-white uppercase tracking-widest">
          Core Expertise
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 p-10 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl transition-all duration-500 text-left group"
            >
              <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}