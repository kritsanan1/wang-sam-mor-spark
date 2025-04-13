
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo: React.FC = () => {
  return (
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
  );
};

export default NavbarLogo;
