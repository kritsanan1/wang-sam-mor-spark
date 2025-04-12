
import React from 'react';
import { MapPin, Star, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

// ข้อมูลตัวอย่าง
const allTours = [
  {
    id: "1",
    name: "ทุ่งดอกกระเจียว",
    location: "อำเภอวังสามหมอ",
    image: "/lovable-uploads/317bf558-3ea4-4d03-b015-0555c319ffac.png",
    rating: 4.8,
    reviews: 124,
    price: "40 บาท",
    views: 1240
  },
  {
    id: "2",
    name: "ผาแดง",
    location: "อำเภอวังสามหมอ",
    image: "/lovable-uploads/8e5e6b84-6105-45f7-b97d-4dce2a65d731.png",
    rating: 4.5,
    reviews: 87,
    price: "ฟรี",
    views: 980
  },
  {
    id: "3",
    name: "น้ำตกวังสามหมอ",
    location: "อำเภอวังสามหมอ",
    image: "https://source.unsplash.com/random/300x200/?waterfall,1",
    rating: 4.3,
    reviews: 56,
    price: "20 บาท",
    views: 765
  },
  {
    id: "4",
    name: "วัดป่าภูไท",
    location: "อำเภอวังสามหมอ",
    image: "https://source.unsplash.com/random/300x200/?temple,1",
    rating: 4.7,
    reviews: 92,
    price: "ฟรี",
    views: 850
  },
  {
    id: "5",
    name: "ตลาดชุมชนวังสามหมอ",
    location: "อำเภอวังสามหมอ",
    image: "https://source.unsplash.com/random/300x200/?market,1",
    rating: 4.2,
    reviews: 45,
    price: "ฟรี",
    views: 620
  }
];

interface RelatedToursProps {
  id?: string;
}

const RelatedTours = ({ id = "1" }: RelatedToursProps) => {
  // กรองสถานที่ที่เกี่ยวข้อง (ไม่รวมสถานที่ปัจจุบัน)
  const relatedTours = allTours.filter(tour => tour.id !== id).slice(0, 4);
  
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">สถานที่ท่องเที่ยวใกล้เคียง</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedTours.map((tour) => (
            <Link 
              to={`/tour/${tour.id}`} 
              key={tour.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img 
                  src={tour.image} 
                  alt={tour.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium">
                  {tour.price}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{tour.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm">{tour.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{tour.rating}</span>
                    <span className="mx-1 text-gray-400 text-sm">•</span>
                    <span className="text-gray-600 text-sm">{tour.reviews} รีวิว</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Eye size={14} className="mr-1" />
                    <span className="text-sm font-medium text-wang-orange">{tour.views}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedTours;
