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

  const tabs = [
    { id: "history", label: "ประวัติความเป็นมา", icon: History },
    { id: "executives", label: "ผู้บริหาร", icon: Users },
    { id: "vision", label: "วิสัยทัศน์", icon: Eye },
    { id: "standards", label: "มาตรฐาน", icon: Award },
  ];

  return (
    <section className="relative w-full min-h-screen py-16 md:py-24 overflow-hidden bg-slate-50 font-sans">
      
      {/* --- BACKGROUND DECORATION --- */}
      {/* ลายจุด (Dot Pattern) จางๆ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>
      </div>
      
      {/* แสงฟุ้ง (Gradient Blobs) */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 md:w-[500px] md:h-[500px] bg-emerald-200/30 rounded-full blur-[80px] mix-blend-multiply animate-pulse"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 md:w-[500px] md:h-[500px] bg-teal-200/30 rounded-full blur-[80px] mix-blend-multiply animate-pulse delay-700"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div id="AboutExecutives" className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-emerald-100 text-emerald-700 text-xs md:text-sm font-bold mb-5 shadow-sm ring-4 ring-emerald-50/50">
            <History className="w-4 h-4" />
            <span>เกี่ยวกับ TANGJAI</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            โครงสร้างองค์กร<span className="text-emerald-600">และความเป็นมา</span>
          </h2>
        </div>

        {/* --- TABS NAVIGATION --- */}
        <div className="flex justify-center mb-8 md:mb-12">
          {/* Container: Glassmorphism + Shadow */}
          <div className="bg-white/60 backdrop-blur-xl p-2 rounded-2xl md:rounded-full border border-white/40 shadow-lg shadow-slate-200/50 flex flex-wrap justify-center gap-2 w-full max-w-md md:max-w-4xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex items-center justify-center gap-2 
                  px-4 py-2.5 sm:px-6 sm:py-3 
                  rounded-xl md:rounded-full 
                  text-sm md:text-base font-medium 
                  transition-all duration-300 ease-out
                  flex-1 sm:flex-none whitespace-nowrap select-none
                  ${
                    activeTab === tab.id
                      ? "text-white shadow-md transform scale-[1.02]" // Active Styles
                      : "text-slate-600 hover:text-emerald-700 hover:bg-white/80" // Inactive Styles
                  }
                `}
              >
                {/* Active Background Gradient */}
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl md:rounded-full -z-10 animate-fadeScale"></div>
                )}
                
                <tab.icon className={`w-4 h-4 md:w-5 md:h-5 ${activeTab === tab.id ? "text-white" : "opacity-70"}`} />
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden relative min-h-[400px] transition-all duration-500">
             
             {/* Decorative Gradient Line */}
             <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 bg-[length:200%_100%] animate-gradientMove"></div>
             
             {/* Content with Fade Animation */}
             <div className="p-5 sm:p-8 md:p-12">
                {/* Key prop ensures React re-mounts and triggers animation when tab changes */}
                <div key={activeTab} className="animate-fadeInUp">
                   {tabContent[activeTab]}
                </div>
             </div>
          </div>
        </div>

      </div>

      {/* --- CUSTOM ANIMATIONS --- */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeScale {
          animation: fadeScale 0.3s ease-out forwards;
        }
        .animate-gradientMove {
          animation: gradientMove 3s linear infinite;
        }
      `}</style>
    </section>
  );
}