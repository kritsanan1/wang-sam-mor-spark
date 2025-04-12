
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, ArrowLeft, Share2, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BlogPostDetail = () => {
  const { id } = useParams();
  
  // This would typically come from an API or database
  const blogPosts = [
    {
      id: 1,
      title: "5 เหตุผลที่ธุรกิจของคุณควรโฆษณากับ Tour Der Wang",
      excerpt: "ค้นพบว่าทำไมการโฆษณากับเราถึงช่วยเพิ่มยอดขายและการเข้าถึงลูกค้าใหม่ได้อย่างมีประสิทธิภาพ",
      content: `
      <p class="mb-4">การเพิ่มการเข้าถึงลูกค้าเป็นสิ่งสำคัญสำหรับธุรกิจทุกประเภท โดยเฉพาะธุรกิจท่องเที่ยวและบริการในพื้นที่อำเภอวังสามหมอ การตัดสินใจลงโฆษณากับ Tour Der Wang จะช่วยให้ธุรกิจของคุณเติบโตอย่างก้าวกระโดด</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">1. เข้าถึงกลุ่มเป้าหมายที่ใช่</h3>
      <p class="mb-4">เว็บไซต์ของเรามีผู้เข้าชมกว่า 7,500 คนต่อเดือน ซึ่งส่วนใหญ่เป็นนักท่องเที่ยวที่กำลังวางแผนมาเที่ยววังสามหมอ การโฆษณากับเราจึงเป็นการเข้าถึงกลุ่มลูกค้าที่มีโอกาสใช้บริการของคุณโดยตรง</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">2. เพิ่มความน่าเชื่อถือให้ธุรกิจ</h3>
      <p class="mb-4">การปรากฏบนแพลตฟอร์มที่มีความน่าเชื่อถือช่วยสร้างภาพลักษณ์ที่ดีให้กับธุรกิจของคุณ นักท่องเที่ยวมักจะเลือกใช้บริการธุรกิจที่ได้รับการแนะนำจากแหล่งข้อมูลที่เชื่อถือได้</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">3. คู่แข่งของคุณก็ทำอยู่</h3>
      <p class="mb-4">ธุรกิจในพื้นที่จำนวนมากเลือกที่จะลงโฆษณากับเรา หากคุณไม่ทำ คุณกำลังพลาดโอกาสและปล่อยให้คู่แข่งได้เปรียบในการเข้าถึงลูกค้า</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">4. คุ้มค่าทุกการลงทุน</h3>
      <p class="mb-4">การโฆษณากับเรามีราคาเริ่มต้นเพียง 5,000 บาทต่อเดือน ซึ่งคุ้มค่ามากเมื่อเทียบกับการเข้าถึงลูกค้าใหม่และเพิ่มยอดขาย จากสถิติพบว่าธุรกิจที่ลงโฆษณากับเรามียอดขายเพิ่มขึ้น 30-50% ในช่วงเทศกาลท่องเที่ยว</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">5. รับข้อมูลเชิงลึกเพื่อพัฒนาธุรกิจ</h3>
      <p class="mb-4">เรามอบรายงานสถิติการเข้าชมให้กับลูกค้าที่ลงโฆษณากับเรา ทำให้คุณเข้าใจพฤติกรรมและความต้องการของลูกค้าได้ดียิ่งขึ้น สามารถนำไปปรับปรุงบริการให้ตอบโจทย์กลุ่มเป้าหมายได้อย่างแม่นยำ</p>
      
      <p class="mt-6 font-medium">สนใจโฆษณากับเรา? ติดต่อทีมงานของเราได้ที่ 042-387-222 หรืออีเมล ads@tourderwang.com เพื่อรับคำปรึกษาและเริ่มต้นโฆษณาธุรกิจของคุณบนแพลตฟอร์มของเราได้ทันที</p>
      `,
      date: "2025-03-28",
      image: "/lovable-uploads/317bf558-3ea4-4d03-b015-0555c319ffac.png",
      author: "ทีมงาน Tour Der Wang"
    },
    {
      id: 2,
      title: "กรณีศึกษา: ร้านอาหารท้องถิ่นเพิ่มยอดขาย 40% หลังโฆษณากับเรา",
      excerpt: "เจ้าของร้านอาหารพื้นเมืองวังสามหมอเล่าประสบการณ์หลังจากร่วมโฆษณากับ Tour Der Wang เป็นเวลา 3 เดือน",
      content: `
      <p class="mb-4">คุณสมชาย เจ้าของร้านอาหารพื้นเมือง "กินอยู่วัง" ในอำเภอวังสามหมอ ได้เล่าประสบการณ์หลังจากเริ่มลงโฆษณากับ Tour Der Wang เป็นระยะเวลา 3 เดือน</p>
      
      <p class="mb-4">"ก่อนหน้านี้ร้านเราเป็นที่รู้จักเฉพาะในกลุ่มคนท้องถิ่นเท่านั้น แต่หลังจากลงโฆษณากับ Tour Der Wang ร้านของเราเริ่มมีลูกค้าที่เป็นนักท่องเที่ยวแวะเข้ามาใช้บริการมากขึ้น"</p>
      
      <p class="mb-4">คุณสมชายเล่าว่า ภายในเดือนแรกของการโฆษณา มีนักท่องเที่ยวเข้ามาใช้บริการเพิ่มขึ้นประมาณ 20% และในเดือนที่ 3 ยอดลูกค้าเพิ่มขึ้นถึง 40% เมื่อเทียบกับช่วงเวลาเดียวกันของปีที่แล้ว</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">กลยุทธ์ที่ใช้</h3>
      
      <p class="mb-4">คุณสมชายเลือกใช้แพ็คเกจมาตรฐาน ซึ่งรวมถึง:</p>
      <ul class="list-disc pl-5 mb-4">
        <li>การแสดงร้านในตำแหน่งที่โดดเด่นบนเว็บไซต์</li>
        <li>รูปภาพอาหารและบรรยากาศร้าน 10 รูป</li>
        <li>วิดีโอแนะนำร้าน 1 คลิป</li>
        <li>การโพสต์บนโซเชียลมีเดียของ Tour Der Wang</li>
      </ul>
      
      <p class="mb-4">"สิ่งที่ผมประทับใจมากคือ ทีมงาน Tour Der Wang ช่วยให้คำแนะนำในการถ่ายภาพอาหารและจัดทำคำบรรยายที่ดึงดูด ทำให้โพสต์ของร้านได้รับความสนใจมากขึ้น"</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">ผลลัพธ์ที่ได้</h3>
      
      <p class="mb-4">นอกจากยอดขายที่เพิ่มขึ้น 40% แล้ว คุณสมชายยังได้รับประโยชน์อื่นๆ อีก:</p>
      <ul class="list-disc pl-5 mb-4">
        <li>ค่าใช้จ่ายเฉลี่ยต่อลูกค้าเพิ่มขึ้น 15%</li>
        <li>มีลูกค้าประจำเพิ่มขึ้น 25%</li>
        <li>ได้รับคำแนะนำปากต่อปากมากขึ้น</li>
        <li>ได้รับการติดต่อให้จัดเลี้ยงในงานสำคัญของหน่วยงานต่างๆ</li>
      </ul>
      
      <blockquote class="border-l-4 border-wang-orange pl-4 italic my-6">"การลงทุนกับ Tour Der Wang คุ้มค่ามาก เพราะไม่เพียงแค่เพิ่มยอดขายในระยะสั้น แต่ยังช่วยสร้างฐานลูกค้าใหม่และเพิ่มการรับรู้แบรนด์ของร้านในระยะยาว" - คุณสมชาย</blockquote>
      
      <p class="mt-6 font-medium">สนใจลงโฆษณากับเราเหมือนร้าน "กินอยู่วัง"? ติดต่อทีมงานของเราได้ที่ 042-387-222 หรืออีเมล ads@tourderwang.com เรายินดีช่วยให้ธุรกิจของคุณเติบโตเหมือนที่เราทำให้กับร้าน "กินอยู่วัง"</p>
      `,
      date: "2025-03-15",
      image: "/lovable-uploads/8e5e6b84-6105-45f7-b97d-4dce2a65d731.png",
      author: "ทีมงาน Tour Der Wang"
    },
    {
      id: 3,
      title: "ทิปส์การสร้างโปรไฟล์ธุรกิจให้ดึงดูดนักท่องเที่ยว",
      excerpt: "เคล็ดลับการนำเสนอธุรกิจของคุณให้โดดเด่นและน่าสนใจสำหรับนักท่องเที่ยวที่มาเยือนวังสามหมอ",
      content: `
      <p class="mb-4">การสร้างโปรไฟล์ธุรกิจที่โดดเด่นบนแพลตฟอร์มออนไลน์เป็นสิ่งสำคัญสำหรับธุรกิจท่องเที่ยวและบริการ โดยเฉพาะในยุคที่นักท่องเที่ยวมักค้นหาข้อมูลออนไลน์ก่อนเดินทาง</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">1. ใช้รูปภาพคุณภาพสูง</h3>
      <p class="mb-4">รูปภาพคือสิ่งแรกที่ดึงดูดความสนใจของผู้เข้าชม ควรใช้รูปภาพที่มีความคมชัด มีแสงสว่างเพียงพอ และแสดงให้เห็นจุดเด่นของธุรกิจคุณ หากเป็นร้านอาหาร ให้ถ่ายภาพอาหารที่เป็นซิกเนเจอร์ หรือถ้าเป็นที่พัก ให้แสดงบรรยากาศและสิ่งอำนวยความสะดวกของห้องพัก</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">2. เขียนคำบรรยายที่กระชับและตรงประเด็น</h3>
      <p class="mb-4">คำบรรยายควรอธิบายจุดเด่นของธุรกิจคุณอย่างตรงไปตรงมา หลีกเลี่ยงการใช้คำฟุ่มเฟือยหรือคำที่เข้าใจยาก ควรเน้นประโยชน์ที่ลูกค้าจะได้รับจากการใช้บริการของคุณ</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">3. ระบุข้อมูลการติดต่อให้ครบถ้วน</h3>
      <p class="mb-4">ตรวจสอบว่าข้อมูลการติดต่อของคุณถูกต้องและครบถ้วน ทั้งเบอร์โทรศัพท์ อีเมล LINE ID แผนที่ และเวลาทำการ เพื่อให้ลูกค้าสามารถติดต่อคุณได้โดยง่าย</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">4. เพิ่มรีวิวและคำรับรองจากลูกค้า</h3>
      <p class="mb-4">รีวิวจากลูกค้าที่เคยใช้บริการจะช่วยเพิ่มความน่าเชื่อถือให้กับธุรกิจของคุณ กระตุ้นให้ลูกค้าที่พึงพอใจเขียนรีวิวให้คุณ และแสดงรีวิวเหล่านี้บนโปรไฟล์ของคุณ</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">5. อัปเดตข้อมูลอย่างสม่ำเสมอ</h3>
      <p class="mb-4">ข้อมูลที่ทันสมัยแสดงให้เห็นว่าธุรกิจของคุณยังคงดำเนินการอยู่และใส่ใจในการให้บริการ อัปเดตรูปภาพ โปรโมชัน และข้อมูลอื่นๆ อย่างน้อยเดือนละครั้ง</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">6. เน้นความเป็นเอกลักษณ์ของท้องถิ่น</h3>
      <p class="mb-4">นักท่องเที่ยวมักมองหาประสบการณ์ที่มีความเป็นเอกลักษณ์ของท้องถิ่น เน้นจุดเด่นที่มาจากวัฒนธรรมและทรัพยากรในพื้นที่วังสามหมอ เช่น อาหารพื้นเมือง หัตถกรรมท้องถิ่น หรือกิจกรรมที่มีเฉพาะในพื้นที่</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">7. เชื่อมโยงกับจุดท่องเที่ยวใกล้เคียง</h3>
      <p class="mb-4">แสดงให้เห็นว่าธุรกิจของคุณอยู่ใกล้กับสถานที่ท่องเที่ยวสำคัญใดบ้าง และระบุระยะเวลาหรือระยะทางจากธุรกิจของคุณไปยังสถานที่เหล่านั้น</p>
      
      <p class="mt-6 font-medium">นำเคล็ดลับเหล่านี้ไปใช้ในการสร้างโปรไฟล์ธุรกิจของคุณบน Tour Der Wang เพื่อดึงดูดนักท่องเที่ยวและเพิ่มยอดขายให้กับธุรกิจของคุณ</p>
      `,
      date: "2025-02-20",
      image: "https://source.unsplash.com/random/300x200/?business",
      author: "ทีมงาน Tour Der Wang"
    }
  ];
  
  const post = blogPosts.find(post => post.id === parseInt(id || "1"));
  
  if (!post) {
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
        <section className="bg-gradient-to-r from-wang-orange to-orange-500 py-12 text-white">
          <div className="wang-container">
            <Link to="/blog" className="flex items-center text-white mb-4 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-1" />
              กลับไปยังหน้าบทความ
            </Link>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>
                  {new Date(post.date).toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <Button variant="ghost" size="sm" className="bg-white/20 hover:bg-white/30">
                <Share2 className="h-4 w-4 mr-1" />
                แชร์บทความ
              </Button>
            </div>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-16 bg-white">
          <div className="wang-container">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 rounded-xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto"
                />
              </div>
              
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-12 bg-gray-50">
          <div className="wang-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">สนใจโปรโมทธุรกิจของคุณกับเรา?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              ค้นหาแพ็คเกจโฆษณาที่เหมาะกับธุรกิจของคุณและเริ่มต้นเพิ่มยอดขายและการเข้าถึงลูกค้าใหม่วันนี้
            </p>
            <Link to="/promotion-packages" className="px-8 py-3 bg-wang-orange hover:bg-wang-orange/90 text-white font-semibold rounded-md transition-colors">
              ดูแพ็คเกจโฆษณา
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostDetail;
