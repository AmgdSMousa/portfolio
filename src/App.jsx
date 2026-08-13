import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Mail,
  FileText,
  Terminal,
  Server,
  Code,
  Cpu,
  Globe,
  Check,
  Copy,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  ArrowUp,
  Database,
  MessageSquare,
  Search
} from 'lucide-react';

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('amgd.sayed@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      id: 'wa-sender',
      title: 'WhatsApp Automation & Bulk Sender',
      category: 'web',
      description: 'Automated WhatsApp messaging & dispatch tool engineered in TypeScript. Features batch message dispatching, media attachments, and automated client notification workflows.',
      tags: ['TypeScript', 'Node.js', 'WhatsApp API', 'Automation'],
      icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
      featured: true,
      github: 'https://github.com/AmgdSMousa/wa-sender'
    },
    {
      id: 'phonescanner',
      title: 'Phone Scanner & OSINT Intelligence',
      category: 'marketing',
      description: 'Automated Python intelligence tool for phone number validation, carrier lookup, and OSINT reconnaissance across open-source databases.',
      tags: ['Python', 'OSINT', 'Security Audit', 'Automation'],
      icon: <Search className="w-6 h-6 text-amber-400" />,
      featured: true,
      github: 'https://github.com/AmgdSMousa/phonescanner'
    },
    {
      id: 'fursatsafar',
      title: 'Fursat Safar Platform',
      category: 'web',
      description: 'Architected and built the official web platform (www.fursatsafar.com) from scratch. Engineered React frontend interfaces connected to a Node.js REST API with integrated lead generation flow.',
      tags: ['React.js', 'Node.js', 'Tailwind CSS', 'Lead Gen API'],
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      featured: true,
      link: 'https://www.fursatsafar.com'
    },
    {
      id: 'erp',
      title: 'ERP System Architecture',
      category: 'infra',
      description: 'Designed a multi-tiered backend architecture for an enterprise ERP system. Configured high-performance database schemas and containerized the end-to-end environment.',
      tags: ['Python', 'PostgreSQL', 'Docker', 'REST API'],
      icon: <Database className="w-6 h-6 text-blue-400" />,
      featured: true,
    },
    {
      id: 'cloudvps',
      title: 'Cloud VPS & Remote Streaming',
      category: 'infra',
      description: 'Provisioned and hardened Linux virtual private servers on GCP Compute Engine. Established encrypted SSH tunnels to stream and control Android environments using ADB and scrcpy.',
      tags: ['GCP Compute Engine', 'Linux/Ubuntu', 'SSH Tunnels', 'ADB', 'scrcpy'],
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      featured: true,
    },
    {
      id: 'recon',
      title: 'Security Reconnaissance Script',
      category: 'marketing',
      description: 'Developed an automated CLI tool (recon.sh) to streamline domain discovery and security auditing using Subfinder, Assetfinder, and httpx in Kali Linux environments.',
      tags: ['Bash Scripting', 'Kali Linux', 'Automation', 'Security Audit'],
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-gray-100' : 'light bg-slate-50 text-slate-900'}`}>
      
      {/* Background Ambient Glow Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float-orb glow-background" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-float-orb-slow glow-background" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl animate-float-orb glow-background" />
      </div>

      {/* Floating Toast Notification */}
      {copiedEmail && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl shadow-2xl transition-all duration-300 animate-bounce">
          <Check className="w-5 h-5 text-emerald-300" />
          <span className="font-medium text-sm">Email copied to clipboard!</span>
        </div>
      )}

      {/* Navigation Header */}
      <nav className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${darkMode ? 'glass-panel border-b border-gray-800/60' : 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-xl font-extrabold tracking-tight group">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
              AS
            </span>
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Amged Sayed
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-all duration-300 ${darkMode ? 'bg-gray-900 border-gray-800 text-amber-400 hover:bg-gray-800' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              Let's Talk
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden px-6 pt-4 pb-6 border-b ${darkMode ? 'bg-gray-950/95 border-gray-800' : 'bg-white/95 border-slate-200'}`}>
            <div className="flex flex-col space-y-4 font-semibold text-base">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-500">About</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-500">Experience</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-500">Projects</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-500">Skills</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-500">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* Status Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 border backdrop-blur-md ${darkMode ? 'bg-blue-950/50 border-blue-800/50 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Full-Stack Web Dev + Infrastructure & Marketing Specialist</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
          Crafting Digital Systems Driven by{' '}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Code & Consumer Psychology
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-lg sm:text-xl max-w-3xl mb-10 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
          I bridge technical architecture with human behavior. Combining React, Node.js, and PostgreSQL development with Linux sysadmin (GCP/Docker) and data-driven marketing strategies to build scalable, converting web experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl font-bold transition shadow-xl shadow-blue-600/30 hover:scale-105"
          >
            <Briefcase className="w-5 h-5" />
            Explore Projects
          </a>
          <a
            href="/CV.pdf"
            download="Amged_Sayed_CV.pdf"
            className={`flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold border transition shadow-sm hover:scale-105 ${darkMode ? 'bg-gray-900 border-gray-700 text-gray-200 hover:bg-gray-800' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'}`}
          >
            <FileText className="w-5 h-5 text-blue-500" />
            Download Resume
          </a>
          <button
            onClick={handleCopyEmail}
            className={`flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold border transition ${darkMode ? 'bg-gray-900/60 border-gray-800 text-gray-300 hover:border-gray-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
          >
            {copiedEmail ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 text-gray-400" />}
            <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
          </button>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl text-left">
          <div className={`p-5 rounded-2xl border transition-all ${darkMode ? 'glass-card border-gray-800/80 hover:border-blue-500/50' : 'bg-white border-slate-200 shadow-sm hover:border-blue-400'}`}>
            <Code className="w-7 h-7 text-blue-500 mb-3" />
            <h3 className="font-bold text-sm mb-1">Full-Stack Dev</h3>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>React, Node.js, PostgreSQL</p>
          </div>

          <div className={`p-5 rounded-2xl border transition-all ${darkMode ? 'glass-card border-gray-800/80 hover:border-indigo-500/50' : 'bg-white border-slate-200 shadow-sm hover:border-indigo-400'}`}>
            <Server className="w-7 h-7 text-indigo-500 mb-3" />
            <h3 className="font-bold text-sm mb-1">Cloud & Sysadmin</h3>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>GCP, Docker, Linux/SSH</p>
          </div>

          <div className={`p-5 rounded-2xl border transition-all ${darkMode ? 'glass-card border-gray-800/80 hover:border-cyan-500/50' : 'bg-white border-slate-200 shadow-sm hover:border-cyan-400'}`}>
            <Globe className="w-7 h-7 text-cyan-500 mb-3" />
            <h3 className="font-bold text-sm mb-1">Digital Marketing</h3>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>SEO, Meta Suite, Photoshop</p>
          </div>

          <div className={`p-5 rounded-2xl border transition-all ${darkMode ? 'glass-card border-gray-800/80 hover:border-emerald-500/50' : 'bg-white border-slate-200 shadow-sm hover:border-emerald-400'}`}>
            <GraduationCap className="w-7 h-7 text-emerald-500 mb-3" />
            <h3 className="font-bold text-sm mb-1">Psychology B.A.</h3>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>User Behavior & Strategy</p>
          </div>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto z-10 relative">
        <div className={`p-8 sm:p-12 rounded-3xl border ${darkMode ? 'glass-panel border-gray-800' : 'bg-white border-slate-200 shadow-md'}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="p-3 rounded-2xl bg-blue-600/10 text-blue-500">
              <Cpu className="w-6 h-6" />
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight">Background & Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-base leading-relaxed">
            <div className="space-y-4">
              <p className={darkMode ? 'text-gray-300' : 'text-slate-700'}>
                Graduating with a degree in <strong className="text-blue-500">Psychology from Ain Shams University</strong>, I approach software engineering and marketing from a unique human-centric lens. Understanding cognitive pathways and user motivation allows me to build intuitive user experiences backed by high-converting architecture.
              </p>
              <p className={darkMode ? 'text-gray-300' : 'text-slate-700'}>
                My professional career spans freelance full-stack development, corporate B2B technical support, real estate sales, and agency digital marketing. This diverse background equips me to communicate effortlessly across technical teams and executive business stakeholders.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-slate-50 border-slate-200'}`}>
              <h3 className="font-bold text-lg mb-4 text-blue-500 flex items-center gap-2">
                <Terminal className="w-5 h-5" /> Technical Infrastructure Passion
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                  <span>Configuring and hardening <strong>Linux VPS environments</strong> on Google Cloud Compute Engine (Debian/Ubuntu/Kali).</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                  <span>Remote Android device streaming & control using <strong>ADB and scrcpy over SSH tunnels</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                  <span>Containerized backend deployments using <strong>Docker & PostgreSQL</strong>.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Professional Experience</h2>
          <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>A timeline of technical execution, marketing leadership, and corporate support.</p>
        </div>

        <div className="relative border-l-2 border-blue-600/30 pl-6 sm:pl-10 space-y-12 ml-4">
          
          {/* Fursat Safar */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-blue-600 border-4 border-gray-950 group-hover:scale-125 transition-transform" />
            <div className={`p-6 rounded-2xl border transition-all ${darkMode ? 'glass-card border-gray-800 hover:border-blue-500/50' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'}`}>
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h3 className="text-xl font-bold">Full-Stack Web Developer (Freelance)</h3>
                <span className="px-3 py-1 rounded-lg bg-blue-600/10 text-blue-400 font-semibold text-xs border border-blue-500/20">2025</span>
              </div>
              <p className="text-blue-500 font-semibold text-sm mb-4">Fursat Safar</p>
              <ul className={`list-disc list-inside space-y-2 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                <li>Architected and developed the official website (<a href="https://www.fursatsafar.com" target="_blank" rel="noreferrer" className="text-blue-400 underline">www.fursatsafar.com</a>) end-to-end.</li>
                <li>Implemented responsive React interfaces paired with Node.js REST API services.</li>
                <li>Integrated direct lead-generation architecture to optimize sales conversion rates.</li>
              </ul>
            </div>
          </div>

          {/* In Action Media */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-cyan-500 border-4 border-gray-950 group-hover:scale-125 transition-transform" />
            <div className={`p-6 rounded-2xl border transition-all ${darkMode ? 'glass-card border-gray-800 hover:border-cyan-500/50' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'}`}>
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h3 className="text-xl font-bold">Digital Marketing Specialist</h3>
                <span className="px-3 py-1 rounded-lg bg-cyan-600/10 text-cyan-400 font-semibold text-xs border border-cyan-500/20">Oct 2025 – Jan 2026</span>
              </div>
              <p className="text-cyan-500 font-semibold text-sm mb-4">In Action Media Agency</p>
              <ul className={`list-disc list-inside space-y-2 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                <li>Managed Meta Business Suite cross-platform integration and targeted advertising campaigns.</li>
                <li>Led digital content creation and video strategy for commercial brands including "Roadside Heroes".</li>
                <li>Designed promotional assets in Adobe Photoshop utilizing advanced typography layer styling.</li>
              </ul>
            </div>
          </div>

          {/* X Property */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-indigo-500 border-4 border-gray-950 group-hover:scale-125 transition-transform" />
            <div className={`p-6 rounded-2xl border transition-all ${darkMode ? 'glass-card border-gray-800 hover:border-indigo-500/50' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'}`}>
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h3 className="text-xl font-bold">Real Estate Sales Specialist</h3>
                <span className="px-3 py-1 rounded-lg bg-gray-800 text-gray-400 font-semibold text-xs border border-gray-700">May 2025 – Sep 2025</span>
              </div>
              <p className="text-indigo-400 font-semibold text-sm mb-4">X Property</p>
              <ul className={`list-disc list-inside space-y-2 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                <li>Executed client acquisition workflows and negotiated high-value real estate transactions.</li>
                <li>Leveraged local market analysis and customer psychology to streamline closing pipelines.</li>
              </ul>
            </div>
          </div>

          {/* Vodafone */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-emerald-500 border-4 border-gray-950 group-hover:scale-125 transition-transform" />
            <div className={`p-6 rounded-2xl border transition-all ${darkMode ? 'glass-card border-gray-800 hover:border-emerald-500/50' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'}`}>
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h3 className="text-xl font-bold">B2B Technical Support Agent</h3>
                <span className="px-3 py-1 rounded-lg bg-gray-800 text-gray-400 font-semibold text-xs border border-gray-700">Mar 2025 – May 2025</span>
              </div>
              <p className="text-emerald-400 font-semibold text-sm mb-4">Ison Experience (Vodafone Egypt)</p>
              <ul className={`list-disc list-inside space-y-2 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                <li>Handled Corporate Accounts assisting Authorized Signatories (المفوضين).</li>
                <li>Diagnosed network connectivity and enterprise telephony issues under strict SLA metrics.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Technical Projects & Infrastructure</h2>
          <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
            Select technical achievements across web architecture, cloud servers, and system security tools.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Work' },
              { id: 'web', label: 'Full-Stack Web' },
              { id: 'infra', label: 'Cloud & Infrastructure' },
              { id: 'marketing', label: 'Scripts & Security' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${activeFilter === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : darkMode
                    ? 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${darkMode
                ? 'glass-card border-gray-800/80 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10'
                : 'bg-white border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300'}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3.5 rounded-2xl bg-blue-600/10 border border-blue-500/20">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-gray-900/80 text-gray-300 hover:bg-blue-600 hover:text-white transition border border-gray-800"
                        title="View Repository on GitHub"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white transition"
                        title="Visit Live Site"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/50">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${darkMode ? 'bg-gray-900 text-blue-300 border border-gray-800' : 'bg-blue-50 text-blue-700 border border-blue-100'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Matrix */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Core Competencies</h2>
          <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>Technologies and methodology stack.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Web Development */}
          <div className={`p-8 rounded-3xl border ${darkMode ? 'glass-card border-gray-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold">Web Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Node.js', 'JavaScript (ES6+)', 'PostgreSQL', 'HTML5 / CSS3', 'Tailwind CSS', 'REST API Architecture', 'Git / GitHub'].map(skill => (
                <span key={skill} className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold border ${darkMode ? 'bg-gray-900 border-gray-800 text-gray-200' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Infrastructure & Cloud */}
          <div className={`p-8 rounded-3xl border ${darkMode ? 'glass-card border-gray-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-indigo-500" />
              <h3 className="text-xl font-bold">Cloud & DevOps</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Google Cloud Platform', 'Compute Engine VPS', 'Docker', 'Linux (Debian/Ubuntu/Kali)', 'Bash Scripting', 'SSH Port Forwarding', 'ADB & scrcpy'].map(skill => (
                <span key={skill} className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold border ${darkMode ? 'bg-gray-900 border-gray-800 text-gray-200' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Marketing & Design */}
          <div className={`p-8 rounded-3xl border ${darkMode ? 'glass-card border-gray-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-cyan-500" />
              <h3 className="text-xl font-bold">Digital Marketing & Design</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['SEO Strategy', 'Meta Business Suite', 'Adobe Photoshop', 'Short-Form Video Production', 'Content Strategy', 'Lead Generation'].map(skill => (
                <span key={skill} className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold border ${darkMode ? 'bg-gray-900 border-gray-800 text-gray-200' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Psychology & Soft Skills */}
          <div className={`p-8 rounded-3xl border ${darkMode ? 'glass-card border-gray-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xl font-bold">Psychology & Strategy</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Consumer Behavior Analysis', 'UX Psychology', 'B2B Client Management', 'Problem Solving', 'Data-Driven Decision Making'].map(skill => (
                <span key={skill} className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold border ${darkMode ? 'bg-gray-900 border-gray-800 text-gray-200' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Education & Community */}
      <section className="py-16 px-6 max-w-5xl mx-auto z-10 relative">
        <div className={`p-8 rounded-3xl border ${darkMode ? 'glass-panel border-gray-800' : 'bg-white border-slate-200 shadow-sm'}`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-blue-500" /> Education & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-500 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">B.A. in Psychology</h3>
                <p className="text-blue-500 text-sm font-medium">Ain Shams University</p>
                <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>Focused on cognitive psychology, human behavior analysis, and statistical methods.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-cyan-600/10 text-cyan-500 shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Google Local Guide (Level 5)</h3>
                <p className="text-cyan-500 text-sm font-medium">Geographic Contributions</p>
                <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>Active contributor to digital mapping, localized business data, and geo reviews.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center z-10 relative">
        <div className={`p-10 sm:p-16 rounded-3xl border relative overflow-hidden ${darkMode ? 'bg-gradient-to-b from-gray-900 to-blue-950/40 border-gray-800' : 'bg-gradient-to-b from-blue-50 to-indigo-50 border-blue-100 shadow-lg'}`}>
          
          <span className="p-4 rounded-2xl bg-blue-600/10 text-blue-500 inline-block mb-6">
            <Mail className="w-8 h-8" />
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight mb-4">Let's Build Something Impactful</h2>
          <p className={`text-lg max-w-xl mx-auto mb-10 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
            Whether you need a scalable full-stack web app, custom cloud infrastructure, or a high-converting digital marketing strategy, I'm ready to collaborate.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:amgd.sayed@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition shadow-xl shadow-blue-600/25 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              amgd.sayed@gmail.com
            </a>
            
            <a
              href="https://github.com/AmgdSMousa"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold border transition hover:scale-105 ${darkMode ? 'bg-gray-900 border-gray-700 text-gray-200 hover:bg-gray-800' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'}`}
            >
              <GithubIcon className="w-5 h-5" />
              GitHub Profile
            </a>

            <a
              href="https://linkedin.com/in/amgedmoussa"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold border transition hover:scale-105 ${darkMode ? 'bg-gray-900 border-gray-700 text-gray-200 hover:bg-gray-800' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'}`}
            >
              <LinkedinIcon className="w-5 h-5 text-blue-500" />
              LinkedIn Profile
            </a>

            <button
              onClick={handleCopyEmail}
              className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-bold border transition ${darkMode ? 'bg-gray-900/80 border-gray-800 text-gray-300 hover:bg-gray-800' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'}`}
            >
              {copiedEmail ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 text-gray-400" />}
              <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-10 px-6 border-t z-10 relative text-sm ${darkMode ? 'border-gray-900 text-gray-500' : 'border-slate-200 text-slate-500'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Amged Sayed. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 hover:bg-blue-500 hover:scale-110 transition-all"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}

export default App;