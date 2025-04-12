
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ข้อมูลตัวอย่าง - ในอนาคตสามารถดึงจากฐานข้อมูลได้
const tourGalleries = {
  "1": {
    name: "ทุ่งดอกกระเจียว",
    images: [
      "https://source.unsplash.com/random/900x600/?wildflowers,1",
      "https://source.unsplash.com/random/900x600/?wildflowers,2",
      "https://source.unsplash.com/random/900x600/?wildflowers,3",
      "https://source.unsplash.com/random/900x600/?wildflowers,4"
    ]
  },
  "2": {
    name: "ผาแดง",
    images: [
      "https://source.unsplash.com/random/900x600/?cliff,1",
      "https://source.unsplash.com/random/900x600/?cliff,2",
      "https://source.unsplash.com/random/900x600/?cliff,3"
    ]
  },
  "3": {
    name: "น้ำตกวังสามหมอ",
    images: [
      "https://source.unsplash.com/random/900x600/?waterfall,1",
      "https://source.unsplash.com/random/900x600/?waterfall,2",
      "https://source.unsplash.com/random/900x600/?waterfall,3"
    ]
  }
};

interface TourGalleryProps {
  id?: string;
}

const TourGallery = ({ id = "1" }: TourGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const gallery = tourGalleries[id as keyof typeof tourGalleries] || tourGalleries["1"];
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % gallery.images.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + gallery.images.length) % gallery.images.length);
  };

  return (
    <div className="relative w-full bg-gray-100">
      <div className="relative h-[70vh] overflow-hidden">
        {/* Main image */}
        <img 
          src={gallery.images[activeIndex]} 
          alt={`${gallery.name} - ภาพที่ ${activeIndex + 1}`} 
          className="w-full h-full object-cover transition-opacity duration-500"
          loading="lazy"
        />
        
        {/* Image overlay with tour name */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{gallery.name}</h1>
            <div className="flex gap-2 justify-center">
              {gallery.images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full ${idx === activeIndex ? 'bg-wang-orange' : 'bg-white/70'}`}
                  aria-label={`ดูภาพที่ ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/30 hover:bg-black/50"
          onClick={prevSlide}
          aria-label="ภาพก่อนหน้า"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/30 hover:bg-black/50"
          onClick={nextSlide}
          aria-label="ภาพถัดไป"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Thumbnails */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {gallery.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`flex-shrink-0 h-16 w-24 md:h-20 md:w-32 rounded-md overflow-hidden border-2 transition-all 
              ${idx === activeIndex ? 'border-wang-orange scale-105' : 'border-transparent'}`}
            >
              <img 
                src={img} 
                alt={`ภาพขนาดย่อ ${idx + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourGallery;
