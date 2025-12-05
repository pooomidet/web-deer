"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  PackageSearch,
  Newspaper,
  Users,
  PhoneCall,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // รายการเมนู
  const navItems = [
    { href: "#home", label: "หน้าแรก", icon: Home },
    { href: "#AboutExecutives", label: "เกี่ยวกับเรา", icon: Info },
    { href: "#Services", label: "สินค้า & บริการ", icon: PackageSearch },
    { href: "#News", label: "ข่าวสาร", icon: Newspaper },
    { href: "#TrustedClients", label: "ลูกค้าของเรา", icon: Users },
  ];

  // ตรวจจับการ Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b border-transparent ${
          scrolled || open
            ? "bg-white/80 backdrop-blur-md shadow-sm border-slate-200 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
          
          {/* --- LOGO --- */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-100 group-hover:shadow-md transition-all">
               <img
                src="/img/Logo.png"
                alt="TANGJAI"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-base sm:text-lg leading-tight transition-colors ${scrolled ? 'text-slate-800' : 'text-slate-800 md:text-white md:mix-blend-difference'}`}>
                TANGJAI
              </span>
              <span className="text-[10px] sm:text-xs text-emerald-600 font-medium tracking-wide">
                CORPORATION
              </span>
            </div>
          </a>

          {/* --- DESKTOP MENU --- */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-white/20 shadow-sm mx-4">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-emerald-700 hover:bg-white transition-all duration-300 flex items-center gap-2"
              >
                {/* แสดงไอคอนเฉพาะตอน Hover (Optional) หรือซ่อนก็ได้ */}
                {/* <item.icon size={16} className="opacity-50" /> */}
                {item.label}
              </a>
            ))}
          </nav>

          {/* --- CTA BUTTON & MOBILE TOGGLE --- */}
          <div className="flex items-center gap-3">
            
            {/* Contact Button (Desktop) */}
            <a
              href="#Contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-semibold shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-0.5"
            >
              <PhoneCall size={18} />
              <span>ติดต่อเรา</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* --- MOBILE MENU DRAWER --- */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="p-6 border-b flex items-center justify-between bg-slate-50">
            <span className="font-bold text-lg text-slate-800">เมนูนำทาง</span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 bg-white rounded-full shadow-sm text-slate-500 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                    <item.icon size={20} />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
                <ChevronRight size={16} className="text-slate-300 group-hover:text-emerald-500" />
              </a>
            ))}
          </div>

          {/* Drawer Footer (Contact Button) */}
          <div className="p-6 border-t bg-slate-50">
            <a
              href="#Contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 text-white rounded-xl font-semibold shadow-md active:scale-95 transition-transform"
            >
              <PhoneCall size={20} />
              ติดต่อเราทันที
            </a>
          </div>
        </div>
      </div>
    </>
  );
}