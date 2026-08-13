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
  Search,
  Send,
  Brain,
  Languages
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
  const [lang, setLang] = useState('en'); // 'en' | 'ar'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);

    // Simulate direct instant submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1000);
  };

  const projects = [
    {
      id: '3atlan',
      title: lang === 'en' ? '3atlan Roadside Assistance Platform' : 'منصة عطلان لخدمات الإنقاذ والمساعدة على الطريق',
      category: 'web',
      description: lang === 'en'
        ? 'Comprehensive React & Firebase web application for real-time roadside assistance, geolocation mapping, and emergency driver support.'
        : 'منصة ويب متكاملة بـ React و Firebase لتقديم خدمات المساعدة والإنقاذ على الطريق، مع الخرائط التفاعلية وتتبع الموقع.',
      tags: ['React.js', 'Firebase', 'Leaflet Maps', 'Real-time API', 'PWA'],
      icon: <Globe className="w-6 h-6 text-amber-400" />,
      featured: true,
      github: 'https://github.com/AmgdSMousa/3atlan',
      link: 'https://3atlan.am8ed.site'
    },
    {
      id: 'wa-sender',
      title: lang === 'en' ? 'WhatsApp Automation & Bulk Sender' : 'أداة الإرسال التلقائي للواتساب',
      category: 'web',
      description: lang === 'en'
        ? 'Automated WhatsApp messaging & dispatch tool engineered in TypeScript. Features batch message dispatching, media attachments, and automated client notification workflows.'
        : 'أداة أتمتة إرسال رسائل الواتساب الجماعية مبنية بـ TypeScript. تتميز بمعالجة الدفعات المباشرة وإرفاق الوسائط وإرسال الإشعارات التلقائية للعملاء.',
      tags: ['TypeScript', 'Node.js', 'WhatsApp API', 'Automation'],
      icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
      featured: true,
      github: 'https://github.com/AmgdSMousa/wa-sender'
    },
    {
      id: 'phonescanner',
      title: lang === 'en' ? 'Phone Scanner & OSINT Intelligence' : 'أداة فحص الأرقام والاستخبارات المفتوحة OSINT',
      category: 'marketing',
      description: lang === 'en'
        ? 'Automated Python intelligence tool for phone number validation, carrier lookup, and OSINT reconnaissance across open-source databases.'
        : 'أداة استخبارات رقمية بلغة Python للتحقق من أرقام الهواتف وفحص مزودي الخدمة وتتبع البيانات المفتوحة عبر قواعد البيانات العامة.',
      tags: ['Python', 'OSINT', 'Security Audit', 'Automation'],
      icon: <Search className="w-6 h-6 text-amber-400" />,
      featured: true,
      github: 'https://github.com/AmgdSMousa/phonescanner'
    },
    {
      id: 'fursatsafar',
      title: lang === 'en' ? 'Fursat Safar Travel Platform' : 'منصة فرصة سفر للسياحة والرحلات',
      category: 'web',
      description: lang === 'en'
        ? 'Architected and built the official web platform (www.fursatsafar.com) from scratch. Engineered React frontend interfaces connected to a Node.js REST API with integrated lead generation flow.'
        : 'تصميم وبناء المنصة الرسمية لفرصة سفر (www.fursatsafar.com). واجهات React متكاملة مع REST API بـ Node.js ونظام تحويل العملاء وحجز الرحلات.',
      tags: ['React.js', 'Node.js', 'Tailwind CSS', 'Lead Gen API'],
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      featured: true,
      link: 'https://www.fursatsafar.com'
    },
    {
      id: 'erp',
      title: lang === 'en' ? 'ERP System Architecture' : 'معمارية نظام إدارة المؤسسات ERP',
      category: 'infra',
      description: lang === 'en'
        ? 'Designed a multi-tiered backend architecture for an enterprise ERP system. Configured high-performance database schemas and containerized the end-to-end environment.'
        : 'تصميم معمارية برمجية خلفية متعددة الطبقات لنظام ERP مؤسسي، مع تهيئة قواعد بيانات PostgreSQL وحزم Docker الحاوية.',
      tags: ['Python', 'PostgreSQL', 'Docker', 'REST API'],
      icon: <Database className="w-6 h-6 text-blue-400" />,
      featured: true,
    },
    {
      id: 'cloudvps',
      title: lang === 'en' ? 'Cloud VPS & Remote ADB Streaming' : 'إدارة الخوادم السحابية وبث أجهزة أندرويد',
      category: 'infra',
      description: lang === 'en'
        ? 'Provisioned and hardened Linux virtual private servers on GCP Compute Engine. Established encrypted SSH tunnels to stream and control Android environments using ADB and scrcpy.'
        : 'تهيئة وحماية خوادم Linux VPS على GCP Compute Engine، وإنشاء أنفاق SSH مشفرة للتحكم في أجهزة الأندرويد عن بُعد عبر ADB و scrcpy.',
      tags: ['GCP Compute Engine', 'Linux/Ubuntu', 'SSH Tunnels', 'ADB', 'scrcpy'],
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      featured: true,
    },
    {
      id: 'recon',
      title: lang === 'en' ? 'Security Reconnaissance Script' : 'سكربت الفحص الأمني واستكشاف النطاقات',
      category: 'marketing',
      description: lang === 'en'
        ? 'Developed an automated CLI tool (recon.sh) to streamline domain discovery and security auditing using Subfinder, Assetfinder, and httpx in Kali Linux environments.'
        : 'سكربت أوتوماتيكي (recon.sh) لاستكشاف النطاقات وفحص الثغرات الأمنية باستخدام Subfinder و Assetfinder ببيئة Kali Linux.',
      tags: ['Bash Scripting', 'Kali Linux', 'Automation', 'Security Audit'],
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      featured: false,
    },
  ];

  const caseStudies = [
    {
      title: lang === 'en' ? 'Psychology-Driven Travel Conversion' : 'زيادة التحويلات عبر سيكولوجية المستخدم في السياحة',
      client: 'Fursat Safar',
      impact: lang === 'en' ? '+35% Lead Conversion' : '+35% نسبة التحويل والحجوزات',
      description: lang === 'en'
        ? 'Applied cognitive friction reduction principles to the booking funnel. Streamlined CTA placements and visual hierarchy based on decision-making psychology.'
        : 'تطبيق مبادئ تقليل الاحتكاك الإدراكي لرحلة حجز العميل. ترتيب الأزرار والتسلسل البصري بناءً على سيكولوجية اتخاذ القرار.',
      tags: ['UX Psychology', 'React.js', 'Conversion Optimization']
    },
    {
      title: lang === 'en' ? 'Resilient Automation & Anti-Detection' : 'أتمتة آمنة عالية الاعتمادية ومقاومة للحظر',
      client: 'Wa-Sender Engine',
      impact: lang === 'en' ? '99.8% Message Delivery' : '99.8% نسبة وصول الرسائل',
      description: lang === 'en'
        ? 'Engineered a human-mimicking dispatch queue with randomized intervals and exponential backoff to handle high-volume business communications safely.'
        : 'بناء نظام طوابير ذكي يحاكي السلوك البشري بفواصل زمنية عشوائية وتراجع أسي لضمان إرسال إشعارات الأعمال بأمان ودون حظر.',
      tags: ['TypeScript', 'Queue Systems', 'Behavioral Logic']
    },
    {
      title: lang === 'en' ? 'Zero-Trust VPS Architecture' : 'معمارية سيرفرات صفرية الثقة على GCP',
      client: 'Cloud Streaming Node',
      impact: lang === 'en' ? '100% Secure Tunneling' : '100% تشفير وأمان عالي',
      description: lang === 'en'
        ? 'Configured key-only SSH authentication, custom firewall policies, and encrypted WebSocket forwarding for cloud-hosted Android instances.'
        : 'تهيئة جدران الحماية المفصلة وتشفير أنفاق SSH المقتصرة على المفاتيح الخاصة لإدارة وبث بيئات الأندرويد السحابية.',
      tags: ['GCP', 'Linux Hardening', 'ADB Security']
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-gray-100' : 'light bg-slate-50 text-slate-900'} ${lang === 'ar' ? 'font-sans' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
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
          <span className="font-medium text-sm">
            {lang === 'en' ? 'Email copied to clipboard!' : 'تم نسخ البريد الإلكتروني للحافظة!'}
          </span>
        </div>
      )}

      {/* Navigation Header */}
      <nav className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${darkMode ? 'glass-panel border-b border-gray-800/60' : 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-xl font-extrabold tracking-tight group">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform font-bold text-sm">
              AS
            </span>
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {lang === 'en' ? 'Amged Sayed' : 'أمجد سيد'}
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse text-sm font-semibold">
            <a href="#about" className="hover:text-blue-500 transition-colors">{lang === 'en' ? 'About' : 'عن المطور'}</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">{lang === 'en' ? 'Experience' : 'الخبرات'}</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">{lang === 'en' ? 'Projects' : 'المشاريع'}</a>
            <a href="#case-studies" className="hover:text-blue-500 transition-colors">{lang === 'en' ? 'Case Studies' : 'دراسات الحالة'}</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">{lang === 'en' ? 'Skills' : 'المهارات'}</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">{lang === 'en' ? 'Contact' : 'تواصل معي'}</a>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all duration-300 ${darkMode ? 'bg-gray-900 border-gray-800 text-gray-200 hover:bg-gray-800' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
              aria-label="Toggle Language"
            >
              <Languages className="w-4 h-4 text-blue-500" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-all duration-300 ${darkMode ? 'bg-gray-900 border-gray-800 text-amber-400 hover:bg-gray-800' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              {lang === 'en' ? "Let's Talk" : 'تحدث معي'}
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
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-500">{lang === 'en' ? 'About' : 'عن المطور'}</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-500">{lang === 'en' ? 'Experience' : 'الخبرات'}</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-500">{lang === 'en' ? 'Projects' : 'المشاريع'}</a>
              <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-500">{lang === 'en' ? 'Case Studies' : 'دراسات الحالة'}</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-500">{lang === 'en' ? 'Skills' : 'المهارات'}</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-500">{lang === 'en' ? 'Contact' : 'تواصل معي'}</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* Profile Avatar Frame */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 blur-lg opacity-75 group-hover:opacity-100 transition duration-500 group-hover:scale-105 animate-pulse" />
          <div className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 border-2 border-cyan-400/50 shadow-2xl shadow-blue-500/30 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-blue-900/40 to-gray-900">
              <img
                src="/amged-sayed.png"
                alt="Amged Sayed"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition duration-500 drop-shadow-md"
              />
            </div>
          </div>
          {/* Status Online Dot */}
          <span className="absolute bottom-2 right-3 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-gray-950" title="Available for Work"></span>
          </span>
        </div>

        {/* Status Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 border backdrop-blur-md ${darkMode ? 'bg-blue-950/50 border-blue-800/50 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{lang === 'en' ? 'Full-Stack Web Dev + Infrastructure & Marketing Specialist' : 'مطور فول ستاك + مهندس بنية تحتية ومسوق رقمي'}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
          {lang === 'en' ? (
            <>
              Crafting Digital Systems Driven by{' '}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Code & Consumer Psychology
              </span>
            </>
          ) : (
            <>
              بناء أنظمة رقمية متكاملة تدمج{' '}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                الكود مع سيكولوجية المستهلك
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className={`text-lg sm:text-xl max-w-3xl mb-10 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
          {lang === 'en'
            ? 'I bridge technical architecture with human behavior. Combining React, Node.js, and PostgreSQL development with Linux sysadmin (GCP/Docker) and data-driven marketing strategies to build scalable, converting web experiences.'
            : 'أربط المعمارية البرمجية بسلوك المستخدم البشري. أجمع بين تطوير React و Node.js و PostgreSQL، وإدارة خوادم Linux و GCP و Docker، مع استراتيجيات التسويق لتحقيق أقصى معدلات نجاح وتفاعل.'}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl font-bold transition shadow-xl shadow-blue-600/30 hover:scale-105"
          >
            <Briefcase className="w-5 h-5" />
            {lang === 'en' ? 'Explore Projects' : 'استكشف المشاريع'}
          </a>
          <a
            href="/CV.pdf"
            download="Amged_Sayed_CV.pdf"
            className={`flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold border transition shadow-sm hover:scale-105 ${darkMode ? 'bg-gray-900 border-gray-700 text-gray-200 hover:bg-gray-800' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'}`}
          >
            <FileText className="w-5 h-5 text-blue-500" />
            {lang === 'en' ? 'Download Resume' : 'تحميل السيرة الذاتية'}
          </a>
          <button
            onClick={handleCopyEmail}
            className={`flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold border transition ${darkMode ? 'bg-gray-900/60 border-gray-800 text-gray-300 hover:border-gray-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
          >
            {copiedEmail ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 text-gray-400" />}
            <span>{copiedEmail ? (lang === 'en' ? 'Copied!' : 'تم النسخ!') : (lang === 'en' ? 'Copy Email' : 'نسخ البريد')}</span>
          </button>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl text-left rtl:text-right">
          <div className={`p-5 rounded-2xl border transition-all ${darkMode ? 'glass-card border-gray-800/80 hover:border-blue-500/50' : 'bg-white border-slate-200 shadow-sm hover:border-blue-400'}`}>
            <Code className="w-7 h-7 text-blue-500 mb-3" />
            <h3 className="font-bold text-base mb-1">{lang === 'en' ? 'Full-Stack Dev' : 'تطوير الفول ستاك'}</h3>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>React, Node.js, PostgreSQL</p>
          </div>

          <div className={`p-5 rounded-2xl border transition-all ${darkMode ? 'glass-card border-gray-800/80 hover:border-indigo-500/50' : 'bg-white border-slate-200 shadow-sm hover:border-indigo-400'}`}>
            <Server className="w-7 h-7 text-indigo-500 mb-3" />
            <h3 className="font-bold text-base mb-1">{lang === 'en' ? 'Cloud & Sysadmin' : 'السيرفرات والسحابية'}</h3>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>GCP, Docker, Linux/SSH</p>
          </div>

          <div className={`p-5 rounded-2xl border transition-all ${darkMode ? 'glass-card border-gray-800/80 hover:border-cyan-500/50' : 'bg-white border-slate-200 shadow-sm hover:border-cyan-400'}`}>
            <Globe className="w-7 h-7 text-cyan-500 mb-3" />
            <h3 className="font-bold text-base mb-1">{lang === 'en' ? 'Digital Marketing' : 'التسويق الرقمي'}</h3>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>SEO, Meta Ads, Photoshop</p>
          </div>

          <div className={`p-5 rounded-2xl border transition-all ${darkMode ? 'glass-card border-gray-800/80 hover:border-emerald-500/50' : 'bg-white border-slate-200 shadow-sm hover:border-emerald-400'}`}>
            <GraduationCap className="w-7 h-7 text-emerald-500 mb-3" />
            <h3 className="font-bold text-base mb-1">{lang === 'en' ? 'Psychology B.A.' : 'بكالوريوس علم النفس'}</h3>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>User Behavior & Strategy</p>
          </div>
        </div>

      </section>

      {/* Live Animated Metrics & Stats Counter */}
      <section className="py-10 px-6 max-w-6xl mx-auto z-10 relative">
        <div className={`p-8 rounded-3xl border grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${darkMode ? 'glass-panel border-gray-800/80' : 'bg-white border-slate-200 shadow-md'}`}>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">15+</div>
            <p className={`text-xs font-semibold mt-2 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>{lang === 'en' ? 'Deployed Projects' : 'مشاريع منفذة ومرفوعة'}</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">99.9%</div>
            <p className={`text-xs font-semibold mt-2 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>{lang === 'en' ? 'VPS Server Uptime' : 'استقرار واستمرارية الخوادم'}</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">Level 5</div>
            <p className={`text-xs font-semibold mt-2 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>{lang === 'en' ? 'Google Local Guide' : 'مرشد محلي في جوجل'}</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">100%</div>
            <p className={`text-xs font-semibold mt-2 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>{lang === 'en' ? 'Code Quality Score' : 'جودة وكفاءة الكود'}</p>
          </div>
        </div>
      </section>

      {/* About & Philosophy */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto z-10 relative">
        <div className={`p-8 sm:p-12 rounded-3xl border ${darkMode ? 'glass-panel border-gray-800' : 'bg-white border-slate-200 shadow-md'}`}>
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold">{lang === 'en' ? 'Background & Philosophy' : 'الخلفية ورؤية العمل'}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-base leading-relaxed">
            <div className="space-y-4">
              <p className={darkMode ? 'text-gray-300' : 'text-slate-600'}>
                {lang === 'en'
                  ? 'Graduating with a degree in Psychology from Ain Shams University, I approach software engineering and marketing from a unique human-centric lens. Understanding cognitive pathways and user motivation allows me to build intuitive user experiences that perform.'
                  : 'خريج بكالوريوس علم النفس من جامعة عين شمس، أتعامل مع الهندسة البرمجية والتسويق من منظور إنساني فريد. فهم المسارات الإدراكية ودوافع المستخدم يسمح لي ببناء تجارب واجهة مستخدم بديهية تحقق أفضل النتائج.'}
              </p>
              <p className={darkMode ? 'text-gray-300' : 'text-slate-600'}>
                {lang === 'en'
                  ? 'Beyond writing clean React components and robust Node.js backend services, I configure the server environments they run on — hardening Linux OS nodes, deploying containerized workflows, and optimizing database performance.'
                  : 'بجانب كتابة مكونات React نظيفة وخدمات خلفية قوية بـ Node.js، أقوم بتهيئة السيرفرات التي تعمل عليها: تشديد حماية أنظمة Linux، تشغيل بيئات Docker الحاوية، وتحسين قواعد البيانات.'}
              </p>
            </div>

            <div className="space-y-4">
              <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-slate-50 border-slate-200'}`}>
                <h3 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" /> {lang === 'en' ? 'Technical Infrastructure Passion' : 'الشغف بالبنية التحتية للخوادم'}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  {lang === 'en'
                    ? 'Configuring and hardening Linux VPS environments on Google Cloud Platform, setting up ADB remote streams, and crafting automated Bash CLI scripts.'
                    : 'إدارة وتأمين سيرفرات Linux VPS على GCP، إعداد بث أجهزة الأندرويد عن بُعد، وتطوير السكربتات التلقائية لسطر الأوامر.'}
                </p>
              </div>

              <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-slate-50 border-slate-200'}`}>
                <h3 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" /> {lang === 'en' ? 'Growth & Marketing Mindset' : 'عقلية النمو والتسويق الرقمي'}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  {lang === 'en'
                    ? 'Creating content strategies, Meta ad campaigns, and SEO tactics designed to convert technical capabilities into measurable business growth.'
                    : 'صياغة استراتيجيات المحتوى، الحملات الإعلانية على Meta، وتكتيكات الـ SEO المصممة لتحويل القدرات البرمجية لنقاط نمو قياسية.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">{lang === 'en' ? 'Professional Journey' : 'المسار المهني والخبرات'}</h2>
          <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>{lang === 'en' ? 'Full-stack engineering, cloud sysadmin, and strategic marketing.' : 'التطوير البرمجي، إدارة السيرفرات والتسويق الاستراتيجي.'}</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-cyan-500 before:to-indigo-600">
          
          {/* Experience Item 1 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between group">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/40 shrink-0 z-10 mb-4 md:mb-0 md:order-1">
              1
            </div>

            <div className={`w-full md:w-[45%] p-6 rounded-3xl border transition-all ${darkMode ? 'glass-card border-gray-800 group-hover:border-blue-500/50' : 'bg-white border-slate-200 shadow-sm group-hover:border-blue-400'}`}>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">{lang === 'en' ? 'Full-Stack & Marketing Lead' : 'قائد التطوير والتسويق الرقمي'}</span>
              <h3 className="text-xl font-extrabold mt-1">{lang === 'en' ? 'Fursat Safar Platform' : 'منصة فرصة سفر'}</h3>
              <p className="text-xs font-semibold text-gray-400 mb-3">2023 - {lang === 'en' ? 'Present' : 'الحاضر'}</p>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                {lang === 'en'
                  ? 'Designed, deployed, and managed the complete digital ecosystem for fursatsafar.com. Built React components, custom API endpoints, and optimized SEO landing pages.'
                  : 'تصميم وتنفيذ المنصة الرقمية لفرصة سفر. تطوير واجهات React، وإنشاء خدمات REST API، وتحسين محركات البحث SEO.'}
              </p>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between group">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-cyan-500 text-white font-bold shadow-lg shadow-cyan-500/40 shrink-0 z-10 mb-4 md:mb-0 md:order-1">
              2
            </div>

            <div className={`w-full md:w-[45%] p-6 rounded-3xl border transition-all md:ml-auto ${darkMode ? 'glass-card border-gray-800 group-hover:border-cyan-500/50' : 'bg-white border-slate-200 shadow-sm group-hover:border-cyan-400'}`}>
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-wider">{lang === 'en' ? 'Automation & Systems Developer' : 'مطور أنظمة وأتمتة'}</span>
              <h3 className="text-xl font-extrabold mt-1">{lang === 'en' ? 'Independent Open-Source Engineer' : 'مهندس برمجيات وتطبيق مستقل'}</h3>
              <p className="text-xs font-semibold text-gray-400 mb-3">2022 - {lang === 'en' ? 'Present' : 'الحاضر'}</p>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                {lang === 'en'
                  ? 'Author of wa-sender (WhatsApp bulk automation in TypeScript) and phonescanner (Python OSINT validation tool). Building utility scripts for security & workflow tasks.'
                  : 'مطور أداة wa-sender لأتمتة الواتساب بـ TypeScript، وأداة phonescanner للاستخبارات الرقمية بـ Python.'}
              </p>
            </div>
          </div>

          {/* Experience Item 3 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between group">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/40 shrink-0 z-10 mb-4 md:mb-0 md:order-1">
              3
            </div>

            <div className={`w-full md:w-[45%] p-6 rounded-3xl border transition-all ${darkMode ? 'glass-card border-gray-800 group-hover:border-indigo-500/50' : 'bg-white border-slate-200 shadow-sm group-hover:border-indigo-400'}`}>
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">{lang === 'en' ? 'Cloud Sysadmin & Infrastructure' : 'إدارة الخوادم والبنية التحتية'}</span>
              <h3 className="text-xl font-extrabold mt-1">{lang === 'en' ? 'Cloud VPS & Container Operations' : 'عمليات السيرفرات السحابية والـ VPS'}</h3>
              <p className="text-xs font-semibold text-gray-400 mb-3">2021 - {lang === 'en' ? 'Present' : 'الحاضر'}</p>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                {lang === 'en'
                  ? 'Provisioning Debian/Ubuntu nodes on Google Cloud Compute Engine, establishing SSH tunnels, configuring firewall policies, and deploying Docker containers.'
                  : 'تهيئة وإدارة سيرفرات Linux VPS على Google Cloud، تشغيل أنفاق SSH، وإدارة حزم Docker.'}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">{lang === 'en' ? 'Featured Work & Repositories' : 'المشاريع المنفذة والأكواد'}</h2>
          <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
            {lang === 'en'
              ? 'Hand-picked portfolio of web applications, cloud architecture, and security tools.'
              : 'مجموعة مختارة من التطبيقات المباشرة، معمارية السيرفرات السحابية، والأدوات البرمجية.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: lang === 'en' ? 'All Work' : 'كل الأعمال' },
            { id: 'web', label: lang === 'en' ? 'Full-Stack Web' : 'تطوير الويب' },
            { id: 'infra', label: lang === 'en' ? 'Cloud & Infrastructure' : 'السيرفرات والسحابة' },
            { id: 'marketing', label: lang === 'en' ? 'Scripts & Security' : 'السكربتات والأمان' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                  : darkMode
                  ? 'bg-gray-900/80 border border-gray-800 text-gray-300 hover:bg-gray-800'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode
                  ? 'glass-card border-gray-800/80 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10'
                  : 'bg-white border-slate-200 shadow-md hover:shadow-xl hover:border-blue-400'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-blue-600/10 shrink-0">
                    {project.icon}
                  </div>

                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-xl border transition ${darkMode ? 'bg-gray-900 border-gray-800 hover:text-blue-400' : 'bg-slate-100 border-slate-200 hover:text-blue-600'}`}
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-xl border transition ${darkMode ? 'bg-gray-900 border-gray-800 hover:text-cyan-400' : 'bg-slate-100 border-slate-200 hover:text-cyan-600'}`}
                        title="Live Site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/40">
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
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-6 max-w-6xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
            <Brain className="w-4 h-4" />
            <span>{lang === 'en' ? 'Psychology + Engineering Method' : 'منهجية السيكولوجية والهندسة البرمجية'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">{lang === 'en' ? 'Case Studies & Solutions' : 'دراسات الحالة والحلول'}</h2>
          <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
            {lang === 'en'
              ? 'Real-world technical problem solving combined with user behavior optimization.'
              : 'حلول تقنية حقيقية مدمجة بتطبيقات سلوك المستخدم والتحول الرقمي.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className={`p-8 rounded-3xl border flex flex-col justify-between ${darkMode ? 'glass-card border-gray-800' : 'bg-white border-slate-200 shadow-md'}`}>
              <div>
                <span className="text-xs font-extrabold text-blue-500 uppercase tracking-widest">{cs.client}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{cs.title}</h3>
                <div className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                  {cs.impact}
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                  {cs.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/40">
                {cs.tags.map(t => (
                  <span key={t} className={`px-2.5 py-1 rounded-md text-xs font-semibold ${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-slate-100 text-slate-600'}`}>
                    {t}
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
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">{lang === 'en' ? 'Core Competencies' : 'المهارات والخبرات الأساسية'}</h2>
          <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>{lang === 'en' ? 'Technologies and methodology stack.' : 'التقنيات والمنهجيات البرمجية.'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Web Development */}
          <div className={`p-8 rounded-3xl border ${darkMode ? 'glass-card border-gray-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold">{lang === 'en' ? 'Web Development' : 'تطوير المواقع والويب'}</h3>
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
              <h3 className="text-xl font-bold">{lang === 'en' ? 'Cloud & DevOps' : 'السحابة وإدارة الخوادم'}</h3>
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
              <h3 className="text-xl font-bold">{lang === 'en' ? 'Digital Marketing & Design' : 'التسويق الرقمي والتصميم'}</h3>
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
              <h3 className="text-xl font-bold">{lang === 'en' ? 'Psychology & Strategy' : 'علم النفس والاستراتيجية'}</h3>
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

      {/* Education & Recognition */}
      <section className="py-16 px-6 max-w-5xl mx-auto z-10 relative">
        <div className={`p-8 rounded-3xl border ${darkMode ? 'glass-panel border-gray-800' : 'bg-white border-slate-200 shadow-sm'}`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-blue-500" /> {lang === 'en' ? 'Education & Recognition' : 'المؤهل العلمي والمشاركات'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-500 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{lang === 'en' ? 'B.A. in Psychology' : 'بكالوريوس علم النفس'}</h3>
                <p className="text-blue-500 text-sm font-medium">{lang === 'en' ? 'Ain Shams University' : 'جامعة عين شمس'}</p>
                <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                  {lang === 'en'
                    ? 'Focused on cognitive psychology, human behavior analysis, and statistical methods.'
                    : 'التركيز على علم النفس الإدراكي، تحليل السلوك البشري والمناهج الإحصائية.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-cyan-600/10 text-cyan-500 shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{lang === 'en' ? 'Google Local Guide (Level 5)' : 'مرشد محلي في جوجل (المستوى 5)'}</h3>
                <p className="text-cyan-500 text-sm font-medium">{lang === 'en' ? 'Geographic Contributions' : 'المساهمات الخرائطية الرقمية'}</p>
                <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                  {lang === 'en'
                    ? 'Active contributor to digital mapping, localized business data, and geo reviews.'
                    : 'مساهم فعال في البيانات الجغرافية المحلية، دعم الأعمال وتقييم النطاقات.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form Section */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto z-10 relative">
        <div className={`p-8 sm:p-14 rounded-3xl border relative overflow-hidden ${darkMode ? 'bg-gradient-to-b from-gray-900 via-gray-950 to-blue-950/40 border-gray-800' : 'bg-gradient-to-b from-blue-50 via-slate-50 to-indigo-50 border-blue-100 shadow-xl'}`}>
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="p-3.5 rounded-2xl bg-blue-600/10 text-blue-500 inline-block mb-4">
              <Mail className="w-7 h-7" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">{lang === 'en' ? "Let's Build Something Impactful" : 'لنعمل معاً على بناء مشروع متكامل'}</h2>
            <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
              {lang === 'en'
                ? 'Send a direct message or get in touch for web development, cloud infrastructure, or digital marketing projects.'
                : 'تواصل معي مباشرة لمشاريع تطوير الويب، إدارة البنية التحتية، أو استراتيجيات التسويق الرقمي.'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto space-y-5 text-left rtl:text-right mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={`block text-xs font-bold mb-2 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-slate-700'}`}>
                  {lang === 'en' ? 'Your Name' : 'اسمك الكريم'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={lang === 'en' ? 'John Doe' : 'أحمد محمود'}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900/90 border-gray-800 text-white placeholder-gray-600' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'}`}
                />
              </div>

              <div>
                <label className={`block text-xs font-bold mb-2 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-slate-700'}`}>
                  {lang === 'en' ? 'Your Email' : 'بريدك الإلكتروني'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900/90 border-gray-800 text-white placeholder-gray-600' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'}`}
                />
              </div>
            </div>

            <div>
              <label className={`block text-xs font-bold mb-2 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-slate-700'}`}>
                {lang === 'en' ? 'Subject' : 'موضوع الرسالة'}
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder={lang === 'en' ? 'Project Inquiry / Job Opportunity' : 'استفسار عن مشروع / فرصة عمل'}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900/90 border-gray-800 text-white placeholder-gray-600' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'}`}
              />
            </div>

            <div>
              <label className={`block text-xs font-bold mb-2 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-slate-700'}`}>
                {lang === 'en' ? 'Your Message' : 'تفاصيل الرسالة'}
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={lang === 'en' ? 'Tell me about your project or inquiry...' : 'اكتب تفاصيل الفكرة أو الاستفسار هنا...'}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900/90 border-gray-800 text-white placeholder-gray-600' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'}`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3.5 px-6 rounded-xl font-bold shadow-lg shadow-blue-600/30 transition hover:scale-[1.01] disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>{lang === 'en' ? 'Sending Message...' : 'جاري إرسال الرسالة...'}</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Send Message' : 'إرسال الرسالة الآن'}</span>
                </>
              )}
            </button>

            {formSubmitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold text-center animate-fade-in">
                {lang === 'en' ? '✓ Thank you! Your message has been sent successfully.' : '✓ شكراً لك! تم إرسال رسالتك بنجاح وسأرد عليك في أقرب وقت.'}
              </div>
            )}
          </form>

          {/* Social Links Bar */}
          <div className="flex flex-wrap justify-center gap-4 pt-8 border-t border-gray-800/40">
            <a
              href="mailto:amgd.sayed@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition shadow-lg shadow-blue-600/25 hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              amgd.sayed@gmail.com
            </a>
            
            <a
              href="https://github.com/AmgdSMousa"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border transition hover:scale-105 ${darkMode ? 'bg-gray-900 border-gray-700 text-gray-200 hover:bg-gray-800' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'}`}
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/amgedmoussa"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border transition hover:scale-105 ${darkMode ? 'bg-gray-900 border-gray-700 text-gray-200 hover:bg-gray-800' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'}`}
            >
              <LinkedinIcon className="w-4 h-4 text-blue-500" />
              LinkedIn
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className={`py-10 px-6 border-t z-10 relative text-sm ${darkMode ? 'border-gray-900 text-gray-500' : 'border-slate-200 text-slate-500'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Amged Sayed. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-blue-500 transition">{lang === 'en' ? 'About' : 'عن المطور'}</a>
            <a href="#projects" className="hover:text-blue-500 transition">{lang === 'en' ? 'Projects' : 'المشاريع'}</a>
            <a href="#contact" className="hover:text-blue-500 transition">{lang === 'en' ? 'Contact' : 'تواصل معي'}</a>
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