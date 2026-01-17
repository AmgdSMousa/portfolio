import React from 'react';

export default function Education() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950 px-6 border-t border-gray-100 dark:border-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-extrabold mb-16 tracking-tight text-gray-900 dark:text-white uppercase tracking-widest">
          Academic Background
        </h2>
        
        <div className="bg-white dark:bg-gray-900 p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 inline-block w-full transition-all duration-500 hover:shadow-xl">
          {/* أيقونة تعبيرية تعكس التخصص */}
          <div className="text-6xl mb-8 transform hover:scale-110 transition-transform">🎓</div>
          
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
            Bachelor of Arts in Psychology
          </h3>
          
          <p className="text-blue-600 dark:text-blue-400 font-bold text-xl mt-4 tracking-wide">
            Ain Shams University
          </p>
          
          {/* الوصف النظيف الذي يربط دراستك بعملك الحالي */}
          <p className="text-gray-600 dark:text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed text-lg font-medium">
            This degree provided the academic foundation for my psychology-based marketing strategies. 
            It allows me to bring a deeper understanding of human behavior to user experience design, 
            conversion optimization, and technical project execution.
          </p>
          
          {/* لمسة بصرية إضافية */}
          <div className="mt-10 flex justify-center gap-2">
            <span className="w-12 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
            <span className="w-4 h-1 bg-blue-300 dark:bg-blue-800 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
}