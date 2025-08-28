import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4f22ec4fe_favicon.png";

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'How We Work', href: '#how-we-work' },
    { name: 'Blog', href: '#news' },
    { name: 'Pricing', href: '/pricing', isPage: true },
  ];
  
  const handleNavClick = (e, href, isPage = false) => {
    if (isPage) {
      return;
    }
    
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href__="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3">
            <img className="h-10 w-10" src={logoUrl} alt="Hello Deutsch Icon" />
            <span className="text-teal-600 text-2xl font-bold">Hello Deutsch</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <a 
                  key={link.name}
                  href__={link.href}
                  className="text-gray-700 hover:text-teal-600 font-medium text-base transition-colors duration-200"
                >
                  {link.name}
                </a>
              ) : (
                <a 
                  key={link.name}
                  href__={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-700 hover:text-teal-600 font-medium text-base transition-colors duration-200"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-gray-200">
            <nav className="pt-6 space-y-4">
              {navLinks.map((link) => (
                link.isPage ? (
                  <a 
                    key={link.name}
                    href__={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-700 hover:text-teal-600 py-2 font-medium text-lg transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ) : (
                  <a 
                    key={link.name}
                    href__={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-gray-700 hover:text-teal-600 py-2 font-medium text-lg transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
