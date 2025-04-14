
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

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

  // Navigation links
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
        {/* Logo */}
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
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <li key={`${link.text}-${index}`} className="relative group">
                {link.subLinks ? (
                  <div>
                    <button 
                      className={cn(
                        "flex items-center py-2 text-base font-medium transition-colors group-hover:text-[#3498db]",
                        isHomePage ? "text-white" : "text-wang-darkGray"
                      )}
                    >
                      {link.text}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                      <div className="py-2">
                        {link.subLinks.map((subLink, subIndex) => (
                          <Link 
                            key={`${subLink.text}-${subIndex}`}
                            to={subLink.href} 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#3498db]/10 hover:text-[#3498db]"
                          >
                            {subLink.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={link.href} 
                    className={cn(
                      "py-2 text-base font-medium transition-colors hover:text-[#3498db] relative",
                      isHomePage ? "text-white" : "text-wang-darkGray",
                      location.pathname === link.href && "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#3498db]"
                    )}
                  >
                    {link.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Auth Buttons */}
        <div className="flex items-center">
          {menuUserData ? (
            <div className="hidden md:flex items-center">
              <div className="relative group">
                <button className="flex items-center gap-2 focus:outline-none">
                  {menuUserData.avatar ? (
                    <img 
                      src={menuUserData.avatar} 
                      alt={menuUserData.name}
                      className="h-8 w-8 rounded-full object-cover" 
                    />
                  ) : (
                    <div className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center text-white",
                      isHomePage ? "bg-white/20" : "bg-[#3498db]"
                    )}>
                      {menuUserData.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className={cn(
                    "hidden lg:block font-medium",
                    isHomePage ? "text-white" : "text-wang-darkGray"
                  )}>
                    {menuUserData.name}
                  </span>
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform group-hover:rotate-180",
                    isHomePage ? "text-white" : "text-wang-darkGray"
                  )} />
                </button>
                
                <div className="absolute right-0 top-full z-10 mt-1 w-48 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {menuUserData.role === 'admin' && (
                      <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#3498db]/10 hover:text-[#3498db]">
                        แผงควบคุม
                      </Link>
                    )}
                    <Link to="/forum" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#3498db]/10 hover:text-[#3498db]">
                      เว็บบอร์ด
                    </Link>
                    <button 
                      onClick={() => useAuth().logout()}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      ออกจากระบบ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link 
              to="/auth" 
              className={cn(
                "hidden md:block px-6 py-2 font-semibold rounded-md transition-colors",
                isHomePage 
                  ? "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm" 
                  : "bg-[#3498db] text-white hover:bg-[#3498db]/90"
              )}
            >
              เข้าสู่ระบบ
            </Link>
          )}
          
          {/* Mobile Menu Button */}
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
              <X size={24} className={isHomePage ? "text-white" : "text-wang-darkGray"} />
            ) : (
              <Menu size={24} className={isHomePage ? "text-white" : "text-wang-darkGray"} />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bottom-0 bg-white z-40 flex flex-col overflow-y-auto transition-all duration-300",
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
        aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link, index) => (
            <div key={`${link.text}-${index}`} className="border-b border-gray-100 pb-4">
              <Link 
                to={link.href} 
                className="text-lg font-medium text-wang-darkGray hover:text-[#3498db] flex items-center justify-between"
                onClick={toggleMenu}
              >
                {link.text}
                {link.subLinks && <ChevronDown size={18} />}
              </Link>
              
              {link.subLinks && (
                <div className="pl-4 mt-2 space-y-2">
                  {link.subLinks.map((subLink, subIndex) => (
                    <Link 
                      key={`${subLink.text}-${subIndex}`}
                      to={subLink.href} 
                      className="text-base text-wang-darkGray/80 hover:text-[#3498db] block py-1"
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
          {menuUserData ? (
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                {menuUserData.avatar ? (
                  <img 
                    src={menuUserData.avatar} 
                    alt={menuUserData.name} 
                    className="h-10 w-10 rounded-full" 
                  />
                ) : (
                  <div className="h-10 w-10 bg-[#3498db] rounded-full grid place-items-center text-white">
                    {menuUserData.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <p className="font-medium">{menuUserData.name}</p>
                  <p className="text-sm text-gray-500">{menuUserData.role === 'admin' ? 'ผู้ดูแลระบบ' : 'สมาชิก'}</p>
                </div>
              </div>
              
              {menuUserData.role === 'admin' && (
                <Link 
                  to="/admin" 
                  className="text-gray-600 hover:text-[#3498db] flex items-center space-x-2"
                  onClick={toggleMenu}
                >
                  <span>แผงควบคุม</span>
                </Link>
              )}
              
              <Button 
                variant="outline" 
                className="w-full justify-start text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
                onClick={() => {
                  useAuth().logout();
                  toggleMenu();
                }}
              >
                <span>ออกจากระบบ</span>
              </Button>
            </div>
          ) : (
            <Link 
              to="/auth" 
              className="bg-[#3498db] text-white hover:bg-[#3498db]/90 w-full flex justify-center items-center px-6 py-2 font-semibold rounded-md transition-colors" 
              onClick={toggleMenu}
            >
              <User className="mr-2 h-4 w-4" />
              เข้าสู่ระบบ
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
