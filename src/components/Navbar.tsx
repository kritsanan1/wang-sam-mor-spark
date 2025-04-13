
import React, { useState } from 'react';
import NavbarLogo from './navbar/NavbarLogo';
import MobileMenuButton from './navbar/MobileMenuButton';
import DesktopMenu from './navbar/DesktopMenu';
import MobileMenu from './navbar/MobileMenu';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavbarLogo />
        <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <DesktopMenu />
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Navbar;
