
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "คุณนิภา",
      text: "วังสามหมอ... ธรรมชาติสวยงาม ผู้คนเป็นมิตร อาหารอร่อย ประทับใจมากค่ะ!",
      stars: 5,
      avatar: "https://source.unsplash.com/random/100x100/?woman,thai,1"
    },
    {
      name: "คุณสมชาย",
      text: "ได้มาสัมผัสวิถีชีวิตชุมชนภูไทแล้วรู้สึกอบอุ่นใจมากครับ วัฒนธรรมที่นี่ยังคงงดงาม",
      stars: 5,
      avatar: "https://source.unsplash.com/random/100x100/?man,thai,2"
    },
    {
      name: "คุณวิภา",
      text: "อาหารอร่อยมาก โดยเฉพาะไก่ย่างเขาสวนกวาง รสชาติไม่เหมือนที่ไหน จะกลับมาอีกแน่นอน",
      stars: 4,
      avatar: "https://source.unsplash.com/random/100x100/?woman,thai,3"
    }
  ];

  // Render star rating
  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ));
  };

  return (
    <section className="section-spacing bg-wang-lightGray">
      <div className="wang-container">
        <h2 className="wang-section-title">เรื่องราวจากผู้มาเยือน</h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          ประสบการณ์จากผู้มาเยือน... และเรื่องราวที่น่าประทับใจ
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {renderStars(testimonial.stars)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="wang-button">
            อ่านเรื่องราวทั้งหมด
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
