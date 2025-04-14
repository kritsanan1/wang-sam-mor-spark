
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  ArrowLeft, 
  Share2, 
  User, 
  Tag, 
  Facebook, 
  Twitter, 
  Link as LinkIcon, 
  ChevronRight 
} from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

// Define article interface
interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
  };
  image: string;
  tags: string[];
  readTime: string;
}

// Sample articles data
const articles: Article[] = [
  {
    id: 1,
    title: "เปิดประสบการณ์ท่องเที่ยว 'จระเข้วังสามหมอ' แลนด์มาร์คใหม่ของอุดรธานี",
    slug: "crocodile-landmark-wang-sam-mor",
    excerpt: "จระเข้ยักษ์กลางแหล่งน้ำธรรมชาติที่กลายเป็นแลนด์มาร์คใหม่ของอำเภอวังสามหมอ จังหวัดอุดรธานี ดึงดูดนักท่องเที่ยวจากทั่วประเทศ",
    content: `<p class="mb-4">นับเป็นแลนด์มาร์คใหม่ที่กำลังได้รับความนิยมอย่างมากสำหรับ "จระเข้ยักษ์วังสามหมอ" ประติมากรรมขนาดใหญ่รูปจระเข้ที่ตั้งตระหง่านอยู่กลางแหล่งน้ำธรรมชาติในอำเภอวังสามหมอ จังหวัดอุดรธานี</p>
    
    <h2 class="text-2xl font-bold mb-4 mt-8">ความเป็นมาของจระเข้ยักษ์</h2>
    
    <p class="mb-4">ประติมากรรมจระเข้ยักษ์นี้ถูกสร้างขึ้นในปี พ.ศ. 2564 ด้วยแนวคิดที่ต้องการสร้างจุดดึงดูดนักท่องเที่ยวแห่งใหม่ให้กับอำเภอวังสามหมอ โดยได้แรงบันดาลใจมาจากตำนานพื้นบ้านเกี่ยวกับจระเข้ยักษ์ที่เคยอาศัยอยู่ในแหล่งน้ำแห่งนี้ในอดีต</p>
    
    <p class="mb-4">ประติมากรรมนี้มีความยาวกว่า 15 เมตร สูง 5 เมตร สร้างด้วยวัสดุคอนกรีตเสริมเหล็กที่แข็งแรงทนทาน และตกแต่งอย่างพิถีพิถันให้มีความสมจริงทั้งในด้านรูปทรงและสีสัน</p>
    
    <figure class="my-8">
      <img src="/lovable-uploads/67fa29de-2bd9-4c5b-bd94-69178b406681.png" alt="จระเข้ยักษ์วังสามหมอ ยามค่ำคืน" class="w-full h-auto rounded-lg" />
      <figcaption class="mt-2 text-sm text-center text-gray-500">จระเข้ยักษ์วังสามหมอในยามพระอาทิตย์ตก</figcaption>
    </figure>
    
    <h2 class="text-2xl font-bold mb-4 mt-8">จุดเด่นที่น่าสนใจ</h2>
    
    <p class="mb-4">จุดเด่นที่ทำให้จระเข้ยักษ์วังสามหมอแตกต่างจากแลนด์มาร์คอื่นๆ คือ นักท่องเที่ยวสามารถขึ้นไปนั่งบนหลังจระเข้ได้ ซึ่งเป็นจุดชมวิวที่สามารถมองเห็นทัศนียภาพของแหล่งน้ำและทิวทัศน์โดยรอบได้อย่างสวยงาม โดยเฉพาะในช่วงพระอาทิตย์ตกที่จะมีแสงสีทองสะท้อนกับผิวน้ำ สร้างภาพที่สวยงามน่าประทับใจ</p>
    
    <p class="mb-4">นอกจากนี้ ในช่วงกลางคืนยังมีการติดไฟประดับรอบๆ ประติมากรรม ทำให้จระเข้ยักษ์เปล่งประกายสวยงามในยามค่ำคืน กลายเป็นอีกหนึ่งจุดถ่ายภาพที่ได้รับความนิยมไม่แพ้กัน</p>
    
    <h2 class="text-2xl font-bold mb-4 mt-8">กิจกรรมที่น่าสนใจ</h2>
    
    <p class="mb-4">นอกจากการถ่ายภาพกับจระเข้ยักษ์แล้ว นักท่องเที่ยวยังสามารถทำกิจกรรมอื่นๆ ในบริเวณโดยรอบได้อีกมากมาย เช่น:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li>ล่องเรือชมทัศนียภาพรอบแหล่งน้ำ</li>
      <li>ตกปลา (มีค่าบริการเพิ่มเติม)</li>
      <li>ปิกนิกริมน้ำ</li>
      <li>ชิมอาหารท้องถิ่นจากร้านค้าในบริเวณใกล้เคียง</li>
    </ul>
    
    <h2 class="text-2xl font-bold mb-4 mt-8">การเดินทาง</h2>
    
    <p class="mb-4">จระเข้ยักษ์วังสามหมอตั้งอยู่ที่ตำบลหนองกุงทับม้า อำเภอวังสามหมอ จังหวัดอุดรธานี สามารถเดินทางโดยรถยนต์ส่วนตัวจากตัวเมืองอุดรธานีตามทางหลวงหมายเลข 2 และเลี้ยวเข้าทางหลวงหมายเลข 2023 ใช้เวลาเดินทางประมาณ 1 ชั่วโมง 30 นาที</p>
    
    <p class="mb-4">หากเดินทางจากกรุงเทพฯ สามารถนั่งรถทัวร์หรือเครื่องบินมายังจังหวัดอุดรธานี จากนั้นจึงต่อรถโดยสารประจำทางหรือเช่ารถเพื่อเดินทางต่อไปยังอำเภอวังสามหมอ</p>
    
    <h2 class="text-2xl font-bold mb-4 mt-8">ค่าธรรมเนียม</h2>
    
    <p class="mb-4">การเข้าชมจระเข้ยักษ์วังสามหมอมีค่าธรรมเนียมดังนี้:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li>ผู้ใหญ่: 60 บาท</li>
      <li>เด็ก (สูงไม่เกิน 120 ซม.): 30 บาท</li>
      <li>ผู้สูงอายุ (60 ปีขึ้นไป): 30 บาท</li>
    </ul>
    
    <p class="mb-4">นอกจากนี้ ยังมีบริการเสริมอื่นๆ เช่น การล่องเรือ การให้อาหารปลา ซึ่งมีค่าบริการเพิ่มเติมตามที่กำหนด</p>
    
    <h2 class="text-2xl font-bold mb-4 mt-8">จระเข้ยักษ์กับการพัฒนาการท่องเที่ยวท้องถิ่น</h2>
    
    <p class="mb-4">การสร้างประติมากรรมจระเข้ยักษ์นี้ไม่เพียงแต่เป็นการสร้างแลนด์มาร์คใหม่เท่านั้น แต่ยังเป็นการกระตุ้นเศรษฐกิจท้องถิ่นของอำเภอวังสามหมอด้วย โดยสามารถดึงดูดนักท่องเที่ยวให้เข้ามาเยี่ยมชม และใช้จ่ายกับสินค้าและบริการต่างๆ ในพื้นที่</p>
    
    <p class="mb-4">จากการสำรวจพบว่า หลังจากมีการสร้างจระเข้ยักษ์ จำนวนนักท่องเที่ยวที่มาเยือนอำเภอวังสามหมอเพิ่มขึ้นกว่า 30% และร้านค้า ร้านอาหาร และที่พักในบริเวณใกล้เคียงมีรายได้เพิ่มขึ้นอย่างเห็นได้ชัด</p>
    
    <h2 class="text-2xl font-bold mb-4 mt-8">เคล็ดลับสำหรับนักท่องเที่ยว</h2>
    
    <ul class="list-disc pl-6 mb-4">
      <li>ควรมาในช่วงเย็นเพื่อชมพระอาทิตย์ตกที่สวยงาม</li>
      <li>เตรียมกล้องถ่ายรูปมาให้พร้อม</li>
      <li>หากต้องการขึ้นไปนั่งบนหลังจระเข้ ควรระมัดระวังและปฏิบัติตามคำแนะนำของเจ้าหน้าที่</li>
      <li>ควรเตรียมเงินสดมาให้พร้อม เนื่องจากบางบริการอาจไม่รองรับการชำระเงินผ่านบัตรเครดิตหรือแอปพลิเคชันการเงิน</li>
      <li>หากมาเป็นกลุ่มใหญ่ ควรติดต่อล่วงหน้าเพื่อขอส่วนลดหรือสิทธิพิเศษ</li>
    </ul>
    
    <p class="italic mt-8">หมายเหตุ: ข้อมูลอาจมีการเปลี่ยนแปลงได้ ควรตรวจสอบข้อมูลล่าสุดก่อนเดินทาง</p>`,
    date: "2025-04-10",
    author: {
      name: "สมชาย ใจดี",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    image: "/lovable-uploads/ff5ef890-7cc8-4d60-81ce-a916bfec9716.png",
    tags: ["แหล่งท่องเที่ยว", "แลนด์มาร์ค", "อุดรธานี", "วังสามหมอ"],
    readTime: "5 นาที"
  },
  {
    id: 2,
    title: "5 เหตุผลที่ธุรกิจของคุณควรโฆษณากับ Tour Der Wang",
    slug: "5-reasons-to-advertise",
    excerpt: "ค้นพบว่าทำไมการโฆษณากับเราถึงช่วยเพิ่มยอดขายและการเข้าถึงลูกค้าใหม่ได้อย่างมีประสิทธิภาพ",
    content: `<p class="mb-4">การเพิ่มการเข้าถึงลูกค้าเป็นสิ่งสำคัญสำหรับธุรกิจทุกประเภท โดยเฉพาะธุรกิจท่องเที่ยวและบริการในพื้นที่อำเภอวังสามหมอ การตัดสินใจลงโฆษณากับ Tour Der Wang จะช่วยให้ธุรกิจของคุณเติบโตอย่างก้าวกระโดด</p>
    
    <h3 class="text-xl font-bold mb-3 mt-6">1. เข้าถึงกลุ่มเป้าหมายที่ใช่</h3>
    <p class="mb-4">เว็บไซต์ของเรามีผู้เข้าชมกว่า 7,500 คนต่อเดือน ซึ่งส่วนใหญ่เป็นนักท่องเที่ยวที่กำลังวางแผนมาเที่ยววังสามหมอ การโฆษณากับเราจึงเป็นการเข้าถึงกลุ่มลูกค้าที่มีโอกาสใช้บริการของคุณโดยตรง</p>
    
    <h3 class="text-xl font-bold mb-3 mt-6">2. เพิ่มความน่าเชื่อถือให้ธุรกิจ</h3>
    <p class="mb-4">การปรากฏบนแพลตฟอร์มที่มีความน่าเชื่อถือช่วยสร้างภาพลักษณ์ที่ดีให้กับธุรกิจของคุณ นักท่องเที่ยวมักจะเลือกใช้บริการธุรกิจที่ได้รับการแนะนำจากแหล่งข้อมูลที่เชื่อถือได้</p>
    
    <h3 class="text-xl font-bold mb-3 mt-6">3. คู่แข่งของคุณก็ทำอยู่</h3>
    <p class="mb-4">ธุรกิจในพื้นที่จำนวนมากเลือกที่จะลงโฆษณากับเรา หากคุณไม่ทำ คุณกำลังพลาดโอกาสและปล่อยให้คู่แข่งได้เปรียบในการเข้าถึงลูกค้า</p>
    
    <h3 class="text-xl font-bold mb-3 mt-6">4. คุ้มค่าทุกการลงทุน</h3>
    <p class="mb-4">การโฆษณากับเรามีราคาเริ่มต้นเพียง 5,000 บาทต่อเดือน ซึ่งคุ้มค่ามากเมื่อเทียบกับการเข้าถึงลูกค้าใหม่และเพิ่มยอดขาย จากสถิติพบว่าธุรกิจที่ลงโฆษณากับเรามียอดขายเพิ่มขึ้น 30-50% ในช่วงเทศกาลท่องเที่ยว</p>
    
    <h3 class="text-xl font-bold mb-3 mt-6">5. รับข้อมูลเชิงลึกเพื่อพัฒนาธุรกิจ</h3>
    <p class="mb-4">เรามอบรายงานสถิติการเข้าชมให้กับลูกค้าที่ลงโฆษณากับเรา ทำให้คุณเข้าใจพฤติกรรมและความต้องการของลูกค้าได้ดียิ่งขึ้น สามารถนำไปปรับปรุงบริการให้ตอบโจทย์กลุ่มเป้าหมายได้อย่างแม่นยำ</p>`,
    date: "2025-03-28",
    author: {
      name: "วรรณภา มั่นคง",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    image: "/lovable-uploads/317bf558-3ea4-4d03-b015-0555c319ffac.png",
    tags: ["ธุรกิจท่องเที่ยว", "โฆษณา", "การตลาด", "วังสามหมอ"],
    readTime: "4 นาที"
  },
  {
    id: 3,
    title: "ทิปส์การสร้างโปรไฟล์ธุรกิจให้ดึงดูดนักท่องเที่ยว",
    slug: "business-profile-tips",
    excerpt: "เคล็ดลับการนำเสนอธุรกิจของคุณให้โดดเด่นและน่าสนใจสำหรับนักท่องเที่ยวที่มาเยือนวังสามหมอ",
    content: `<p class="mb-4">การสร้างโปรไฟล์ธุรกิจที่โดดเด่นบนแพลตฟอร์มออนไลน์เป็นสิ่งสำคัญสำหรับธุรกิจท่องเที่ยวและบริการ โดยเฉพาะในยุคที่นักท่องเที่ยวมักค้นหาข้อมูลออนไลน์ก่อนเดินทาง</p>
    
    <h3 class="text-xl font-bold mb-3 mt-6">1. ใช้รูปภาพคุณภาพสูง</h3>
    <p class="mb-4">รูปภาพคือสิ่งแรกที่ดึงดูดความสนใจของผู้เข้าชม ควรใช้รูปภาพที่มีความคมชัด มีแสงสว่างเพียงพอ และแสดงให้เห็นจุดเด่นของธุรกิจคุณ หากเป็นร้านอาหาร ให้ถ่ายภาพอาหารที่เป็นซิกเนเจอร์ หรือถ้าเป็นที่พัก ให้แสดงบรรยากาศและสิ่งอำนวยความสะดวกของห้องพัก</p>
    
    <h3 class="text-xl font-bold mb-3 mt-6">2. เขียนคำบรรยายที่กระชับและตรงประเด็น</h3>
    <p class="mb-4">คำบรรยายควรอธิบายจุดเด่นของธุรกิจคุณอย่างตรงไปตรงมา หลีกเลี่ยงการใช้คำฟุ่มเฟือยหรือคำที่เข้าใจยาก ควรเน้นประโยชน์ที่ลูกค้าจะได้รับจากการใช้บริการของคุณ</p>
    
    <h3 class="text-xl font-bold mb-3 mt-6">3. ระบุข้อมูลการติดต่อให้ครบถ้วน</h3>
    <p class="mb-4">ตรวจสอบว่าข้อมูลการติดต่อของคุณถูกต้องและครบถ้วน ทั้งเบอร์โทรศัพท์ อีเมล LINE ID แผนที่ และเวลาทำการ เพื่อให้ลูกค้าสามารถติดต่อคุณได้โดยง่าย</p>`,
    date: "2025-02-20",
    author: {
      name: "ธนากร วิชัยดิษฐ",
    },
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
    tags: ["ธุรกิจท่องเที่ยว", "การตลาด", "โปรโมชัน", "วังสามหมอ"],
    readTime: "3 นาที"
  }
];

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find article by slug
  const article = articles.find(article => article.slug === slug) || articles[0];
  
  // Generate related articles (excluding current article)
  const relatedArticles = articles
    .filter(a => a.id !== article.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
    
  // Share functionality
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          toast({
            title: "คัดลอกลิงก์แล้ว",
            description: "ลิงก์บทความถูกคัดลอกไปยังคลิปบอร์ดแล้ว",
          });
        });
        break;
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen relative">
        <Navbar />
        <div className="pt-16 flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">ไม่พบบทความที่คุณกำลังค้นหา</h2>
            <Link to="/blog" className="text-wang-orange hover:underline">
              กลับไปยังหน้าบทความ
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-wang-darkGray to-wang-darkBlue py-12 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4">
              <nav className="flex items-center text-sm" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <Link to="/" className="hover:underline text-gray-200">
                      หน้าแรก
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mx-1 text-gray-300" />
                    <Link to="/blog" className="hover:underline text-gray-200">
                      บทความ
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mx-1 text-gray-300" />
                    <span className="text-gray-100 truncate max-w-[150px] sm:max-w-xs" aria-current="page">
                      {article.title}
                    </span>
                  </li>
                </ol>
              </nav>
              
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/20 w-fit mb-2 -ml-2" 
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                กลับไปยังหน้าที่แล้ว
              </Button>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
                <div className="flex items-center">
                  {article.author.avatar ? (
                    <img 
                      src={article.author.avatar} 
                      alt={article.author.name} 
                      className="h-8 w-8 rounded-full mr-2"
                    />
                  ) : (
                    <User className="h-4 w-4 mr-1" />
                  )}
                  <span>{article.author.name}</span>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>
                    {new Date(article.date).toLocaleDateString('th-TH', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <span className="inline-block px-2 py-1 bg-wang-orange/20 rounded text-xs">
                    {article.readTime}
                  </span>
                </div>
                
                <div className="ml-auto flex flex-wrap gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="bg-white/10 hover:bg-white/20"
                    onClick={() => handleShare('facebook')}
                    aria-label="แชร์ไปยัง Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="bg-white/10 hover:bg-white/20"
                    onClick={() => handleShare('twitter')}
                    aria-label="แชร์ไปยัง Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="bg-white/10 hover:bg-white/20"
                    onClick={() => handleShare('copy')}
                    aria-label="คัดลอกลิงก์"
                  >
                    <LinkIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-8 rounded-xl overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-auto"
                  />
                </div>
                
                <article className="prose prose-lg max-w-none">
                  <div 
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </article>
                
                {/* Tags */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-600 mb-2 flex items-center">
                    <Tag className="h-4 w-4 mr-2" />
                    แท็ก
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <Link
                        key={index}
                        to={`/blog?tag=${tag}`}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Share */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-600 mb-3 flex items-center">
                    <Share2 className="h-4 w-4 mr-2" />
                    แชร์บทความนี้
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      onClick={() => handleShare('facebook')}
                      className="bg-blue-600 hover:bg-blue-700"
                      aria-label="แชร์ไปยัง Facebook"
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button 
                      onClick={() => handleShare('twitter')}
                      className="bg-sky-500 hover:bg-sky-600"
                      aria-label="แชร์ไปยัง Twitter"
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleShare('copy')}
                      className="border-gray-300"
                      aria-label="คัดลอกลิงก์"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      คัดลอกลิงก์
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  {/* Related Articles */}
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="font-bold text-lg mb-4">บทความที่เกี่ยวข้อง</h3>
                    <div className="space-y-4">
                      {relatedArticles.map((relArticle) => (
                        <div key={relArticle.id} className="group">
                          <Link to={`/article/${relArticle.slug}`} className="block">
                            <div className="mb-2 rounded-lg overflow-hidden">
                              <img 
                                src={relArticle.image} 
                                alt={relArticle.title} 
                                className="w-full h-32 object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                            <h4 className="font-medium text-wang-darkGray group-hover:text-wang-orange transition-colors">
                              {relArticle.title}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              {new Date(relArticle.date).toLocaleDateString('th-TH', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })} • {relArticle.readTime}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <Link to="/blog" className="text-wang-orange hover:underline flex items-center justify-center">
                        ดูบทความทั้งหมด
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="bg-wang-orange/10 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">สนใจโปรโมทธุรกิจของคุณ?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      ธุรกิจของคุณสามารถเข้าถึงนักท่องเที่ยวได้มากขึ้นด้วยแพ็คเกจโฆษณาจาก Tour Der Wang
                    </p>
                    <Button className="w-full bg-wang-orange hover:bg-wang-orange/90">
                      ดูแพ็คเกจโฆษณา
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
