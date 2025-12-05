"use client";

import { useState } from "react";
import { X, ZoomIn, CheckCircle2 } from "lucide-react"; // เพิ่มไอคอน
import { Prompt } from "next/font/google";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Standards() {
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      title: "ISO 24001",
      subtitle: "มาตรฐานระบบบริหารคุณภาพ",
      desc: "การรับรองมาตรฐานระดับสากลด้านการจัดการ",
      image: "/img/1111.jpg",
    },
    {
      title: "ISO 9001",
      subtitle: "มาตรฐานด้านสิ่งแวดล้อม",
      desc: "ความใส่ใจและรับผิดชอบต่อสิ่งแวดล้อมอย่างยั่งยืน",
      image: "/img/1112.jpg",
    },
  ];

  return (
    <section
      id="standards"
      className={`${prompt.className} scroll-mt-32 py-20 bg-slate-50 relative overflow-hidden`}
      style={{ fontFamily: "'Prompt', 'Sarabun', sans-serif" }}
    >
      {/* Background Decoration (Optional: ลายจางๆ ด้านหลัง) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-teal-100 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium mb-4">
            <CheckCircle2 size={14} />
            <span>Certified Standards</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
            การรับรองมาตรฐานสากล
          </h2>
          <p className="text-slate-500 text-lg font-light">
            เครื่องหมายยืนยันคุณภาพและความมุ่งมั่นในการพัฒนาอย่างต่อเนื่องของเรา
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {data.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 cursor-pointer flex flex-col md:flex-row gap-6 items-center"
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Image Frame */}
              <div className="relative w-full md:w-1/2 aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 shadow-inner">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                   <div className="bg-white/20 p-3 rounded-full backdrop-blur-md text-white border border-white/30">
                     <ZoomIn size={24} />
                   </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-emerald-600 font-medium mb-3">
                  {item.subtitle}
                </h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
                
                <div className="mt-6 pt-6 border-t border-slate-100 hidden md:block">
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Click to view certificate</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm animate-fadeIn p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center animate-scaleIn">
            
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            {/* Image Wrapper */}
            <img
              src={selectedImage}
              alt="Full certificate"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </section>
  );
}