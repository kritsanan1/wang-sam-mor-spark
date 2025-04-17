import React from 'react';
import { Search } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative h-screen w-full flex items-center justify-center pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{
      backgroundImage: `url('/lovable-uploads/8e5e6b84-6105-45f7-b97d-4dce2a65d731.png')`
    }}>
        <div className="absolute inset-0 z-0 bg-orange-300"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
          ที่นี่ <span className="text-wang-orange">วังสามหมอ</span>
          <br />
          <span className="text-2xl md:text-3xl mt-2 block">สัมผัสเสน่ห์ที่คุณไม่เคยรู้</span>
        </h1>
        
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8">
          เปิดประสบการณ์การท่องเที่ยวหลากหลาย ทั้งธรรมชาติ วัฒนธรรม และอาหารพื้นถิ่น
        </p>
        
        {/* Search Box */}
        <div className="max-w-md mx-auto relative">
          <input type="text" placeholder="ค้นหาสถานที่ท่องเที่ยว, ร้านอาหาร, ที่พัก..." className="w-full py-3 px-6 pr-12 rounded-full shadow-md text-wang-darkGray outline-none" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-wang-orange">
            <Search size={20} />
          </button>
        </div>
        
        <div className="mt-8">
          <a href="#attractions" className="wang-button">
            ค้นหาสถานที่น่าสนใจ
          </a>
        </div>
      </div>
    </section>;
};
export default HeroSection;