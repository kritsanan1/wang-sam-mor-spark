
import React from 'react';
import { MapPin, Leaf, Droplets, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const AttractionsSection = () => {
  const attractions = [
    {
      id: "1",
      title: "ทุ่งดอกกระเจียวบานสะพรั่ง",
      description: "มหัศจรรย์แห่งสีสันบนพื้นที่กว้าง ช่วงเดือนกรกฎาคม-สิงหาคม",
      icon: <Leaf className="feature-icon" />
    },
    {
      id: "2",
      title: "ผาแดงงามสง่า",
      description: "จุดชมวิวสุดตระการตา มองเห็นธรรมชาติโดยรอบ",
      icon: <MapPin className="feature-icon" />
    },
    {
      id: "3",
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
            <Link 
              to={`/tour/${item.id}`}
              key={index} 
              className="feature-card flex flex-col items-center text-center animate-scale-in hover:scale-105 transition-transform duration-300"
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
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center flex flex-col md:flex-row items-center justify-center gap-4">
          <Link to="/tour/1" className="wang-button">
            สำรวจธรรมชาติวังสามหมอ
          </Link>
          
          <Link to="/travel-map" className="wang-button bg-white text-wang-orange border border-wang-orange hover:bg-wang-orange/10 flex items-center gap-2">
            <Map className="h-5 w-5" />
            แผนที่และการเดินทาง
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
