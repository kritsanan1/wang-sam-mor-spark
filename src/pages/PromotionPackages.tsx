
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/promotion/HeroSection';
import DataInsights from '@/components/DataInsights';
import PackageCards from '@/components/promotion/PackageCards';
import PaymentContactSection from '@/components/promotion/PaymentContactSection';
import BlogPosts from '@/components/BlogPosts';
import ContactSection from '@/components/promotion/ContactSection';
import FAQSection from '@/components/promotion/FAQSection';

const PromotionPackages = () => {
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
        <HeroSection />
        <DataInsights 
          targetGroups={targetGroups} 
          demographicData={demographicData} 
        />
        <PackageCards packages={packages} />
        <PaymentContactSection 
          paymentMethods={paymentMethods}
          contactMethods={contactMethods}
        />
        <BlogPosts posts={blogPosts} />
        <ContactSection contactInfo={contactInfo} />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default PromotionPackages;
