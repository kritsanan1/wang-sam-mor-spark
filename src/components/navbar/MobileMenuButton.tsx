
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <Button 
      variant="ghost"
      size="icon"
      className="md:hidden text-wang-darkGray hover:bg-wang-orange/10 hover:text-wang-orange transition-colors"
      onClick={toggleMenu}
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
      aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
    >
      {isMenuOpen ? (
        <X size={24} className="transition-all duration-300 animate-in fade-in" />
      ) : (
        <Menu size={24} className="transition-all duration-300 animate-in fade-in" />
      )}
    </Button>
  );
};

export default MobileMenuButton;
