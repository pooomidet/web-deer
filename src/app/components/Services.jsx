"use client";

import React from "react";
import { ArrowRight, Sparkles, Package, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: 1,
    name: "เก้าอี้ครู",
    img: "https://image.makewebcdn.com/makeweb/r_300x300/kpR4VNIEl/DefaultData/84_%E0%B9%80%E0%B8%81%E0%B9%89%E0%B8%B2%E0%B8%AD%E0%B8%B5%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9.jpg?v=202405291424",
    category: "เฟอร์นิเจอร์",
    description: "เก้าอี้เพื่อสุขภาพ ออกแบบตามหลักสรีรศาสตร์ ทนทาน รองรับการใช้งานยาวนาน",
  },
  {
    id: 2,
    name: "เครื่องพิมพ์เลเซอร์ สี (Network)",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/19_%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%E0%B9%80%E0%B8%A5%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD_LED_%E0%B8%AA%E0%B8%B5%E0%B8%8A%E0%B8%99%E0%B8%B4%E0%B8%94_Network_%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%B5%E0%B9%88_2__27_%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2_%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5_.jpg?v=202405291424",
    category: "Office Automation",
    description: "โซลูชันงานพิมพ์ครบวงจร เชื่อมต่อ Network ได้รวดเร็ว ประหยัดต้นทุน",
  },
  {
    id: 3,
    name: "เครื่องขยายเสียง (Power Amp)",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%A2%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2%E0%B8%87__Power_Amp_%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%A5%E0%B8%B3%E0%B9%82%E0%B8%9E%E0%B8%87.png?v=202405291424",
    category: "ระบบเสียง",
    description: "ระบบเสียงคุณภาพสูง สำหรับห้องประชุมและลานอเนกประสงค์ คมชัดทุกมิติ",
  },
  {
    id: 4,
    name: "โต๊ะเก้าอี้นักเรียน (ก่อนประถม)",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/3_%E0%B9%82%E0%B8%95%E0%B9%8A%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B9%89%E0%B8%B2%E0%B8%AD%E0%B8%B5%E0%B9%89%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99_%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B1%E0%B8%98%E0%B8%A2%E0%B8%A1%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2.jpg?v=202405291424",
    category: "ครุภัณฑ์การศึกษา",
    description: "ได้รับมาตรฐาน มอก. แข็งแรง ปลอดภัย สีสันสดใส เหมาะสำหรับเด็ก",
  },
  {
    id: 5,
    name: "เครื่องมัลติมิเดียโปรเจคเตอร์",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/8_%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%B1%E0%B8%A5%E0%B8%95%E0%B8%B4%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2_%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C_1.jpg?v=202405291424",
    category: "Visual System",
    description: "ภาพคมชัด รองรับความละเอียดสูง เปลี่ยนห้องเรียนให้เป็น Smart Classroom",
  },
  {
    id: 6,
    name: "พิณโปร่ง 4 สาย",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/%E0%B8%9E%E0%B8%B4%E0%B8%93%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%88%E0%B8%87_4_%E0%B8%AA%E0%B8%B2%E0%B8%A2.png?v=202405291424",
    category: "ดนตรีและศิลปะ",
    description: "งานฝีมือประณีต เสียงไพเราะ สืบสานวัฒนธรรมไทยด้วยเครื่องดนตรีคุณภาพ",
  },
];

export default function Services() {
  return (
    <section id="Services" className="relative py-20 md:py-28 bg-slate-50 font-sans overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-50"></div>
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-emerald-700 text-xs sm:text-sm font-bold mb-6 shadow-sm ring-4 ring-slate-50">
            <Package size={16} />
            <span>OUR PRODUCTS</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            คัดสรร<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">สิ่งที่ดีที่สุด</span><br className="hidden md:block"/> เพื่อการศึกษาไทย
          </h3>
          <p className="mt-6 text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-light">
            เราให้บริการจัดหาครุภัณฑ์และติดตั้งระบบครบวงจร ด้วยมาตรฐานที่ได้รับการยอมรับจากหน่วยงานรัฐและเอกชน
          </p>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              
              {/* Image Section */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50/50 group-hover:bg-emerald-50/30 transition-colors duration-500">
                {/* Category Pill */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md border border-slate-200 text-emerald-700 text-[10px] font-bold rounded-lg shadow-sm uppercase tracking-wide flex items-center gap-1.5">
                    <Sparkles size={10} className="text-emerald-500" />
                    {item.category}
                  </span>
                </div>

                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Overlay Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow relative">
                <h4 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-emerald-700 transition-colors duration-300">
                  {item.name}
                </h4>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 font-light">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}