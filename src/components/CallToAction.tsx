
import React from 'react';
import { MapPin, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section id="contact" className="section-spacing bg-wang-orange text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-wang-orange to-orange-500 opacity-90"></div>
      <div className="wang-container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
          วางแผนการเดินทาง... สู่ วังสามหมอ วันนี้!
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12">
          อย่ารอช้า! มาสัมผัสประสบการณ์ที่แตกต่าง... ที่วังสามหมอรอคุณอยู่
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">เดินทาง</h3>
            <p>
              ค้นพบเส้นทางและวิธีการเดินทางมาที่อำเภอวังสามหมอ
            </p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center">
            <Calendar className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">กิจกรรม</h3>
            <p>
              วางแผนกิจกรรมและสถานที่ท่องเที่ยวที่ต้องไปให้ได้
            </p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center">
            <Phone className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">ติดต่อ</h3>
            <p>
              ข้อมูลติดต่อเพื่อสอบถามรายละเอียดเพิ่มเติม
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/promotion-packages" 
            className="px-8 py-3 bg-white text-wang-orange font-semibold rounded-md 
            hover:bg-gray-100 transition-colors duration-300"
          >
            เริ่มต้นการเดินทางของคุณ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
