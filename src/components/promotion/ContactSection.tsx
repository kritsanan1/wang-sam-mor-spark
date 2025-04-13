
import React from 'react';
import { Button } from "@/components/ui/button";

interface ContactInfo {
  email: string;
  phone: string;
  lineId: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

const ContactSection = ({ contactInfo }: ContactSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="wang-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            สนใจโปรโมทธุรกิจของคุณกับเรา?
          </h2>
          <p className="text-gray-600 mb-8">
            ติดต่อทีมงานของเราเพื่อรับข้อมูลเพิ่มเติมเกี่ยวกับแพ็คเกจโปรโมทและโฆษณา
            หรือปรึกษาเกี่ยวกับแพ็คเกจที่เหมาะสมกับธุรกิจของคุณ
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center gap-2">
              <span className="font-medium">อีเมล:</span> {contactInfo.email}
            </div>
            <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center gap-2">
              <span className="font-medium">โทรศัพท์:</span> {contactInfo.phone}
            </div>
            <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center gap-2">
              <span className="font-medium">Line ID:</span> {contactInfo.lineId}
            </div>
          </div>
          
          <Button className="mt-8 px-8 bg-wang-orange hover:bg-wang-orange/90">
            ติดต่อเรา
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
