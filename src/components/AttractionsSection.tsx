
import React from 'react';
import { MapPin, Leaf, Droplets } from 'lucide-react';

const AttractionsSection = () => {
  const attractions = [
    {
      title: "ทุ่งดอกกระเจียวบานสะพรั่ง",
      description: "มหัศจรรย์แห่งสีสันบนพื้นที่กว้าง ช่วงเดือนกรกฎาคม-สิงหาคม",
      icon: <Leaf className="feature-icon" />
    },
    {
      title: "ผาแดงงามสง่า",
      description: "จุดชมวิวสุดตระการตา มองเห็นธรรมชาติโดยรอบ",
      icon: <MapPin className="feature-icon" />
    },
    {
      title: "แหล่งน้ำศักดิ์สิทธิ์",
      description: "ตำนานและความเชื่อที่ยังคงอยู่คู่กับชุมชนมายาวนาน",
      icon: <Droplets className="feature-icon" />
    }
  ];

  return (
    <section id="attractions" className="section-spacing bg-gray-50">
      <div className="wang-container">
        <h2 className="wang-section-title">ธรรมชาติงดงาม ที่ต้องมาสัมผัส</h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          ดื่มด่ำความเขียวขจี และ Unseen วังสามหมอ ที่รอให้คุณมาค้นพบ
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attractions.map((item, index) => (
            <div 
              key={index} 
              className="feature-card flex flex-col items-center text-center animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-wang-darkGray">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
              <img 
                src={`https://source.unsplash.com/random/300x200/?nature,thailand,${index + 1}`} 
                alt={item.title} 
                className="w-full h-48 object-cover rounded-lg mt-4"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="wang-button">
            สำรวจธรรมชาติวังสามหมอ
          </a>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
