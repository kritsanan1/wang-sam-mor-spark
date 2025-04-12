
import React from 'react';
import { Utensils, Coffee, Salad } from 'lucide-react';

const FoodSection = () => {
  const foods = [
    {
      title: "ไก่ย่างเขาสวนกวาง",
      description: "หอม นุ่ม ชุ่มลิ้น เมนูขึ้นชื่อที่ต้องลิ้มลอง",
      icon: <Utensils className="feature-icon" />
    },
    {
      title: "ส้มตำรสแซ่บ",
      description: "ครบรส จัดจ้าน ตามแบบฉบับอีสานแท้",
      icon: <Salad className="feature-icon" />
    },
    {
      title: "ขนมจีนน้ำยาป่า",
      description: "สูตรโบราณ รสชาติเข้มข้น อร่อยไม่เหมือนใคร",
      icon: <Coffee className="feature-icon" />
    }
  ];

  return (
    <section id="food" className="section-spacing">
      <div className="wang-container">
        <h2 className="wang-section-title">อิ่มอร่อยกับรสชาติต้นตำรับ</h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          ลิ้มลองอาหารพื้นถิ่น... ที่หาทานได้เฉพาะที่นี่
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {foods.map((item, index) => (
            <div 
              key={index} 
              className="feature-card flex flex-col items-center text-center hover-scale"
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
                src={`https://source.unsplash.com/random/300x200/?thai,food,${index + 1}`} 
                alt={item.title} 
                className="w-full h-48 object-cover rounded-lg mt-4"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="wang-button">
            ตามรอยร้านอาหารอร่อย
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
