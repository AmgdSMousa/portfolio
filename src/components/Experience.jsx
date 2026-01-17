import React from 'react';

const experiences = [
  {
    title: "Fursat Safar",
    period: "Jun 2025 - Present",
    description: "Developed the official website (www.fursatsafar.com) using React.js & Node.js and managed lead generation strategies to drive growth for the platform.",
    link: "https://www.fursatsafar.com"
  },
  {
    title: "In Action Media",
    period: "Aug 2025 - Nov 2025",
    role: "Marketing Specialist",
    description: "Managed social media presence using Meta Business Suite and analyzed campaign data to optimize performance."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold mb-16 text-center text-gray-900 dark:text-white uppercase tracking-widest">
          Professional Journey
        </h2>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 border-l-4 border-blue-600 dark:border-blue-500">
              {/* Timeline Dot */}
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-950 shadow-sm"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="text-left">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">{exp.title}</h3>
                  {exp.role && <p className="text-blue-600 dark:text-blue-400 font-bold text-lg mt-1 italic">{exp.role}</p>}
                </div>
                <span className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-2 md:mt-1">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg text-left">
                {exp.description}
              </p>
              
              {exp.link && (
                <div className="text-left">
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-6 text-blue-600 dark:text-blue-400 font-bold hover:underline group"
                  >
                    Visit Project 
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}