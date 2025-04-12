
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wang-darkGray text-white">
      <div className="wang-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/317bf558-3ea4-4d03-b015-0555c319ffac.png" 
                alt="Tour Der Wang Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold">TOUR DER WANG</span>
            </Link>
            <p className="text-gray-300 mb-6">
              ส่งเสริมการท่องเที่ยวอำเภอวังสามหมอ จังหวัดอุดรธานี แหล่งรวมธรรมชาติ วัฒนธรรม และวิถีชีวิตอันเป็นเอกลักษณ์
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-wang-orange">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-wang-orange">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-wang-orange">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-wang-orange">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">เมนูหลัก</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-wang-orange">หน้าแรก</Link></li>
              <li><Link to="/#attractions" className="text-gray-300 hover:text-wang-orange">แหล่งท่องเที่ยว</Link></li>
              <li><Link to="/#food" className="text-gray-300 hover:text-wang-orange">อาหาร</Link></li>
              <li><Link to="/#culture" className="text-gray-300 hover:text-wang-orange">วัฒนธรรม</Link></li>
              <li><Link to="/#events" className="text-gray-300 hover:text-wang-orange">เทศกาล</Link></li>
              <li><Link to="/promotion-packages" className="text-gray-300 hover:text-wang-orange">แพ็คเกจโฆษณา</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-wang-orange" />
                <span className="text-gray-300">042-387-111</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-wang-orange" />
                <span className="text-gray-300">info@tourderwang.com</span>
              </li>
              <li className="text-gray-300">
                สำนักงานส่งเสริมการท่องเที่ยวอำเภอวังสามหมอ
                <br />จังหวัดอุดรธานี
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tour Der Wang - Wang Sam Mor. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
