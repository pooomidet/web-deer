"use client";
import React from "react";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";

export default function ContactPage() {
  return (
    <section id="Contact" className="relative min-h-screen bg-slate-50 font-sans py-20 overflow-hidden">

      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot Pattern */}
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>
        {/* Gradient Blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold mb-4 border border-emerald-200 shadow-sm">
            <Phone size={14} />
            <span>Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            ช่องทางการ<span className="text-emerald-600">ติดต่อ</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-light">
            พร้อมให้คำปรึกษาและบริการข้อมูลสินค้า สอบถามได้ทุกช่องทาง
          </p>
        </div>

        {/* --- CONTACT CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">

          {/* 1. Phone Card */}
          <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200 hover:-translate-y-2 flex flex-col items-center text-center">
            <div className="p-4 bg-emerald-50 rounded-2xl group-hover:bg-emerald-600 transition-colors duration-300 mb-6 ring-4 ring-emerald-50/50">
              <Phone className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-slate-800 text-xl mb-2">โทรศัพท์</h3>
            <p className="text-slate-400 text-sm mb-4">ติดต่อสอบถามข้อมูลด่วน</p>
            <a
              href="tel:082-4740111"
              className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              082-4740111
            </a>
            <div className="mt-4 flex items-center gap-1 text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-full">
              <Clock size={12} />
              <span>จันทร์-เสาร์ | 8:00 - 17:00 น.</span>
            </div>
          </div>

          {/* 2. Email Card */}
          <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200 hover:-translate-y-2 flex flex-col items-center text-center">
            <div className="p-4 bg-emerald-50 rounded-2xl group-hover:bg-emerald-600 transition-colors duration-300 mb-6 ring-4 ring-emerald-50/50">
              <Mail className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-slate-800 text-xl mb-2">อีเมล</h3>
            <p className="text-slate-400 text-sm mb-4">สำหรับขอใบเสนอราคา</p>
            <a
              href="mailto:tangjai.office002@gmail.com"
              className="text-lg sm:text-xl font-semibold text-emerald-600 hover:text-emerald-700 transition-colors break-all"
            >
              tangjai.office002@gmail.com
            </a>
            <div className="mt-4 flex items-center gap-1 text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-full">
              <Clock size={12} />
              <span>ตอบกลับภายใน 24 ชม.</span>
            </div>
          </div>

          {/* 3. Address Card */}
          <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200 hover:-translate-y-2 flex flex-col items-center text-center">
            <div className="p-4 bg-emerald-50 rounded-2xl group-hover:bg-emerald-600 transition-colors duration-300 mb-6 ring-4 ring-emerald-50/50">
              <MapPin className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-slate-800 text-xl mb-2">ที่ตั้งสำนักงาน</h3>
            <p className="text-slate-400 text-sm mb-4">สำนักงานใหญ่</p>
            <p className="text-slate-600 leading-relaxed text-base">
              311 หมู่ 4 บ้านเพียเพ้า <br/>
              ต.คำน้ำแซบ อ.วารินชำราบ <br/>
              จ.อุบลราชธานี 34190
            </p>
          </div>

        </div>

        {/* --- MAP SECTION --- */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 p-2">
           {/* Map Header inside box */}
           <div className="px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white">
              <div className="flex items-center gap-3">
                 <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                    <MapPin size={20} />
                 </div>
                 <h3 className="font-bold text-slate-800 text-lg">แผนที่การเดินทาง</h3>
              </div>
              
              {/* Navigate Button */}
              <a 
                href="https://maps.google.com/?q=Tangjai+Corporation+Ubon" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-xl transition-colors shadow-lg shadow-emerald-200"
              >
                <Navigation size={16} />
                นำทางด้วย Google Maps
              </a>
           </div>

           {/* Iframe Container */}
           <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-slate-100">
             <iframe
               title="Tangjai Office Location"
               className="absolute inset-0 w-full h-full border-0"
               loading="lazy"
               allowFullScreen
               referrerPolicy="no-referrer-when-downgrade"
               // หมายเหตุ: ตรงนี้คุณควรใส่ Google Maps Embed Link จริงๆ ของบริษัท
               // ตัวอย่างข้างล่างเป็น Link Placeholder ของ Google Maps
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.733290626081!2d104.860!3d15.190!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDExJzI0LjAiTiAxMDTCsDUxJzM2LjAiRQ!5e0!3m2!1sen!2sth!4v1625641234567!5m2!1sen!2sth"
             ></iframe>
           </div>
        </div>

      </div>
    </section>
  );
}