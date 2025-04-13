
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  // Check if user is authenticated and is admin
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user.isAuthenticated || user.role !== 'admin') {
      navigate('/auth');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <div className="wang-container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">แผงควบคุมผู้ดูแลระบบ</h1>
            <p className="text-gray-600">จัดการเว็บไซต์และข้อมูลต่างๆ</p>
          </div>
          
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">ภาพรวม</TabsTrigger>
              <TabsTrigger value="content">จัดการเนื้อหา</TabsTrigger>
              <TabsTrigger value="users">ผู้ใช้งาน</TabsTrigger>
              <TabsTrigger value="forum">เว็บบอร์ด</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>ผู้เข้าชม</CardTitle>
                    <CardDescription>จำนวนผู้เข้าชมเว็บไซต์</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">1,254</p>
                    <p className="text-green-600 text-sm">+12% จากเดือนที่แล้ว</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>สมาชิก</CardTitle>
                    <CardDescription>จำนวนสมาชิกทั้งหมด</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">243</p>
                    <p className="text-green-600 text-sm">+5% จากเดือนที่แล้ว</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>โพสต์</CardTitle>
                    <CardDescription>จำนวนโพสต์ทั้งหมด</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">56</p>
                    <p className="text-green-600 text-sm">+8% จากเดือนที่แล้ว</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="content">
              <Card>
                <CardHeader>
                  <CardTitle>จัดการเนื้อหา</CardTitle>
                  <CardDescription>แก้ไขและจัดการเนื้อหาบนเว็บไซต์</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">หน้าแรก</h3>
                        <p className="text-sm text-gray-600">แก้ไขเนื้อหาหน้าแรก</p>
                      </div>
                      <Button variant="outline">แก้ไข</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">แหล่งท่องเที่ยว</h3>
                        <p className="text-sm text-gray-600">จัดการข้อมูลแหล่งท่องเที่ยว</p>
                      </div>
                      <Button variant="outline">แก้ไข</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">บล็อก</h3>
                        <p className="text-sm text-gray-600">จัดการบทความบล็อก</p>
                      </div>
                      <Button variant="outline">แก้ไข</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>จัดการผู้ใช้งาน</CardTitle>
                  <CardDescription>ดูและจัดการข้อมูลผู้ใช้งาน</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">admin</h3>
                        <p className="text-sm text-gray-600">ผู้ดูแลระบบ</p>
                      </div>
                      <Button variant="outline">จัดการ</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">user</h3>
                        <p className="text-sm text-gray-600">สมาชิก</p>
                      </div>
                      <Button variant="outline">จัดการ</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="forum">
              <Card>
                <CardHeader>
                  <CardTitle>จัดการเว็บบอร์ด</CardTitle>
                  <CardDescription>ดูและจัดการโพสต์บนเว็บบอร์ด</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">แนะนำที่เที่ยว</h3>
                        <p className="text-sm text-gray-600">หมวดหมู่แนะนำสถานที่ท่องเที่ยว</p>
                      </div>
                      <Button variant="outline">จัดการ</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">ร้านอาหารอร่อย</h3>
                        <p className="text-sm text-gray-600">หมวดหมู่แนะนำร้านอาหาร</p>
                      </div>
                      <Button variant="outline">จัดการ</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">ถาม-ตอบ</h3>
                        <p className="text-sm text-gray-600">หมวดหมู่คำถามทั่วไป</p>
                      </div>
                      <Button variant="outline">จัดการ</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
