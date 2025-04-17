
import React from 'react';
import { NavLink } from '../Navbar';

export const getNavLinks = (): NavLink[] => {
  return [
    { text: "หน้าหลัก", href: "/" },
    { 
      text: "สถานที่ท่องเที่ยว",
      href: "/tour/1",
      subLinks: [
        { text: "ธรรมชาติ", href: "/tour/1" },
        { text: "วัฒนธรรม", href: "/tour/2" },
        { text: "ประวัติศาสตร์", href: "/tour/3" },
      ]
    },
    { text: "ร้านอาหาร", href: "/food" },
    { text: "ที่พัก", href: "/accommodation" },
    { text: "แผนที่และการเดินทาง", href: "/travel-map" },
    { text: "โปรโมชั่นพิเศษ", href: "/promotion-packages" },
    { text: "บทความ", href: "/blog" },
    { text: "เว็บบอร์ด", href: "/forum" },
  ];
};
