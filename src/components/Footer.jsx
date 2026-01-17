import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="py-24 bg-gray-900 text-white px-6 text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-10">Let's Connect</h2>
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
            <p className="text-lg">Arabic (Native) / English (Intermediate)</p>
          </div>
        </div>
        <p className="text-gray-500 font-medium">© 2026 Amged Sayed. Marketing Specialist & Web Developer.</p>
      </div>
    </footer>
  );
}