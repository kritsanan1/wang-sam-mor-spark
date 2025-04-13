
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from 'lucide-react';

interface PackageFeature {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
  color: string;
  views: number;
}

interface PackageCardsProps {
  packages: PackageFeature[];
}

const PackageCards = ({ packages }: PackageCardsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="wang-container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          แพ็คเกจค่าบริการโปรโมท
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          เลือกแพ็คเกจที่เหมาะสมกับธุรกิจของคุณ เพื่อเพิ่มโอกาสทางธุรกิจและการเข้าถึงลูกค้าใหม่
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${pkg.popular ? 'ring-2 ring-wang-orange' : ''}`}
            >
              <div className={`${pkg.color} p-6`}>
                {pkg.popular && (
                  <Badge className="bg-wang-orange hover:bg-wang-orange/90 mb-3">
                    แนะนำ
                  </Badge>
                )}
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl font-bold">฿{pkg.price}</span>
                  <span className="text-gray-500">/ {pkg.duration}</span>
                </div>
                
                <div className="bg-white/80 rounded-lg p-2 mb-4 flex items-center justify-center gap-1">
                  <span className="text-sm font-medium text-gray-700">ผู้ชมแพ็คเกจนี้</span>
                  <span className="font-bold text-wang-orange">{pkg.views.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">ครั้ง/เดือน</span>
                </div>
                
                <Button className={`w-full ${pkg.popular ? 'bg-wang-orange hover:bg-wang-orange/90' : ''}`}>
                  เลือกแพ็คเกจนี้
                </Button>
              </div>
              
              <div className="p-6 bg-white">
                <h4 className="font-medium mb-4">สิ่งที่คุณจะได้รับ:</h4>
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageCards;
