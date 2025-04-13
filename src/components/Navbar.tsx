
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<{ username?: string; role?: string; isAuthenticated?: boolean } | null>(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if user is logged in on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast({
      title: "ออกจากระบบสำเร็จ",
      description: "คุณได้ออกจากระบบเรียบร้อยแล้ว",
    });
    navigate('/');
  };

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
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

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-wang-darkGray"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/#attractions" className="text-wang-darkGray hover:text-wang-orange font-medium transition-colors">
                  แหล่งท่องเที่ยว
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>อาหาร</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <ul className="grid gap-3 p-4">
                      <li>
                        <Link
                          to="/#food"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">อาหารท้องถิ่น</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            อาหารพื้นเมืองที่มีชื่อเสียงของวังสามหมอ
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/#food"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">ร้านแนะนำ</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            ร้านอาหารที่นักท่องเที่ยวนิยมไปเยี่ยมชม
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/#culture" className="text-wang-darkGray hover:text-wang-orange font-medium transition-colors">
                  วัฒนธรรม
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/#events" className="text-wang-darkGray hover:text-wang-orange font-medium transition-colors">
                  เทศกาล
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/forum" className="text-wang-darkGray hover:text-wang-orange font-medium transition-colors">
                  เว็บบอร์ด
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/promotion-packages" className="text-wang-darkGray hover:text-wang-orange font-medium transition-colors">
                  แพ็คเกจโฆษณา
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {user && user.isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.username}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.role === 'admin' ? 'ผู้ดูแลระบบ' : 'สมาชิก'}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {user.role === 'admin' && (
                  <DropdownMenuItem asChild>
                    <Link to="/admin">แผงควบคุม</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem asChild>
                  <Link to="/forum">เว็บบอร์ด</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>ออกจากระบบ</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth" className="wang-button">
              เข้าสู่ระบบ
            </Link>
          )}
        </nav>

        {/* Mobile Navigation */}
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
                  handleLogout();
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
      </div>
    </header>
  );
};

export default Navbar;
