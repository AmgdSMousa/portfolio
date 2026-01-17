import React from 'react';
import myPhoto from './assets/amged.jpg'; // تأكد من وجود الصورة في هذا المسار
import ThemeToggle from './components/ThemeToggle';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-500 text-left">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center text-left">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Amged Sayed</span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex space-x-8 mr-4">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">About</a>
              <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">Experience</a>
              <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">Contact</a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-40 pb-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <div className="md:w-1/3 flex justify-center order-first md:order-none">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-500/10 dark:bg-blue-400/10 rounded-3xl transform rotate-3 group-hover:rotate-0 transition duration-500"></div>
              <img 
                src={myPhoto} 
                alt="Amged Sayed" 
                className="relative w-72 h-96 object-cover rounded-2xl shadow-2xl transition duration-500"
                onError={(e) => { e.target.src = "https://via.placeholder.com/300x400?text=Amged+Sayed"; }}
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight">
              Amged Sayed
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-bold mb-6 uppercase tracking-widest">
              Marketing Specialist & Web Developer
            </p>
            <p className="max-w-2xl text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-medium">
              Innovative Marketing Specialist with a strong Full-Stack Development background (PERN Stack). 
              Unique ability to combine psychology-based marketing strategies with technical execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.fursatsafar.com" target="_blank" className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1">
                View Fursat Safar
              </a>
              <a href="mailto:amgd.sayed@gmail.com" className="bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-2xl font-bold shadow-lg hover:opacity-90 transition transform hover:-translate-y-1">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Core Expertise Section */}
      <section className="py-20 bg-white dark:bg-gray-950 px-6 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight text-gray-900 dark:text-white">Core Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-gray-50 dark:bg-gray-900 p-10 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900 transition">
              <div className="text-5xl mb-6">💻</div>
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-blue-600 dark:text-blue-400 italic mb-4 text-sm font-semibold">React.js, Node.js, PERN Stack</p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Building robust web applications from scratch with a focus on performance.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-10 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900 transition">
              <div className="text-5xl mb-6">📈</div>
              <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-blue-600 dark:text-blue-400 italic mb-4 text-sm font-semibold">Meta Business Suite, Lead Gen</p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Data-driven campaign management and strategic business growth.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-10 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900 transition">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-xl font-bold mb-4">Marketing Psychology</h3>
              <p className="text-blue-600 dark:text-blue-400 italic mb-4 text-sm font-semibold italic uppercase tracking-tighter">Ain Shams University</p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Applying behavioral insights from psychology to technical marketing and UX.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <Projects />
      
      {/* Professional Experience Section */}
      <section id="experience" className="py-24 bg-white dark:bg-gray-950 px-6 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-16 text-center text-gray-900 dark:text-white">Professional Journey</h2>
          <div className="space-y-16">
            <div className="relative pl-10 border-l-4 border-blue-600">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-950 shadow-sm"></div>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block text-left">Jun 2025 - Present</span>
              <h3 className="text-3xl font-bold mt-2 text-left">Fursat Safar</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed text-lg text-left">
                Developed the official job search website using React.js and Node.js. Managed lead generation strategies to drive growth for the platform.
              </p>
            </div>
            <div className="relative pl-10 border-l-4 border-gray-200 dark:border-gray-800">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded-full border-4 border-white dark:border-gray-950 shadow-sm"></div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest block text-left">Aug 2025 - Nov 2025</span>
              <h3 className="text-3xl font-bold mt-2 text-left">In Action Media</h3>
              <p className="font-bold text-blue-600 dark:text-blue-400 text-lg italic text-left">Marketing Specialist</p>
              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-lg text-left">
                Managed social media presence using Meta Business Suite and provided deep analysis for campaign data to optimize performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Education />

      {/* Footer & Contact Section */}
      <footer id="contact" className="py-24 bg-gray-900 text-white px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-10 tracking-tight">Let's Build Something Together</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gray-800 rounded-2xl border border-gray-700 text-left">
              <p className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">Phone</p>
              <p className="text-xl">+20 110 134 2266</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-2xl border border-gray-700 text-left">
              <p className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">Email</p>
              <p className="text-xl">amgd.sayed@gmail.com</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-2xl border border-gray-700 text-left">
              <p className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">Languages</p>
              <p className="text-lg">Arabic (Native) <br/> English (Intermediate)</p>
            </div>
          </div>
          
          {/* روابط التواصل الاجتماعي مع فيسبوك وإنستجرام */}
          <div className="flex justify-center flex-wrap gap-8 mb-12 text-3xl text-gray-400">
            <a href="https://www.linkedin.com/in/amgedsayed" target="_blank" className="hover:text-blue-400 transition transform hover:scale-110">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/AmgdSMousa" target="_blank" className="hover:text-white transition transform hover:scale-110">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/am8ed" target="_blank" className="hover:text-blue-500 transition transform hover:scale-110">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/am8ed_" target="_blank" className="hover:text-pink-500 transition transform hover:scale-110">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          
          <p className="text-gray-500 font-medium italic">© 2026 Amged Sayed. Marketing Specialist & Web Developer. Based in Egypt.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;