"use client";

import { useState } from "react";
import { Users, Eye, Award, History } from "lucide-react";
import HistoryPage from "../components/History";
import ExecutivesPage from "../components/Executives";
import StandardsPage from "../components/Standards";
import VisionPage from "../components/Vision";

export default function AboutExecutives() {
  const [activeTab, setActiveTab] = useState("history");

  const tabContent = {
    history: <HistoryPage />,
    executives: <ExecutivesPage />,
    vision: <VisionPage />,
    standards: <StandardsPage />,
  };

  return (
    // ปรับ py-12 สำหรับมือถือ และ md:py-20 สำหรับจอใหญ่
    <section className="relative w-full min-h-screen py-12 md:py-20 overflow-hidden bg-slate-50 font-sans">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 md:w-96 md:h-96 bg-emerald-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-pulse"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 md:w-96 md:h-96 bg-teal-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-pulse delay-700"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="AboutExecutives" className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-100 text-emerald-700 text-sm md:text-lg font-bold mb-3 md:mb-4 shadow-sm ring-2 md:ring-4 ring-emerald-50">
            <History className="w-4 h-4 md:w-5 md:h-5" />
            <span>เกี่ยวกับ TANGJAI</span>
          </div>
          
          {/* ปรับขนาดตัวอักษรตามหน้าจอ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 tracking-tight leading-tight">
            โครงสร้างองค์กรและความเป็นมา
          </h2>
          <div className="h-1.5 w-16 md:w-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mt-3 md:mt-4"></div>
        </div>

        {/* Navigation Tabs - Responsive */}
        <div className="flex justify-center mb-6 md:mb-10">
          {/* เปลี่ยนจาก rounded-full เป็น rounded-2xl ในมือถือ เพื่อให้ดูดีเวลาปุ่มซ้อนกันหลายแถว */}
          <div className="bg-white/50 backdrop-blur-md p-1.5 md:p-2 rounded-2xl md:rounded-full border border-slate-200 shadow-sm flex flex-wrap justify-center gap-2 w-full sm:w-auto">
            {[
              { id: "history", label: "ประวัติความเป็นมา", icon: History },
              { id: "executives", label: "ผู้บริหาร", icon: Users },
              { id: "vision", label: "วิสัยทัศน์", icon: Eye },
              { id: "standards", label: "มาตรฐาน", icon: Award },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                // Responsive Classes:
                // text-xs -> text-sm -> text-base (ขนาดตัวหนังสือ)
                // px-3 py-2 -> px-5 py-2.5 (ขนาดปุ่ม)
                // flex-1 sm:flex-none (ในมือถือให้ปุ่มขยายเต็มพื้นที่แถว เพื่อกดง่าย)
                className={`
                  flex items-center justify-center gap-1.5 md:gap-2 
                  px-3 py-2 sm:px-5 sm:py-2.5 
                  rounded-xl md:rounded-full 
                  text-xs sm:text-sm md:text-base font-medium 
                  transition-all duration-300 
                  flex-1 sm:flex-none whitespace-nowrap
                  ${
                  activeTab === tab.id
                    ? "bg-emerald-600 text-white shadow-md transform scale-100 sm:scale-105" // scale เฉพาะจอใหญ่ กัน layout ขยับในมือถือ
                    : "text-slate-600 hover:bg-white hover:text-emerald-600 hover:shadow-sm"
                }`}
              >
                <tab.icon className="w-3.5 h-3.5 md:w-5 md:h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Box */}
        <div className="max-w-5xl mx-auto">
          {/* rounded-2xl ในมือถือ, rounded-3xl ในจอใหญ่ */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative min-h-[300px] md:min-h-[400px]">
             
             {/* Decorative top bar */}
             <div className="h-1.5 md:h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500"></div>
             
             {/* Padding: p-4 (มือถือ) -> p-8 (Tablet) -> p-12 (Desktop) */}
             <div className="p-4 sm:p-8 md:p-12 animate-fadeIn">
                {tabContent[activeTab]}
             </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}