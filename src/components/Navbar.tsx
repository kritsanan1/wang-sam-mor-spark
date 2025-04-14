
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavbarLogo from './navbar/NavbarLogo';
import MobileMenuButton from './navbar/MobileMenuButton';
import DesktopMenu from './navbar/DesktopMenu';
import MobileMenu from './navbar/MobileMenu';

export interface NavLink {
  text: string;
  href: string;
  subLinks?: NavLink[];
}

export interface NavbarProps {
  links?: NavLink[];
  user?: {
    name: string;
    avatar: string;
    role: string;
  };
}

const defaultLinks: NavLink[] = [
  { text: "แหล่งท่องเที่ยว", href: "/#attractions" },
  { text: "อาหาร", href: "/#food", subLinks: [
    { text: "อาหารท้องถิ่น", href: "/#food" },
    { text: "ร้านแนะนำ", href: "/#food" }
  ] },
  { text: "วัฒนธรรม", href: "/#culture" },
  { text: "เทศกาล", href: "/#events" },
  { text: "เว็บบอร์ด", href: "/forum" },
  { text: "บทความ", href: "/blog" },
  { text: "แพ็คเกจโฆษณา", href: "/promotion-packages" }
];

const Navbar: React.FC<NavbarProps> = ({ links = defaultLinks, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Add scroll event listener to detect when to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
      role="banner"
      aria-label="หัวเว็บไซต์และเมนูนำทาง"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavbarLogo />
        
        <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        
        <DesktopMenu links={links} user={user} />
        
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} links={links} user={user} />
      </div>
    </header>
  );
};

export default Navbar;
