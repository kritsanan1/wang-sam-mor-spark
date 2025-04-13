
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-wang-orange to-orange-500 py-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/8e5e6b84-6105-45f7-b97d-4dce2a65d731.png')] bg-cover bg-center opacity-10"></div>
      <div className="wang-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            โปรโมทธุรกิจของคุณกับ Tour Der Wang <br/>
            <span className="text-yellow-200">สร้างการมองเห็นสู่กลุ่มนักท่องเที่ยว</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            เพิ่มการมองเห็นธุรกิจของคุณให้กับนักท่องเที่ยวที่มาเยือนวังสามหมอ
            ด้วยแพ็คเกจโฆษณาที่ตอบโจทย์ทุกความต้องการ
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg mb-10 border border-white/20">
            <p className="font-semibold text-xl mb-2">วังสามหมอกำลังเติบโต!</p>
            <p className="mb-4">มีนักท่องเที่ยวกว่า <span className="font-bold text-2xl text-yellow-200">15,000+ คน</span> เข้าเยี่ยมชมในปีที่ผ่านมา</p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-yellow-200">56%</p>
                <p className="text-sm">เติบโตจากปีก่อน</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-200">4,200+</p>
                <p className="text-sm">ผู้เข้าชมเว็บไซต์ต่อเดือน</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-200">82%</p>
                <p className="text-sm">ใช้บริการจากโฆษณา</p>
              </div>
            </div>
          </div>
          
          <Link to="#packages" className="inline-block">
            <Button size="lg" className="bg-white text-wang-orange hover:bg-white/90 font-bold text-lg group">
              ดูแพ็คเกจโฆษณา
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
