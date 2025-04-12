
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/317bf558-3ea4-4d03-b015-0555c319ffac.png" 
            alt="Tour Der Wang Logo" 
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-wang-darkGray hidden md:block">
            TOUR DER WANG
          </span>
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-wang-darkGray"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#attractions" className="text-wang-darkGray hover:text-wang-orange font-medium transition-colors">
            แหล่งท่องเที่ยว
          </a>
          <a href="#food" className="text-wang-darkGray hover:text-wang-orange font-medium transition-colors">
            อาหาร
          </a>
          <a href="#culture" className="text-wang-darkGray hover:text-wang-orange font-medium transition-colors">
            วัฒนธรรม
          </a>
          <a href="#events" className="text-wang-darkGray hover:text-wang-orange font-medium transition-colors">
            เทศกาล
          </a>
          <a href="#contact" className="wang-button">
            วางแผนการเดินทาง
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <a 
            href="#attractions" 
            className="text-xl font-medium text-wang-darkGray hover:text-wang-orange"
            onClick={toggleMenu}
          >
            แหล่งท่องเที่ยว
          </a>
          <a 
            href="#food" 
            className="text-xl font-medium text-wang-darkGray hover:text-wang-orange"
            onClick={toggleMenu}
          >
            อาหาร
          </a>
          <a 
            href="#culture" 
            className="text-xl font-medium text-wang-darkGray hover:text-wang-orange"
            onClick={toggleMenu}
          >
            วัฒนธรรม
          </a>
          <a 
            href="#events" 
            className="text-xl font-medium text-wang-darkGray hover:text-wang-orange"
            onClick={toggleMenu}
          >
            เทศกาล
          </a>
          <a 
            href="#contact" 
            className="wang-button mt-4" 
            onClick={toggleMenu}
          >
            วางแผนการเดินทาง
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
