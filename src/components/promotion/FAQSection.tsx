
import React from 'react';

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="wang-container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          คำถามที่พบบ่อย
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-2">ระยะเวลาในการลงโฆษณาสามารถกำหนดเองได้หรือไม่?</h3>
            <p className="text-gray-600">สามารถกำหนดเองได้ตามความต้องการ นอกเหนือจากแพ็คเกจมาตรฐานที่เรามีให้ กรุณาติดต่อทีมงานเพื่อสอบถามรายละเอียดเพิ่มเติม</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-2">มีส่วนลดสำหรับธุรกิจท้องถิ่นในวังสามหมอหรือไม่?</h3>
            <p className="text-gray-600">มีส่วนลดพิเศษสำหรับธุรกิจท้องถิ่นในอำเภอวังสามหมอ กรุณาติดต่อเราพร้อมแสดงหลักฐานการจดทะเบียนธุรกิจในพื้นที่</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-2">สามารถปรับเปลี่ยนเนื้อหาโฆษณาในระหว่างระยะเวลาโปรโมทได้หรือไม่?</h3>
            <p className="text-gray-600">สามารถปรับเปลี่ยนได้ 1 ครั้งต่อเดือนสำหรับแพ็คเกจมาตรฐานและพรีเมียม โดยต้องแจ้งล่วงหน้าอย่างน้อย 3 วันทำการ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
