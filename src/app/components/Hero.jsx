"use client";

export default function Hero() {
  return (
    <section
      id="home"
      // เปลี่ยน h-screen เป็น min-h-[100dvh] เพื่อแก้ปัญหา Address bar ในมือถือบัง และรองรับเนื้อหาที่อาจจะยาว
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* 1. Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay: เพิ่มความเข้มเล็กน้อยเพื่อให้ Text อ่านง่ายขึ้นบนจอมือถือที่สว่างน้อย */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
      </div>

      {/* 2. Content */}
      {/* เพิ่ม padding บน-ล่าง (py-20) เผื่อกรณีจอมือถือแนวนอนเนื้อหาจะได้ไม่ชิดขอบ */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
        bg-white/10 backdrop-blur-sm border border-white/20 
        text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 sm:mb-8 animate-fadeIn">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          ครบจบทุกครุภัณฑ์การศึกษา
        </div>

        {/* Heading */}
        {/* ปรับขนาด Font ให้ละเอียดขึ้น: text-3xl (มือถือ), text-5xl (แท็บเล็ต), text-6xl (คอม) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight md:leading-[1.2] 
        text-white mb-4 sm:mb-6 drop-shadow-xl break-words">
          TANGJAI —{" "}
          <span className="block sm:inline text-emerald-400">
            ครุภัณฑ์การศึกษาคุณภาพ
          </span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 
        max-w-xl md:max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light px-2">
          TANGJAI ก่อตั้งโดยทีมงานผู้เชี่ยวชาญด้านการศึกษาและงานติดตั้ง
          เรามุ่งส่งมอบอุปกรณ์ที่ได้มาตรฐาน ใช้งานได้จริง
          พร้อมบริการหลังการขายที่เชื่อถือได้
        </p>

        {/* Buttons */}
        {/* มือถือ: ปุ่มเรียงแนวตั้งและกว้างเต็ม (w-full) / จอใหญ่: เรียงแนวนอน (w-auto) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 w-full max-w-md sm:max-w-none mx-auto">
          <a
            href="#products"
            className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 
            text-white font-semibold shadow-lg hover:shadow-emerald-500/30 
            transition transform hover:-translate-y-1 text-sm sm:text-base tracking-wide text-center"
          >
            ดูสินค้าของเรา
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border-2 border-white/80 text-white 
            font-semibold hover:bg-white hover:text-emerald-900 transition 
            transform hover:-translate-y-1 text-sm sm:text-base tracking-wide text-center"
          >
            ขอใบเสนอราคา
          </a>
        </div>

        {/* Stats Boxes */}
        {/* Grid 1 แถวในมือถือ, 3 แถวในจอใหญ่ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-sm sm:max-w-3xl mx-auto">
          {[
            { label: "มาตรฐาน", value: "ISO 9001" },
            { label: "ลูกค้าหลัก", value: "โรงเรียนรัฐบาล" },
            { label: "บริการ", value: "ติดตั้งครบวงจร" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl shadow-lg 
              text-center transform hover:scale-105 transition duration-300"
            >
              <p className="text-[10px] sm:text-xs text-emerald-200/80 uppercase tracking-wider font-semibold mb-1">
                {stat.label}
              </p>
              <p className="font-bold text-white text-base sm:text-lg">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}