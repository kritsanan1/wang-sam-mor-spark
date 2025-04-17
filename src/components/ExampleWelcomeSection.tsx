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
  return;
};
export default ExampleWelcomeSection;