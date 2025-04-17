
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import NavbarLogo from './navbar/NavbarLogo';
import MobileMenuButton from './navbar/MobileMenuButton';
import MobileMenu from './navbar/MobileMenu';
import DesktopMenu from './navbar/DesktopMenu';
import { getNavLinks } from './navbar/NavLinks';

export interface NavLink {
  text: string;
  href: string;
  subLinks?: { text: string; href: string }[];
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navLinks = getNavLinks();

  // Transform user data format for menu components
  const menuUserData = user ? {
    name: user.username,
    avatar: '', // No avatar in current auth context
    role: user.role
  } : undefined;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect scroll for changing navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when changing pages
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 font-['Open Sans']",
        isScrolled || !isHomePage
          ? "bg-white shadow-md" 
          : "bg-transparent"
      )}
      aria-label="เมนูหลัก"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <NavbarLogo />
        
        <div className="flex items-center">
          <DesktopMenu links={navLinks} user={menuUserData} />
          <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        links={navLinks} 
        user={menuUserData} 
      />
    </header>
  );
};

export default Navbar;
