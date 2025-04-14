
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Car, Bus, MapPin, Clock, Route } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Destination {
  id: string;
  name: string;
  coordinates: [number, number];
  distance: string;
  travelTime: {
    car: string;
    bus: string;
  };
  directions: {
    car: string[];
    bus: string[];
  };
}

interface TravelDirectionsProps {
  onSelectDestination: (destination: { name: string; coordinates: [number, number] }) => void;
  selectedDestination: { name: string; coordinates: [number, number] } | null;
}

const TravelDirections: React.FC<TravelDirectionsProps> = ({ onSelectDestination, selectedDestination }) => {
  // ข้อมูลสถานที่ท่องเที่ยว
  const destinations: Destination[] = [
    {
      id: '1',
      name: 'ทุ่งดอกกระเจียว',
      coordinates: [103.2707, 17.3277],
      distance: '15 กม. จากตัวเมือง',
      travelTime: {
        car: '25 นาที',
        bus: '45 นาที',
      },
      directions: {
        car: [
          'เริ่มต้นจากตัวอำเภอวังสามหมอ มุ่งหน้าไปทางทิศเหนือ',
          'ขับตามทางหลวงหมายเลข 2023 ประมาณ 10 กม.',
          'เลี้ยวขวาที่ป้ายบอกทางทุ่งดอกกระเจียว',
          'ขับตามทางประมาณ 5 กม. จนถึงจุดหมาย'
        ],
        bus: [
          'นั่งรถโดยสารสายวังสามหมอ-กุมภวาปี',
          'ลงที่ป้ายบ้านโนนสำราญ',
          'ต่อรถสองแถวหรือรถมอเตอร์ไซค์รับจ้างไปยังทุ่งดอกกระเจียวอีกประมาณ 5 กม.'
        ]
      }
    },
    {
      id: '2',
      name: 'ผาแดง',
      coordinates: [103.2307, 17.2977],
      distance: '8 กม. จากตัวเมือง',
      travelTime: {
        car: '15 นาที',
        bus: '30 นาที',
      },
      directions: {
        car: [
          'เริ่มต้นจากตัวอำเภอวังสามหมอ มุ่งหน้าไปทางทิศตะวันตก',
          'ขับตามทางหลวงหมายเลข 2023 ประมาณ 5 กม.',
          'เลี้ยวซ้ายที่ป้ายบอกทางผาแดง',
          'ขับตามทางประมาณ 3 กม. จนถึงลานจอดรถ',
          'เดินตามเส้นทางศึกษาธรรมชาติอีกประมาณ 500 เมตร'
        ],
        bus: [
          'นั่งรถโดยสารสายวังสามหมอ-ศรีธาตุ',
          'ลงที่ป้ายทางเข้าผาแดง',
          'ต่อรถมอเตอร์ไซค์รับจ้างไปยังลานจอดรถผาแดงอีกประมาณ 3 กม.',
          'เดินตามเส้นทางศึกษาธรรมชาติอีกประมาณ 500 เมตร'
        ]
      }
    },
    {
      id: '3',
      name: 'น้ำตกวังสามหมอ',
      coordinates: [103.2607, 17.3177],
      distance: '12 กม. จากตัวเมือง',
      travelTime: {
        car: '20 นาที',
        bus: '40 นาที',
      },
      directions: {
        car: [
          'เริ่มต้นจากตัวอำเภอวังสามหมอ มุ่งหน้าไปทางทิศตะวันออก',
          'ขับตามทางหลวงหมายเลข 2023 ประมาณ 8 กม.',
          'เลี้ยวขวาที่ป้ายบอกทางน้ำตกวังสามหมอ',
          'ขับตามทางประมาณ 4 กม. จนถึงลานจอดรถ'
        ],
        bus: [
          'นั่งรถโดยสารสายวังสามหมอ-กุมภวาปี',
          'ลงที่ป้ายทางเข้าน้ำตกวังสามหมอ',
          'ต่อรถสองแถวหรือรถมอเตอร์ไซค์รับจ้างไปยังน้ำตกอีกประมาณ 4 กม.'
        ]
      }
    }
  ];

  // เลือกปลายทางจากข้อมูลสถานที่
  const handleSelectDestination = (destination: Destination) => {
    onSelectDestination({
      name: destination.name,
      coordinates: destination.coordinates
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">เลือกสถานที่ท่องเที่ยว</h2>
      
      {destinations.map((destination) => (
        <div 
          key={destination.id}
          className={`mb-4 border rounded-lg overflow-hidden ${
            selectedDestination?.name === destination.name ? 'border-wang-orange shadow-md' : 'border-gray-200'
          }`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{destination.name}</h3>
              <Button
                variant={selectedDestination?.name === destination.name ? "default" : "outline"}
                size="sm"
                onClick={() => handleSelectDestination(destination)}
                className={selectedDestination?.name === destination.name ? "bg-wang-orange hover:bg-orange-600" : ""}
              >
                <MapPin className="mr-1 h-4 w-4" /> 
                เลือก
              </Button>
            </div>
            
            <div className="flex items-center text-gray-600 text-sm mt-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{destination.distance}</span>
              <Clock className="h-4 w-4 ml-3 mr-1" />
              <span>รถยนต์: {destination.travelTime.car}</span>
            </div>
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value={`directions-${destination.id}`}>
              <AccordionTrigger className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-sm">
                <div className="flex items-center">
                  <Route className="mr-2 h-4 w-4" />
                  วิธีการเดินทาง
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center font-medium mb-2">
                      <Car className="mr-2 h-4 w-4 text-wang-orange" />
                      <span>โดยรถยนต์ ({destination.travelTime.car})</span>
                    </div>
                    <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-1">
                      {destination.directions.car.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                  
                  <div>
                    <div className="flex items-center font-medium mb-2">
                      <Bus className="mr-2 h-4 w-4 text-wang-orange" />
                      <span>โดยรถโดยสาร ({destination.travelTime.bus})</span>
                    </div>
                    <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-1">
                      {destination.directions.bus.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}

      <div className="mt-6 border-t pt-4">
        <h3 className="font-semibold mb-2">ดูข้อมูลเพิ่มเติม</h3>
        <div className="grid grid-cols-1 gap-3">
          <Link to="/tour/1" className="text-sm text-wang-orange hover:text-orange-700 flex items-center">
            <MapPin className="mr-1 h-4 w-4" />
            รายละเอียดสถานที่ท่องเที่ยวเพิ่มเติม
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelDirections;
