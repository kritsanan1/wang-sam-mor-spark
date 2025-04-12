
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Check, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PromotionPackages = () => {
  const packages = [
    {
      id: "basic",
      name: "แพ็คเกจพื้นฐาน",
      price: "5,000",
      duration: "1 เดือน",
      features: [
        "แสดงธุรกิจบนหน้ารายการแนะนำ",
        "ลิงค์ไปยังเว็บไซต์ของคุณ",
        "ข้อมูลการติดต่อพื้นฐาน",
        "รูปภาพ 3 รูป"
      ],
      popular: false,
      color: "bg-gray-100",
      views: 120
    },
    {
      id: "standard",
      name: "แพ็คเกจมาตรฐาน",
      price: "12,000",
      duration: "3 เดือน",
      features: [
        "ทุกอย่างในแพ็คเกจพื้นฐาน",
        "แสดงในตำแหน่งที่โดดเด่น",
        "รูปภาพเพิ่มเติมสูงสุด 10 รูป",
        "วิดีโอแนะนำ 1 คลิป",
        "โพสต์โปรโมทบนหน้า Social Media ของเรา"
      ],
      popular: true,
      color: "bg-wang-orange/10",
      views: 458
    },
    {
      id: "premium",
      name: "แพ็คเกจพรีเมียม",
      price: "25,000",
      duration: "6 เดือน",
      features: [
        "ทุกอย่างในแพ็คเกจมาตรฐาน",
        "แสดงในตำแหน่งเด่นชัดที่สุด",
        "รูปภาพและวิดีโอไม่จำกัด",
        "บทความแนะนำธุรกิจโดยเฉพาะ",
        "โปรโมทรายเดือนบน Social Media",
        "รายงานสถิติผู้เข้าชม",
        "ที่ปรึกษาด้านการตลาดออนไลน์"
      ],
      popular: false,
      color: "bg-blue-100",
      views: 832
    }
  ];

  const contactInfo = {
    email: "ads@tourderwang.com",
    phone: "042-387-222",
    lineId: "@tourderwang"
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-wang-orange to-orange-500 py-16 text-white">
          <div className="wang-container">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
              โปรโมทธุรกิจของคุณกับ Tour Der Wang
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              เพิ่มการมองเห็นธุรกิจของคุณให้กับนักท่องเที่ยวที่มาเยือนวังสามหมอ
              ด้วยแพ็คเกจโฆษณาที่ตอบโจทย์ทุกความต้องการ
            </p>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 bg-gray-50">
          <div className="wang-container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              แพ็คเกจค่าบริการโปรโมท
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              เลือกแพ็คเกจที่เหมาะสมกับธุรกิจของคุณ เพื่อเพิ่มโอกาสทางธุรกิจและการเข้าถึงลูกค้าใหม่
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className={`rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${pkg.popular ? 'ring-2 ring-wang-orange' : ''}`}
                >
                  <div className={`${pkg.color} p-6`}>
                    {pkg.popular && (
                      <Badge className="bg-wang-orange hover:bg-wang-orange/90 mb-3">
                        แนะนำ
                      </Badge>
                    )}
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <div className="flex items-end gap-1 mb-4">
                      <span className="text-3xl font-bold">฿{pkg.price}</span>
                      <span className="text-gray-500">/ {pkg.duration}</span>
                    </div>
                    
                    {/* เพิ่มจำนวนผู้เข้าชม */}
                    <div className="bg-white/80 rounded-lg p-2 mb-4 flex items-center justify-center gap-1">
                      <span className="text-sm font-medium text-gray-700">ผู้ชมแพ็คเกจนี้</span>
                      <span className="font-bold text-wang-orange">{pkg.views.toLocaleString()}</span>
                      <span className="text-xs text-gray-500">ครั้ง/เดือน</span>
                    </div>
                    
                    <Button className={`w-full ${pkg.popular ? 'bg-wang-orange hover:bg-wang-orange/90' : ''}`}>
                      เลือกแพ็คเกจนี้
                    </Button>
                  </div>
                  
                  <div className="p-6 bg-white">
                    <h4 className="font-medium mb-4">สิ่งที่คุณจะได้รับ:</h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="wang-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                สนใจโปรโมทธุรกิจของคุณกับเรา?
              </h2>
              <p className="text-gray-600 mb-8">
                ติดต่อทีมงานของเราเพื่อรับข้อมูลเพิ่มเติมเกี่ยวกับแพ็คเกจโปรโมทและโฆษณา
                หรือปรึกษาเกี่ยวกับแพ็คเกจที่เหมาะสมกับธุรกิจของคุณ
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center gap-2">
                  <span className="font-medium">อีเมล:</span> {contactInfo.email}
                </div>
                <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center gap-2">
                  <span className="font-medium">โทรศัพท์:</span> {contactInfo.phone}
                </div>
                <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center gap-2">
                  <span className="font-medium">Line ID:</span> {contactInfo.lineId}
                </div>
              </div>
              
              <Button className="mt-8 px-8 bg-wang-orange hover:bg-wang-orange/90">
                ติดต่อเรา
              </Button>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="wang-container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              คำถามที่พบบ่อย
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">ระยะเวลาในการลงโฆษณาสามารถกำหนดเองได้หรือไม่?</h3>
                <p className="text-gray-600">สามารถกำหนดเองได้ตามความต้องการ นอกเหนือจากแพ็คเกจมาตรฐานที่เรามีให้ กรุณาติดต่อทีมงานเพื่อสอบถามรายละเอียดเพิ่มเติม</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">มีส่วนลดสำหรับธุรกิจท้องถิ่นในวังสามหมอหรือไม่?</h3>
                <p className="text-gray-600">มีส่วนลดพิเศษสำหรับธุรกิจท้องถิ่นในอำเภอวังสามหมอ กรุณาติดต่อเราพร้อมแสดงหลักฐานการจดทะเบียนธุรกิจในพื้นที่</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">สามารถปรับเปลี่ยนเนื้อหาโฆษณาในระหว่างระยะเวลาโปรโมทได้หรือไม่?</h3>
                <p className="text-gray-600">สามารถปรับเปลี่ยนได้ 1 ครั้งต่อเดือนสำหรับแพ็คเกจมาตรฐานและพรีเมียม โดยต้องแจ้งล่วงหน้าอย่างน้อย 3 วันทำการ</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PromotionPackages;
