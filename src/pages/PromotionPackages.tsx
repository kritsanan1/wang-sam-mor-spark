
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import DataInsights from '@/components/DataInsights';
import BlogPosts from '@/components/BlogPosts';

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

  const targetGroups = [
    { 
      name: "นักท่องเที่ยวท้องถิ่น", 
      percentage: 48, 
      details: "อายุ 25-45 ปี ชอบท่องเที่ยวแบบไปเช้า-เย็นกลับ"
    },
    { 
      name: "นักท่องเที่ยวต่างจังหวัด", 
      percentage: 35, 
      details: "อายุ 22-40 ปี ชอบค้นหาแหล่งท่องเที่ยวใหม่ๆ" 
    },
    { 
      name: "ครอบครัว", 
      percentage: 12, 
      details: "อายุ 35-55 ปี เดินทางกับครอบครัวในวันหยุด"
    },
    { 
      name: "ชาวต่างชาติ", 
      percentage: 5, 
      details: "อายุ 25-60 ปี สนใจวัฒนธรรมและธรรมชาติไทย"
    },
  ];

  const demographicData = {
    genderSplit: { male: 48, female: 52 },
    ageGroups: [
      { group: "18-24", percentage: 22 },
      { group: "25-34", percentage: 35 },
      { group: "35-44", percentage: 25 },
      { group: "45-54", percentage: 12 },
      { group: "55+", percentage: 6 },
    ],
    topLocations: [
      { name: "อุดรธานี", percentage: 28 },
      { name: "กรุงเทพฯ", percentage: 15 },
      { name: "ขอนแก่น", percentage: 12 },
      { name: "หนองคาย", percentage: 8 },
      { name: "อื่นๆ", percentage: 37 },
    ],
    interests: [
      { name: "ธรรมชาติและการผจญภัย", percentage: 45 },
      { name: "อาหารท้องถิ่น", percentage: 35 },
      { name: "วัฒนธรรมและประวัติศาสตร์", percentage: 28 },
      { name: "ถ่ายรูป", percentage: 22 },
      { name: "การจับจ่ายซื้อของ", percentage: 15 },
    ]
  };

  const paymentMethods = [
    { id: "bank", name: "โอนผ่านธนาคาร", details: "ธนาคารไทยพาณิชย์, กสิกรไทย, กรุงไทย" },
    { id: "promptpay", name: "พร้อมเพย์", details: "โอนผ่านรหัส QR Code" },
    { id: "credit", name: "บัตรเครดิต/เดบิต", details: "Visa, Mastercard, JCB" }
  ];

  const contactMethods = [
    { id: "line", name: "LINE", details: "@tourderwang", icon: "MessageCircle" },
    { id: "tel", name: "โทรศัพท์", details: "042-387-222", icon: "Smartphone" },
    { id: "email", name: "อีเมล", details: "ads@tourderwang.com", icon: "Mail" }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 เหตุผลที่ธุรกิจของคุณควรโฆษณากับ Tour Der Wang",
      excerpt: "ค้นพบว่าทำไมการโฆษณากับเราถึงช่วยเพิ่มยอดขายและการเข้าถึงลูกค้าใหม่ได้อย่างมีประสิทธิภาพ",
      date: "2025-03-28",
      image: "/lovable-uploads/317bf558-3ea4-4d03-b015-0555c319ffac.png"
    },
    {
      id: 2,
      title: "กรณีศึกษา: ร้านอาหารท้องถิ่นเพิ่มยอดขาย 40% หลังโฆษณากับเรา",
      excerpt: "เจ้าของร้านอาหารพื้นเมืองวังสามหมอเล่าประสบการณ์หลังจากร่วมโฆษณากับ Tour Der Wang เป็นเวลา 3 เดือน",
      date: "2025-03-15",
      image: "/lovable-uploads/8e5e6b84-6105-45f7-b97d-4dce2a65d731.png"
    },
    {
      id: 3,
      title: "ทิปส์การสร้างโปรไฟล์ธุรกิจให้ดึงดูดนักท่องเที่ยว",
      excerpt: "เคล็ดลับการนำเสนอธุรกิจของคุณให้โดดเด่นและน่าสนใจสำหรับนักท่องเที่ยวที่มาเยือนวังสามหมอ",
      date: "2025-02-20",
      image: "https://source.unsplash.com/random/300x200/?business"
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

        {/* Data Insights Section */}
        <DataInsights 
          targetGroups={targetGroups} 
          demographicData={demographicData} 
        />

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
        
        {/* Payment & Contact Methods */}
        <section className="py-16 bg-white">
          <div className="wang-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Payment Methods */}
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-wang-orange" />
                  ช่องทางการชำระเงิน
                </h3>
                <div className="space-y-4">
                  {paymentMethods.map(method => (
                    <div key={method.id} className="border rounded-lg p-4 bg-white shadow-sm">
                      <h4 className="font-medium mb-1">{method.name}</h4>
                      <p className="text-sm text-gray-600">{method.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contact Methods */}
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-wang-orange" />
                  ช่องทางการติดต่อสอบถาม
                </h3>
                <div className="space-y-4">
                  {contactMethods.map(method => (
                    <div key={method.id} className="border rounded-lg p-4 bg-white shadow-sm">
                      <h4 className="font-medium mb-1">{method.name}</h4>
                      <p className="text-sm text-gray-600">{method.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <BlogPosts posts={blogPosts} />
        
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
