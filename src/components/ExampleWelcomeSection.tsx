
import React, { useState } from 'react';
import WelcomeImage from './WelcomeImage';
import { v4 as uuidv4 } from 'uuid';
import { processWelcomeImage } from '@/utils/imageUtils';
import { WelcomeImage as WelcomeImageType } from '@/types/imageTypes';
import { toast } from 'sonner';

const ExampleWelcomeSection: React.FC = () => {
  // Generate UUID function as a fallback in case uuid package isn't available
  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  };
  
  const [welcomeImage, setWelcomeImage] = useState<WelcomeImageType>({
    id: uuidv4() || generateUUID(),
    image: "/lovable-uploads/ee2c3e79-9937-4c16-99b4-117d6f50edd1.png",
    description: "สัมผัสประสบการณ์ท่องเที่ยวแบบใกล้ชิดธรรมชาติที่วังสามหมอ แหล่งท่องเที่ยวที่ซ่อนตัวแต่เต็มไปด้วยเสน่ห์"
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const newImageData: Partial<WelcomeImageType> = {
      id: uuidv4() || generateUUID(),
      image: file,
      description: welcomeImage.description
    };
    
    const processedImage = processWelcomeImage(newImageData);
    if (processedImage) {
      setWelcomeImage(processedImage);
      toast.success("ภาพถูกอัพโหลดเรียบร้อยแล้ว");
    }
  };

  const handleDescriptionUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newDesc = e.target.value;
    const newImageData: WelcomeImageType = {
      ...welcomeImage,
      description: newDesc
    };
    
    const processedImage = processWelcomeImage(newImageData);
    if (processedImage) {
      setWelcomeImage(processedImage);
    }
  };

  return (
    <div className="wang-container max-w-5xl mx-auto">
      <div className="space-y-8">
        <h2 className="wang-section-title">ยินดีต้อนรับสู่วังสามหมอ</h2>
        
        <WelcomeImage 
          image={welcomeImage.image}
          description={welcomeImage.description}
          onError={(error) => toast.error(`เกิดข้อผิดพลาด: ${error.message}`)}
        />
        
        <div className="mt-8 p-4 border border-dashed border-wang-orange rounded-lg bg-wang-lightGray">
          <h3 className="text-xl font-bold mb-4">ตัวควบคุมผู้ดูแลระบบ</h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="image-upload" className="block mb-2">
                เปลี่ยนรูปภาพ:
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm text-wang-darkGray
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-wang-orange file:text-white
                hover:file:bg-orange-600"
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block mb-2">
                คำอธิบาย (20-100 ตัวอักษร):
              </label>
              <textarea
                id="description"
                value={welcomeImage.description}
                onChange={handleDescriptionUpdate}
                rows={3}
                className="w-full rounded-md border border-gray-300 px-4 py-2"
              />
              <p className="text-sm text-gray-500 mt-1">
                จำนวนตัวอักษร: {welcomeImage.description.length}/100
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleWelcomeSection;
