
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

// Mock forum data
const mockCategories = [
  { id: 1, name: 'แนะนำที่เที่ยว', description: 'แนะนำสถานที่ท่องเที่ยวน่าสนใจในวังสามหมอ' },
  { id: 2, name: 'ร้านอาหารอร่อย', description: 'รีวิวร้านอาหารและเมนูอร่อยในพื้นที่' },
  { id: 3, name: 'ถาม-ตอบ', description: 'ถามคำถามและแลกเปลี่ยนข้อมูลเกี่ยวกับวังสามหมอ' }
];

const mockPosts = [
  { 
    id: 1, 
    categoryId: 1,
    title: 'แนะนำจุดชมวิวสวยๆ', 
    content: 'อยากแนะนำจุดชมวิวที่สวยมากๆ ที่หมู่บ้านวังสามหมอ วิวสวยมาก เหมาะกับการถ่ายรูป', 
    author: 'user', 
    date: '2025-04-12',
    comments: 3,
    views: 154
  },
  { 
    id: 2, 
    categoryId: 2,
    title: 'ร้านอาหารใหม่เปิดใกล้ตลาด', 
    content: 'มีร้านอาหารใหม่เปิดใกล้ตลาด อาหารอร่อยมาก แนะนำเมนูข้าวผัดปลาเค็ม', 
    author: 'foodlover', 
    date: '2025-04-10',
    comments: 5,
    views: 210
  },
  { 
    id: 3, 
    categoryId: 3,
    title: 'วิธีเดินทางจากอุดรธานีมายังวังสามหมอ', 
    content: 'อยากทราบว่ามีรถโดยสารจากอุดรธานีมายังวังสามหมอหรือไม่ และราคาเท่าไหร่', 
    author: 'tourist', 
    date: '2025-04-08',
    comments: 8,
    views: 356
  }
];

const Forum = () => {
  const navigate = useNavigate();
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(1);
  const { isAuthenticated } = useAuth();
  
  // Handle new post submission
  const handleNewPost = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast({
        variant: "destructive",
        title: "กรุณาเข้าสู่ระบบ",
        description: "คุณต้องเข้าสู่ระบบก่อนจึงจะสามารถสร้างโพสต์ใหม่ได้",
      });
      navigate('/auth');
      return;
    }
    
    if (newPostTitle.trim() === '' || newPostContent.trim() === '') {
      toast({
        variant: "destructive",
        title: "กรุณากรอกข้อมูลให้ครบถ้วน",
        description: "หัวข้อและเนื้อหาไม่สามารถเว้นว่างได้",
      });
      return;
    }
    
    // In a real app, you would send this to your backend
    toast({
      title: "สร้างโพสต์สำเร็จ",
      description: "โพสต์ของคุณถูกเผยแพร่แล้ว",
    });
    
    // Reset form
    setNewPostTitle('');
    setNewPostContent('');
  };
  
  // Filter posts by category
  const getPostsByCategory = (categoryId: number) => {
    return mockPosts.filter(post => post.categoryId === categoryId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <div className="wang-container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">เว็บบอร์ดชุมชนวังสามหมอ</h1>
            <p className="text-gray-600">แลกเปลี่ยนข้อมูล ถาม-ตอบ และแบ่งปันประสบการณ์เกี่ยวกับวังสามหมอ</p>
          </div>
          
          {isAuthenticated ? (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>สร้างโพสต์ใหม่</CardTitle>
              </CardHeader>
              <form onSubmit={handleNewPost}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">หมวดหมู่</label>
                    <select 
                      id="category" 
                      className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background rounded-md"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(Number(e.target.value))}
                    >
                      {mockCategories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">หัวข้อ</label>
                    <Input 
                      id="title" 
                      value={newPostTitle}
                      onChange={(e) => setNewPostTitle(e.target.value)}
                      placeholder="หัวข้อของโพสต์" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="content" className="text-sm font-medium">เนื้อหา</label>
                    <Textarea 
                      id="content" 
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      placeholder="รายละเอียดของโพสต์" 
                      className="min-h-[150px]"
                      required 
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="bg-wang-orange hover:bg-wang-orange/90">โพสต์</Button>
                </CardFooter>
              </form>
            </Card>
          ) : (
            <Card className="mb-8 text-center p-6">
              <p className="mb-4">คุณต้องเข้าสู่ระบบก่อนจึงจะสามารถสร้างโพสต์ใหม่ได้</p>
              <Button 
                onClick={() => navigate('/auth')}
                className="bg-wang-orange hover:bg-wang-orange/90"
              >
                เข้าสู่ระบบ
              </Button>
            </Card>
          )}
          
          <Tabs defaultValue="1">
            <TabsList className="mb-6">
              {mockCategories.map(category => (
                <TabsTrigger key={category.id} value={category.id.toString()}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {mockCategories.map(category => (
              <TabsContent key={category.id} value={category.id.toString()}>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                
                <div className="space-y-4">
                  {getPostsByCategory(category.id).length > 0 ? (
                    getPostsByCategory(category.id).map(post => (
                      <div key={post.id} className="border rounded-lg p-4 bg-white">
                        <Link to={`/forum/post/${post.id}`} className="text-lg font-medium hover:text-wang-orange">
                          {post.title}
                        </Link>
                        <p className="text-gray-600 mt-2 line-clamp-2">{post.content}</p>
                        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span>โดย: {post.author}</span>
                            <span>วันที่: {post.date}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span>ความคิดเห็น: {post.comments}</span>
                            <span>เข้าชม: {post.views}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      ยังไม่มีโพสต์ในหมวดหมู่นี้
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Forum;
