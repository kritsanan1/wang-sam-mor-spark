
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/317bf558-3ea4-4d03-b015-0555c319ffac.png" 
            alt="Tour Der Wang Logo" 
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-wang-darkGray hidden md:block">
            TOUR DER WANG
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-wang-darkGray"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/#attractions" className="text-wang-darkGray hover:text-wang-orange font-medium transition-colors">
            แหล่งท่องเที่ยว
          </Link>
          <Link to="/#food" className="text-wang-darkGray hover:text-wang-orange font-medium transition-colors">
            อาหาร
          </Link>
          <Link to="/#culture" className="text-wang-darkGray hover:text-wang-orange font-medium transition-colors">
            วัฒนธรรม
          </Link>
          <Link to="/#events" className="text-wang-darkGray hover:text-wang-orange font-medium transition-colors">
            เทศกาล
          </Link>
          <Link to="/promotion-packages" className="text-wang-darkGray hover:text-wang-orange font-medium transition-colors">
            แพ็คเกจโฆษณา
          </Link>
          <Link to="/#contact" className="wang-button">
            วางแผนการเดินทาง
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <Link 
            to="/#attractions" 
            className="text-xl font-medium text-wang-darkGray hover:text-wang-orange"
            onClick={toggleMenu}
          >
            แหล่งท่องเที่ยว
          </Link>
          <Link 
            to="/#food" 
            className="text-xl font-medium text-wang-darkGray hover:text-wang-orange"
            onClick={toggleMenu}
          >
            อาหาร
          </Link>
          <Link 
            to="/#culture" 
            className="text-xl font-medium text-wang-darkGray hover:text-wang-orange"
            onClick={toggleMenu}
          >
            วัฒนธรรม
          </Link>
          <Link 
            to="/#events" 
            className="text-xl font-medium text-wang-darkGray hover:text-wang-orange"
            onClick={toggleMenu}
          >
            เทศกาล
          </Link>
          <Link 
            to="/promotion-packages" 
            className="text-xl font-medium text-wang-darkGray hover:text-wang-orange"
            onClick={toggleMenu}
          >
            แพ็คเกจโฆษณา
          </Link>
          <Link 
            to="/#contact" 
            className="wang-button mt-4" 
            onClick={toggleMenu}
          >
            วางแผนการเดินทาง
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
