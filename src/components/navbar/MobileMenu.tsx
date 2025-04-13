
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const { user, logout } = useAuth();

  return (
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
        to="/forum" 
        className="text-xl font-medium text-wang-darkGray hover:text-wang-orange"
        onClick={toggleMenu}
      >
        เว็บบอร์ด
      </Link>
      <Link 
        to="/promotion-packages" 
        className="text-xl font-medium text-wang-darkGray hover:text-wang-orange"
        onClick={toggleMenu}
      >
        แพ็คเกจโฆษณา
      </Link>
      
      {user && user.isAuthenticated ? (
        <>
          {user.role === 'admin' && (
            <Link 
              to="/admin" 
              className="text-xl font-medium text-wang-darkGray hover:text-wang-orange"
              onClick={toggleMenu}
            >
              แผงควบคุม
            </Link>
          )}
          <button 
            onClick={() => {
              logout();
              toggleMenu();
            }} 
            className="text-xl font-medium text-red-600 mt-4"
          >
            ออกจากระบบ
          </button>
        </>
      ) : (
        <Link 
          to="/auth" 
          className="wang-button mt-4" 
          onClick={toggleMenu}
        >
          เข้าสู่ระบบ
        </Link>
      )}
    </div>
  );
};

export default MobileMenu;
