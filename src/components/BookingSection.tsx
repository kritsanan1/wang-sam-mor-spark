
import React, { useState } from 'react';
import { Calendar, User, Users, Mail, Phone } from 'lucide-react';

interface BookingSectionProps {
  id?: string;
}

const BookingSection = ({ id }: BookingSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    people: '1',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('ข้อมูลการจอง:', formData);
    // ในอนาคตสามารถเชื่อมต่อกับ API เพื่อบันทึกข้อมูลได้
    alert('ขอบคุณสำหรับการจอง! เราจะติดต่อกลับโดยเร็วที่สุด');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      people: '1',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center mb-6">จองทริปท่องเที่ยว</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Booking Info */}
          <div>
            <div className="mb-6 p-4 bg-wang-orange/10 rounded-lg border border-wang-orange/30">
              <h3 className="text-xl font-semibold text-wang-orange mb-2">สิ่งที่คุณจะได้รับ</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-wang-orange font-bold mr-2">•</span>
                  <span>ไกด์ท้องถิ่นที่มีความรู้และประสบการณ์</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wang-orange font-bold mr-2">•</span>
                  <span>รถรับ-ส่งจากโรงแรมหรือสถานที่ใกล้เคียง</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wang-orange font-bold mr-2">•</span>
                  <span>อาหารกลางวันแบบท้องถิ่น</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wang-orange font-bold mr-2">•</span>
                  <span>น้ำดื่มและของว่าง</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wang-orange font-bold mr-2">•</span>
                  <span>ประกันการเดินทาง</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">วิธีการจอง</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>กรอกแบบฟอร์มจองทริป</li>
                <li>รอการยืนยันจากเจ้าหน้าที่ (ภายใน 24 ชม.)</li>
                <li>ชำระเงินมัดจำ 30% เพื่อยืนยันการจอง</li>
                <li>รับใบยืนยันการจองผ่านอีเมล</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">ติดต่อสอบถามเพิ่มเติม</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone size={16} className="text-wang-orange mr-2" />
                  <span>042-387-111</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="text-wang-orange mr-2" />
                  <span>booking@tourderwang.com</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                ชื่อ-นามสกุล
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-wang-orange focus:border-wang-orange"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                  อีเมล
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-wang-orange focus:border-wang-orange"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
                  เบอร์โทรศัพท์
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-wang-orange focus:border-wang-orange"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="date">
                  วันที่ต้องการเดินทาง
                </label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-wang-orange focus:border-wang-orange"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="people">
                  จำนวนคน
                </label>
                <div className="relative">
                  <Users size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <select
                    id="people"
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-wang-orange focus:border-wang-orange appearance-none"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num.toString()}>{num} คน</option>
                    ))}
                    <option value="more">มากกว่า 10 คน</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                ข้อความเพิ่มเติม
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-wang-orange focus:border-wang-orange"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-wang-orange text-white font-semibold rounded-md 
              hover:bg-orange-600 transition-colors duration-300"
            >
              ส่งข้อมูลการจอง
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
