
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ForumHeader from '@/components/forum/ForumHeader';
import CreatePostForm from '@/components/forum/CreatePostForm';
import CategoryTabs from '@/components/forum/CategoryTabs';
import { mockCategories, mockPosts } from '@/data/forumData';

const Forum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <div className="wang-container">
          <ForumHeader />
          <CreatePostForm categories={mockCategories} />
          <CategoryTabs categories={mockCategories} posts={mockPosts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Forum;
