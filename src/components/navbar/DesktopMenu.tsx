
import React from 'react';
import { Link } from 'react-router-dom';
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

const DesktopMenu: React.FC = () => {
  const { user, logout } = useAuth();

  return (
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
        <UserDropdown user={user} logout={logout} />
      ) : (
        <Link to="/auth" className="wang-button">
          เข้าสู่ระบบ
        </Link>
      )}
    </nav>
  );
};

interface UserDropdownProps {
  user: {
    username: string;
    role: string;
  };
  logout: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ user, logout }) => {
  return (
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
        <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600 cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>ออกจากระบบ</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DesktopMenu;
