
import React from 'react';
import { Calendar } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      title: "เทศกาลดอกกระเจียวบาน",
      date: "กรกฎาคม - สิงหาคม",
      description: "ชมความงดงามของทุ่งดอกกระเจียวที่บานสะพรั่งพร้อมกิจกรรมมากมาย"
    },
    {
      title: "งานประเพณีบุญบั้งไฟ",
      date: "พฤษภาคม - มิถุนายน",
      description: "สืบสานประเพณีอันเก่าแก่ที่จัดขึ้นเพื่อขอฝนในฤดูกาลเพาะปลูก"
    },
    {
      title: "งานวันวัฒนธรรมภูไท",
      date: "มีนาคม",
      description: "ร่วมส่งเสริมและอนุรักษ์วัฒนธรรมภูไท พร้อมการแสดงศิลปวัฒนธรรมต่างๆ"
    },
    {
      title: "เทศกาลอาหารพื้นเมือง",
      date: "ธันวาคม",
      description: "ลิ้มรสอาหารพื้นเมืองรสเลิศหลากหลายเมนู พร้อมการแสดงดนตรีและศิลปวัฒนธรรม"
    }
  ];

  return (
    <section id="events" className="section-spacing">
      <div className="wang-container">
        <h2 className="wang-section-title">ปฏิทินกิจกรรมและงานประจำปี</h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          วางแผนการท่องเที่ยวให้ตรงกับเทศกาลสำคัญของวังสามหมอ
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 flex gap-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <Calendar className="text-wang-orange h-12 w-12" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-wang-darkGray">{event.title}</h3>
                <p className="text-wang-orange font-medium mb-2">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="wang-button">
            ดูรายละเอียดเพิ่มเติม
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
