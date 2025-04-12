
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Heart, Calendar, MapPin } from 'lucide-react';

interface TargetGroup {
  name: string;
  percentage: number;
  details: string;
}

interface DemographicData {
  genderSplit: { male: number, female: number };
  ageGroups: Array<{ group: string, percentage: number }>;
  topLocations: Array<{ name: string, percentage: number }>;
  interests: Array<{ name: string, percentage: number }>;
}

interface DataInsightsProps {
  targetGroups: TargetGroup[];
  demographicData: DemographicData;
}

const DataInsights = ({ targetGroups, demographicData }: DataInsightsProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="wang-container">
        <div className="text-center mb-10">
          <Badge className="bg-wang-orange hover:bg-wang-orange/90 mb-2">ข้อมูลเชิงลึก</Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ข้อมูลและสถิตินักท่องเที่ยวของเรา
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ใช้ข้อมูลเชิงลึกจากการวิเคราะห์นักท่องเที่ยวกว่า 7,500+ คนต่อเดือนที่เข้าชมเว็บไซต์ของเรา
            เพื่อเพิ่มโอกาสทางธุรกิจของคุณ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <BarChart3 className="w-10 h-10 text-wang-orange mb-3" />
            <h3 className="font-semibold text-lg mb-2">7,500+</h3>
            <p className="text-gray-600">ผู้เข้าชมต่อเดือน</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <Users className="w-10 h-10 text-wang-orange mb-3" />
            <h3 className="font-semibold text-lg mb-2">65%</h3>
            <p className="text-gray-600">การเข้าชมหน้าธุรกิจเพิ่มขึ้น</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <Heart className="w-10 h-10 text-wang-orange mb-3" />
            <h3 className="font-semibold text-lg mb-2">4.8/5</h3>
            <p className="text-gray-600">คะแนนความพึงพอใจ</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <Calendar className="w-10 h-10 text-wang-orange mb-3" />
            <h3 className="font-semibold text-lg mb-2">3.5 วัน</h3>
            <p className="text-gray-600">ระยะเวลาพำนักเฉลี่ย</p>
          </div>
        </div>

        {/* Target Audience Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-wang-orange" />
            กลุ่มเป้าหมายหลัก
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetGroups.map((group, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{group.name}</span>
                  <Badge variant="outline" className="bg-wang-orange/10 text-wang-orange border-wang-orange/30">
                    {group.percentage}%
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{group.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Demographic Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h4 className="font-medium mb-4">ช่วงอายุ</h4>
            <div className="space-y-2">
              {demographicData.ageGroups.map((age, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-16 text-sm">{age.group}</span>
                  <div className="flex-1 mx-2">
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-wang-orange" 
                        style={{width: `${age.percentage}%`}}
                      ></div>
                    </div>
                  </div>
                  <span className="w-8 text-right text-sm font-medium">{age.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h4 className="font-medium mb-4">เพศ</h4>
            <div className="flex items-center justify-center mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden relative bg-gray-100">
                <div 
                  className="absolute bottom-0 left-0 w-full bg-wang-orange" 
                  style={{height: `${demographicData.genderSplit.female}%`}}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bold">{demographicData.genderSplit.female}%</div>
                    <div className="text-xs">หญิง</div>
                  </div>
                </div>
              </div>
              <div className="w-32 h-32 rounded-full overflow-hidden relative bg-gray-100 ml-6">
                <div 
                  className="absolute bottom-0 left-0 w-full bg-blue-500" 
                  style={{height: `${demographicData.genderSplit.male}%`}}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bold">{demographicData.genderSplit.male}%</div>
                    <div className="text-xs">ชาย</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Locations and Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h4 className="font-medium mb-4">
              <MapPin className="w-4 h-4 inline mr-1 text-wang-orange" />
              ที่อยู่
            </h4>
            <ul className="space-y-2">
              {demographicData.topLocations.map((location, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-gray-700">{location.name}</span>
                  <span className="font-medium text-sm">{location.percentage}%</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h4 className="font-medium mb-4">
              <Heart className="w-4 h-4 inline mr-1 text-wang-orange" />
              ความสนใจ
            </h4>
            <ul className="space-y-2">
              {demographicData.interests.map((interest, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-gray-700">{interest.name}</span>
                  <span className="font-medium text-sm">{interest.percentage}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataInsights;
