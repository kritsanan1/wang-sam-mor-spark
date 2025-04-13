
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

// Mock authentication - in a real application, this would connect to a backend
const mockUsers = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'member' }
];

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const navigate = useNavigate();

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const user = mockUsers.find(u => u.username === username && u.password === password);
    
    if (user) {
      // In a real app, you'd store the token in localStorage or use a auth context
      localStorage.setItem('user', JSON.stringify({
        username: user.username,
        role: user.role,
        isAuthenticated: true
      }));
      
      toast({
        title: "เข้าสู่ระบบสำเร็จ",
        description: `ยินดีต้อนรับ ${user.username}`,
      });
      
      navigate('/');
    } else {
      toast({
        variant: "destructive",
        title: "เข้าสู่ระบบล้มเหลว",
        description: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
      });
    }
  };

  // Register handler
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerPassword !== registerConfirmPassword) {
      toast({
        variant: "destructive",
        title: "ลงทะเบียนล้มเหลว",
        description: "รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง",
      });
      return;
    }
    
    // In a real app, you would send this to your backend
    toast({
      title: "ลงทะเบียนสำเร็จ",
      description: "บัญชีของคุณถูกสร้างแล้ว กรุณาเข้าสู่ระบบ",
    });
    
    // Clear form
    setRegisterUsername('');
    setRegisterPassword('');
    setRegisterConfirmPassword('');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-12">
      <div className="wang-container flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">เข้าสู่ระบบ Tour Der Wang</CardTitle>
            <CardDescription>เข้าสู่ระบบเพื่อเข้าถึงคุณสมบัติพิเศษและจัดการข้อมูล</CardDescription>
          </CardHeader>
          
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">เข้าสู่ระบบ</TabsTrigger>
              <TabsTrigger value="register">สมัครสมาชิก</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label htmlFor="username" className="text-sm font-medium">ชื่อผู้ใช้</label>
                    <Input 
                      id="username" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="กรอกชื่อผู้ใช้" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">รหัสผ่าน</label>
                    <Input 
                      id="password" 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="กรอกรหัสผ่าน" 
                      required 
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full bg-wang-orange hover:bg-wang-orange/90">เข้าสู่ระบบ</Button>
                </CardFooter>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label htmlFor="register-username" className="text-sm font-medium">ชื่อผู้ใช้</label>
                    <Input 
                      id="register-username" 
                      value={registerUsername}
                      onChange={(e) => setRegisterUsername(e.target.value)}
                      placeholder="กรอกชื่อผู้ใช้" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="register-password" className="text-sm font-medium">รหัสผ่าน</label>
                    <Input 
                      id="register-password" 
                      type="password" 
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      placeholder="กรอกรหัสผ่าน" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="confirm-password" className="text-sm font-medium">ยืนยันรหัสผ่าน</label>
                    <Input 
                      id="confirm-password" 
                      type="password" 
                      value={registerConfirmPassword}
                      onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                      placeholder="ยืนยันรหัสผ่าน" 
                      required 
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full bg-wang-orange hover:bg-wang-orange/90">สมัครสมาชิก</Button>
                </CardFooter>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
