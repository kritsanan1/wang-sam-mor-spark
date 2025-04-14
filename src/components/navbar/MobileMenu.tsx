
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { NavLink } from '../Navbar';
import { ChevronRight, User, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  links: NavLink[];
  user?: {
    name: string;
    avatar: string;
    role: string;
  };
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu, links, user }) => {
  const { logout } = useAuth();

  return (
    <div 
      id="mobile-menu"
      className={cn(
        "fixed inset-x-0 top-[4.5rem] bottom-0 bg-white z-40 flex flex-col overflow-y-auto transition-all duration-300 md:hidden",
        isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}
      aria-hidden={!isMenuOpen}
    >
      <nav className="flex flex-col p-6 space-y-4">
        {links.map((link, index) => (
          <div key={`${link.text}-${index}`} className="border-b border-gray-100 pb-4">
            <Link 
              to={link.href} 
              className="text-lg font-medium text-wang-darkGray hover:text-wang-orange flex items-center justify-between"
              onClick={toggleMenu}
            >
              {link.text}
              {link.subLinks && <ChevronRight size={18} />}
            </Link>
            
            {link.subLinks && (
              <div className="pl-4 mt-2 space-y-2">
                {link.subLinks.map((subLink, subIndex) => (
                  <Link 
                    key={`${subLink.text}-${subIndex}`}
                    to={subLink.href} 
                    className="text-base text-wang-darkGray/80 hover:text-wang-orange block py-1"
                    onClick={toggleMenu}
                  >
                    {subLink.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      
      <div className="mt-auto p-6 border-t border-gray-100">
        {user ? (
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="h-10 w-10 rounded-full" 
                />
              ) : (
                <div className="h-10 w-10 bg-wang-orange rounded-full grid place-items-center text-white">
                  {user.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.role === 'admin' ? 'ผู้ดูแลระบบ' : 'สมาชิก'}</p>
              </div>
            </div>
            
            {user.role === 'admin' && (
              <Link 
                to="/admin" 
                className="text-gray-600 hover:text-wang-orange flex items-center space-x-2"
                onClick={toggleMenu}
              >
                <span>แผงควบคุม</span>
              </Link>
            )}
            
            <Button 
              variant="outline" 
              className="w-full justify-start text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
              onClick={() => {
                logout();
                toggleMenu();
              }}
            >
              <LogOut className="mr-2 h-4 w-4" /> 
              <span>ออกจากระบบ</span>
            </Button>
          </div>
        ) : (
          <Link 
            to="/auth" 
            className="wang-button w-full flex justify-center items-center" 
            onClick={toggleMenu}
          >
            <User className="mr-2 h-4 w-4" />
            เข้าสู่ระบบ
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
