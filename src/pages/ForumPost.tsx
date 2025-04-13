
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

// Mock post details
const mockPost = {
  id: 1,
  categoryId: 1,
  title: 'แนะนำจุดชมวิวสวยๆ',
  content: 'อยากแนะนำจุดชมวิวที่สวยมากๆ ที่หมู่บ้านวังสามหมอ อยู่ทางทิศตะวันตกของอำเภอ เดินทางได้ค่อนข้างสะดวก มีลานจอดรถ วิวสวยมาก เหมาะกับการถ่ายรูป โดยเฉพาะช่วงพระอาทิตย์ตก แสงสีทองกระทบกับท้องฟ้าสวยงามมาก\n\nยังมีร้านกาแฟเล็กๆ ให้นั่งชิลล์ด้วยนะ เมนูแนะนำคือกาแฟสด และชาเย็นรสชาติดีมาก ราคาไม่แพง\n\nแนะนำให้ไปช่วงเย็นประมาณ 4-5 โมงเย็น จะได้เห็นพระอาทิตย์ตกด้วย',
  author: 'user',
  date: '2025-04-12',
  views: 154,
  comments: [
    {
      id: 1,
      author: 'tourist',
      content: 'ขอบคุณสำหรับคำแนะนำครับ จะลองไปดูวันหยุดนี้',
      date: '2025-04-12'
    },
    {
      id: 2,
      author: 'localguide',
      content: 'เพิ่มเติมสำหรับคนที่จะไป ตอนนี้มีเส้นทางใหม่ที่สะดวกกว่าเดิม ให้เลี้ยวซ้ายที่สี่แยกก่อนถึงตลาด แล้วขับตรงไปอีกประมาณ 2 กม. จะเห็นป้ายบอกทางครับ',
      date: '2025-04-12'
    },
    {
      id: 3,
      author: 'foodlover',
      content: 'ร้านกาแฟที่ว่าชื่อ Coffee Hill ใช่ไหมครับ? ถ้าใช่ ผมขอแนะนำเค้กช็อคโกแลตด้วย อร่อยมากๆ',
      date: '2025-04-13'
    }
  ]
};

const ForumPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newComment, setNewComment] = useState('');
  
  // Check login status
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setIsLoggedIn(!!user.isAuthenticated);
  }, []);
  
  // In a real app, fetch post data based on id
  // For this example, we'll just use the mock data
  
  // Handle new comment submission
  const handleNewComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      toast({
        variant: "destructive",
        title: "กรุณาเข้าสู่ระบบ",
        description: "คุณต้องเข้าสู่ระบบก่อนจึงจะสามารถแสดงความคิดเห็นได้",
      });
      navigate('/auth');
      return;
    }
    
    if (newComment.trim() === '') {
      toast({
        variant: "destructive",
        title: "ความคิดเห็นว่างเปล่า",
        description: "กรุณาเพิ่มข้อความก่อนส่งความคิดเห็น",
      });
      return;
    }
    
    // In a real app, you would send this to your backend
    toast({
      title: "เพิ่มความคิดเห็นสำเร็จ",
      description: "ความคิดเห็นของคุณถูกเผยแพร่แล้ว",
    });
    
    // Reset form
    setNewComment('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <div className="wang-container">
          <div className="mb-4">
            <Link to="/forum" className="text-wang-orange hover:underline flex items-center gap-1">
              &larr; กลับไปยังเว็บบอร์ด
            </Link>
          </div>
          
          <article className="bg-white rounded-lg border p-6 mb-8">
            <h1 className="text-2xl font-bold mb-2">{mockPost.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span className="mr-4">โดย: {mockPost.author}</span>
              <span className="mr-4">วันที่: {mockPost.date}</span>
              <span>เข้าชม: {mockPost.views}</span>
            </div>
            
            <div className="prose max-w-none mb-8">
              {mockPost.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </article>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">ความคิดเห็น ({mockPost.comments.length})</h2>
            
            {isLoggedIn ? (
              <form onSubmit={handleNewComment} className="mb-8">
                <div className="mb-4">
                  <Textarea 
                    placeholder="แสดงความคิดเห็นของคุณ..." 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-wang-orange hover:bg-wang-orange/90"
                >
                  ส่งความคิดเห็น
                </Button>
              </form>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg text-center mb-8">
                <p className="mb-2">คุณต้องเข้าสู่ระบบก่อนจึงจะสามารถแสดงความคิดเห็นได้</p>
                <Button 
                  onClick={() => navigate('/auth')}
                  className="bg-wang-orange hover:bg-wang-orange/90"
                >
                  เข้าสู่ระบบ
                </Button>
              </div>
            )}
            
            <div className="space-y-6">
              {mockPost.comments.map(comment => (
                <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{comment.author}</span>
                    <span className="text-sm text-gray-500">{comment.date}</span>
                  </div>
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForumPost;
