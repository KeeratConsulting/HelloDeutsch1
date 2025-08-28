import React from 'react';

export default function Footer() {
  const logoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5d08d62c8_logo-icon.png";

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0">
            <img className="h-9 w-auto" src={logoUrl} alt="Hello Deutsch Logo" />
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href__="#" className="hover:text-white transition-colors">Home</a>
            <a href__="#" className="hover:text-white transition-colors">Our Story</a>
            <a href__="#" className="hover:text-white transition-colors">How We Work</a>
            <a href__="#" className="hover:text-white transition-colors">Blog</a>
            <a href__="#" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Hello Deutsch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
