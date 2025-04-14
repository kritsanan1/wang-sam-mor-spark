
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarLogo from './navbar/NavbarLogo';
import MobileMenu from './navbar/MobileMenu';
import MobileMenuButton from './navbar/MobileMenuButton';
import DesktopMenu from './navbar/DesktopMenu';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ตรวจจับการเลื่อนหน้าเพื่อเปลี่ยนสีพื้นหลัง Navbar
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

  // ปิดเมนูเมื่อเปลี่ยนหน้า
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // รายการลิงก์ในเมนู
  const navLinks: NavLink[] = [
    { text: "หน้าหลัก", href: "/" },
    { 
      text: "สถานที่ท่องเที่ยว",
      href: "/tour/1",
      subLinks: [
        { text: "ธรรมชาติ", href: "/tour/1" },
        { text: "วัฒนธรรม", href: "/tour/2" },
        { text: "ประวัติศาสตร์", href: "/tour/3" },
      ]
    },
    { text: "ร้านอาหาร", href: "/food" },
    { text: "ที่พัก", href: "/accommodation" },
    { text: "แผนที่และการเดินทาง", href: "/travel-map" },
    { text: "โปรโมชั่นพิเศษ", href: "/promotion-packages" },
    { text: "บทความ", href: "/blog" },
    { text: "เว็บบอร์ด", href: "/forum" },
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isScrolled || !isHomePage
            ? "bg-white shadow-md" 
            : "bg-transparent"
        )}
        aria-label="เมนูหลัก"
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <NavbarLogo />
          
          <DesktopMenu links={navLinks} user={user} />
          
          <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </header>

      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        links={navLinks}
        user={user}
      />
    </>
  );
};

export default Navbar;
