
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface CreatePostFormProps {
  categories: { id: number; name: string }[];
}

const CreatePostForm = ({ categories }: CreatePostFormProps) => {
  const navigate = useNavigate();
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(1);
  const { isAuthenticated } = useAuth();

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

  if (!isAuthenticated) {
    return (
      <Card className="mb-8 text-center p-6">
        <p className="mb-4">คุณต้องเข้าสู่ระบบก่อนจึงจะสามารถสร้างโพสต์ใหม่ได้</p>
        <Button 
          onClick={() => navigate('/auth')}
          className="bg-wang-orange hover:bg-wang-orange/90"
        >
          เข้าสู่ระบบ
        </Button>
      </Card>
    );
  }

  return (
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
              {categories.map(category => (
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
  );
};

export default CreatePostForm;
