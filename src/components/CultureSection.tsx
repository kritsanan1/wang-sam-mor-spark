import React from 'react';
import { Music, Heart, CalendarDays } from 'lucide-react';
const CultureSection = () => {
  const cultures = [{
    title: "ศิลปะพื้นบ้าน",
    description: "ชมการแสดงศิลปะพื้นบ้านอันงดงามที่ถ่ายทอดเรื่องราววิถีชีวิต",
    icon: <Music className="feature-icon" />
  }, {
    title: "ชุมชนภูไท",
    description: "เยือนชุมชนภูไท สัมผัสความอบอุ่นและวิถีชีวิตที่เรียบง่าย",
    icon: <Heart className="feature-icon" />
  }, {
    title: "ประเพณีสำคัญ",
    description: "ร่วมงานประเพณีสำคัญ สืบสานวัฒนธรรมอันทรงคุณค่า",
    icon: <CalendarDays className="feature-icon" />
  }];
  return <section id="culture" className="section-spacing bg-wang-lightGray">
      <div className="wang-container">
        <h2 className="wang-section-title">สัมผัสวิถีชีวิตและวัฒนธรรมภูไท</h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          เรียนรู้วัฒนธรรมที่เป็นเอกลักษณ์... เสน่ห์แห่งวังสามหมอ
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cultures.map((item, index) => <div key={index} className="feature-card flex flex-col items-center text-center hover-scale">
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-wang-darkGray">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
              <img src={`https://source.unsplash.com/random/300x200/?culture,thailand,${index + 1}`} alt={item.title} loading="lazy" className="w-full h-48 rounded-lg mt-4 object-cover" />
            </div>)}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="wang-button">
            เรียนรู้วัฒนธรรมเพิ่มเติม
          </a>
        </div>
      </div>
    </section>;
};
export default CultureSection;