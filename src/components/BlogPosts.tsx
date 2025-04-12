
import React from 'react';
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

interface BlogPostsProps {
  posts: BlogPost[];
}

const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="wang-container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          บทความเกี่ยวกับการโฆษณากับเรา
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          เรียนรู้เพิ่มเติมเกี่ยวกับการทำโฆษณากับ Tour Der Wang และประโยชน์ที่ธุรกิจของคุณจะได้รับ
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.date).toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <Button variant="outline" className="w-full">อ่านต่อ</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
