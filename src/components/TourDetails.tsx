
import React from 'react';
import { MapPin, Clock, Calendar, Info, Star, Heart, Share2 } from 'lucide-react';

// ข้อมูลตัวอย่าง - ในอนาคตสามารถดึงจากฐานข้อมูลได้
const tourDetails = {
  "1": {
    name: "ทุ่งดอกกระเจียว",
    location: "อำเภอวังสามหมอ จังหวัดอุดรธานี",
    openHours: "06:00 - 18:00 น.",
    bestTime: "กรกฎาคม - สิงหาคม",
    description: "ทุ่งดอกกระเจียวที่วังสามหมอ เป็นหนึ่งในแหล่งท่องเที่ยวทางธรรมชาติที่สวยงามที่สุดของภาคอีสาน ในช่วงฤดูฝน ดอกกระเจียวสีชมพูอมม่วงจะบานสะพรั่งเต็มท้องทุ่ง สร้างทัศนียภาพที่งดงามตระการตา นักท่องเที่ยวสามารถเดินชมดอกไม้ตามเส้นทางศึกษาธรรมชาติ และถ่ายภาพความงดงามของทุ่งดอกไม้ที่ทอดยาวสุดลูกหูลูกตา นอกจากนี้ยังสามารถศึกษาระบบนิเวศของพื้นที่ได้อีกด้วย",
    facilities: ["จุดชมวิว", "เส้นทางเดินศึกษาธรรมชาติ", "ที่จอดรถ", "ร้านอาหารและเครื่องดื่ม"],
    rating: 4.8,
    reviews: 124,
    price: "ค่าเข้าชม: ผู้ใหญ่ 40 บาท, เด็ก 20 บาท"
  },
  "2": {
    name: "ผาแดง",
    location: "อำเภอวังสามหมอ จังหวัดอุดรธานี",
    openHours: "ตลอดเวลา",
    bestTime: "ตลอดทั้งปี (แนะนำช่วงเช้าและเย็น)",
    description: "ผาแดงเป็นหน้าผาหินทรายสีแดงอมส้มที่โดดเด่นท่ามกลางธรรมชาติ เป็นจุดชมวิวที่สามารถมองเห็นทัศนียภาพของป่าไม้และทุ่งนา โดยเฉพาะในยามพระอาทิตย์ขึ้นและตก แสงแดดที่ส่องกระทบหน้าผาจะให้สีสันที่งดงามน่าประทับใจ เป็นจุดถ่ายภาพยอดนิยมของนักท่องเที่ยว",
    facilities: ["จุดชมวิว", "ลานกางเต็นท์", "ที่จอดรถ"],
    rating: 4.5,
    reviews: 87,
    price: "ไม่มีค่าเข้าชม"
  },
  "3": {
    name: "น้ำตกวังสามหมอ",
    location: "อำเภอวังสามหมอ จังหวัดอุดรธานี",
    openHours: "08:00 - 17:00 น.",
    bestTime: "ฤดูฝน (มิถุนายน - ตุลาคม)",
    description: "น้ำตกวังสามหมอเป็นน้ำตกขนาดกลางที่มีความสวยงามร่มรื่น น้ำตกไหลผ่านชั้นหินลดหลั่นลงมาสู่แอ่งน้ำใสเย็น เหมาะสำหรับการพักผ่อนและเล่นน้ำ โดยรอบมีป่าไม้อุดมสมบูรณ์ร่มรื่น เป็นที่อยู่ของสัตว์และพืชหลากหลายชนิด นักท่องเที่ยวสามารถเดินป่าศึกษาธรรมชาติและพักผ่อนริมน้ำตกได้",
    facilities: ["ลานพักผ่อน", "ห้องน้ำ", "ที่จอดรถ", "ร้านอาหาร"],
    rating: 4.3,
    reviews: 56,
    price: "ค่าเข้าชม: ผู้ใหญ่ 20 บาท, เด็ก 10 บาท"
  }
};

interface TourDetailsProps {
  id?: string;
}

const TourDetails = ({ id = "1" }: TourDetailsProps) => {
  const details = tourDetails[id as keyof typeof tourDetails] || tourDetails["1"];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Header with buttons */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-wang-darkGray">{details.name}</h2>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin size={16} className="mr-1 text-wang-orange" />
              <span>{details.location}</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="flex items-center gap-1 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
              <Heart size={18} className="text-red-500" />
              <span className="hidden sm:inline">บันทึก</span>
            </button>
            <button className="flex items-center gap-1 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
              <Share2 size={18} />
              <span className="hidden sm:inline">แชร์</span>
            </button>
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex items-center mb-6">
          <div className="flex items-center">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
            <span className="ml-1 font-medium">{details.rating}</span>
          </div>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-600">{details.reviews} รีวิว</span>
        </div>
        
        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-wang-lightGray p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Clock size={18} className="text-wang-orange mr-2" />
              <h3 className="font-semibold">เวลาเปิดทำการ</h3>
            </div>
            <p>{details.openHours}</p>
          </div>
          
          <div className="bg-wang-lightGray p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Calendar size={18} className="text-wang-orange mr-2" />
              <h3 className="font-semibold">ช่วงเวลาที่เหมาะสม</h3>
            </div>
            <p>{details.bestTime}</p>
          </div>
          
          <div className="bg-wang-lightGray p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Info size={18} className="text-wang-orange mr-2" />
              <h3 className="font-semibold">ค่าบริการ</h3>
            </div>
            <p>{details.price}</p>
          </div>
        </div>
        
        {/* Description */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">รายละเอียดสถานที่</h3>
          <p className="text-gray-700 leading-relaxed">{details.description}</p>
        </div>
        
        {/* Facilities */}
        <div>
          <h3 className="text-xl font-semibold mb-3">สิ่งอำนวยความสะดวก</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {details.facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                {facility}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
