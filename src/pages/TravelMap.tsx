
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapComponent from '@/components/MapComponent';
import TravelDirections from '@/components/TravelDirections';

const TravelMap = () => {
  const [selectedDestination, setSelectedDestination] = useState<{
    name: string;
    coordinates: [number, number];
  } | null>(null);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="pt-16 bg-gray-50">
        <div className="wang-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">แผนที่และการเดินทาง</h1>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            ค้นหาเส้นทางและวิธีการเดินทางไปยังสถานที่ท่องเที่ยวในวังสามหมอ
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <TravelDirections 
                onSelectDestination={setSelectedDestination}
                selectedDestination={selectedDestination}
              />
            </div>
            <div className="lg:col-span-2 h-[70vh] rounded-lg overflow-hidden shadow-lg">
              <MapComponent selectedDestination={selectedDestination} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TravelMap;
