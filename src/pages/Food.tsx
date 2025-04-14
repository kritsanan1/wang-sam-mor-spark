
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FoodSection from '@/components/FoodSection';
import { Helmet } from 'react-helmet';

const Food = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>อาหารท้องถิ่น | Tour Der Wang</title>
        <meta name="description" content="สัมผัสรสชาติอาหารท้องถิ่นของวังสามหมอ จังหวัดอุดรธานี" />
      </Helmet>
      
      <Navbar />
      
      <div className="pt-20">
        <div className="wang-container py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">อาหารท้องถิ่นวังสามหมอ</h1>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            สัมผัสรสชาติอาหารท้องถิ่นแบบดั้งเดิม ที่สืบทอดภูมิปัญญาการปรุงอาหารจากรุ่นสู่รุ่น
          </p>
        </div>
        
        <FoodSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Food;
