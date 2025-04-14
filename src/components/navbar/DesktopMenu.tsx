
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from '../Navbar';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
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
import { LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

interface DesktopMenuProps {
  links: NavLink[];
  user?: {
    name: string;
    avatar: string;
    role: string;
  };
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ links, user }) => {
  const { logout } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="hidden md:flex items-center gap-6">
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link, index) => (
            <NavigationMenuItem key={`${link.text}-${index}`}>
              {link.subLinks ? (
                <>
                  <NavigationMenuTrigger className={cn(
                    "text-base font-medium bg-transparent hover:bg-transparent hover:text-wang-orange focus:bg-transparent",
                    isHomePage ? "text-white" : "text-wang-darkGray"
                  )}>
                    {link.text}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-2">
                      <ul className="grid gap-1">
                        {link.subLinks.map((subLink, subIndex) => (
                          <li key={`${subLink.text}-${subIndex}`}>
                            <Link
                              to={subLink.href}
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{subLink.text}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link 
                  to={link.href} 
                  className={cn(
                    "text-base font-medium transition-colors hover:text-wang-orange",
                    isHomePage ? "text-white" : "text-wang-darkGray"
                  )}
                >
                  {link.text}
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {user ? (
        <UserDropdown user={user} logout={logout} isHomePage={isHomePage} />
      ) : (
        <Link to="/auth" className={cn(
          "px-6 py-2 font-semibold rounded-md transition-colors",
          isHomePage 
            ? "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm" 
            : "bg-wang-orange text-white hover:bg-wang-orange/90"
        )}>
          เข้าสู่ระบบ
        </Link>
      )}
    </nav>
  );
};

interface UserDropdownProps {
  user: {
    name: string;
    avatar: string;
    role: string;
  };
  logout: () => void;
  isHomePage: boolean;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ user, logout, isHomePage }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className={cn(
            "relative h-9 w-9 rounded-full p-0 hover:bg-wang-orange/10", 
            isHomePage ? "hover:bg-white/10 text-white" : "text-wang-darkGray"
          )}
          aria-label="เมนูผู้ใช้"
        >
          {user.avatar ? (
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="h-full w-full rounded-full object-cover" 
            />
          ) : (
            <User className="h-5 w-5" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
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
        <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600 cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>ออกจากระบบ</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DesktopMenu;
