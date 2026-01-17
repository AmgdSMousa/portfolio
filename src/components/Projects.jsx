import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900 dark:text-white uppercase tracking-widest">
          Featured Work
        </h2>
        
        <div className="max-w-5xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all duration-500 group">
          <div className="grid md:grid-cols-2">
            {/* جانب العنوان واللوجو التخيلي */}
            <div className="bg-blue-600 dark:bg-blue-700 h-64 md:h-auto flex flex-col items-center justify-center text-white p-12 transition-colors">
              <h3 className="text-4xl font-black tracking-tighter mb-2">Fursat Safar</h3>
              <div className="w-16 h-1 bg-white/30 rounded-full"></div>
            </div>

            {/* تفاصيل المشروع */}
            <div className="p-8 md:p-12 text-left">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm tracking-widest uppercase mb-4 block">
                Full-Stack Development
              </span>
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Job Search Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg font-medium">
                Developed the official recruitment platform (fursatsafar.com) using React.js and Node.js. 
                I leveraged my marketing background to integrate data-driven lead generation strategies, 
                optimizing the platform for both user growth and technical stability.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {["React.js", "Node.js", "PostgreSQL", "Marketing Strategy"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href="https://www.fursatsafar.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold text-lg hover:underline group-hover:translate-x-1 transition-transform"
              >
                Visit Website 
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}