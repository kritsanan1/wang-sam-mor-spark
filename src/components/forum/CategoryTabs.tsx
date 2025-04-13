
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface Post {
  id: number;
  categoryId: number;
  title: string;
  content: string;
  author: string;
  date: string;
  comments: number;
  views: number;
}

interface Category {
  id: number;
  name: string;
  description: string;
}

interface CategoryTabsProps {
  categories: Category[];
  posts: Post[];
}

const CategoryTabs = ({ categories, posts }: CategoryTabsProps) => {
  // Filter posts by category
  const getPostsByCategory = (categoryId: number) => {
    return posts.filter(post => post.categoryId === categoryId);
  };

  return (
    <Tabs defaultValue="1">
      <TabsList className="mb-6">
        {categories.map(category => (
          <TabsTrigger key={category.id} value={category.id.toString()}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {categories.map(category => (
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
  );
};

export default CategoryTabs;
