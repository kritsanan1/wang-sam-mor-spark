
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavbarLogo: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 transition-transform hover:scale-105"
      aria-label="โลโก้ Tour Der Wang - กลับหน้าหลัก"
    >
      <img 
        src="/lovable-uploads/317bf558-3ea4-4d03-b015-0555c319ffac.png" 
        alt="Tour Der Wang Logo" 
        className="h-12 w-auto"
        width="48"
        height="48"
      />
      <span className={`text-xl font-bold hidden md:block transition-colors duration-300 ${
        isHomePage ? "text-white" : "text-wang-darkGray"
      }`}>
        TOUR DER WANG
      </span>
    </Link>
  );
};

export default NavbarLogo;
