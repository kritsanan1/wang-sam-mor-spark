
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TourGallery from '@/components/TourGallery';
import TourDetails from '@/components/TourDetails';
import RelatedTours from '@/components/RelatedTours';
import BookingSection from '@/components/BookingSection';
import { useParams } from 'react-router-dom';

const TourDetail = () => {
  const { id } = useParams();
  
  // ในอนาคตสามารถเชื่อมต่อกับ API เพื่อดึงข้อมูลตาม ID ได้
  
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="pt-16">
        <TourGallery id={id} />
        <TourDetails id={id} />
        <BookingSection id={id} />
        <RelatedTours id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default TourDetail;
