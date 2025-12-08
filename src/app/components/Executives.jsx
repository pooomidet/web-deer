"use client";

import { useState } from "react";

const executives = [
  { name: "นายสนั่น สุตัญตั้งใจ", title: "ประธานบริษัท", photo: "/img/01.jpg" },
  { name: "นางประนอม สุตัญตั้งใจ", title: "รองประธานบริษัท", photo: "/img/02.jpg" },
];

export default function ExecutivesSection() {
  const [previewImg, setPreviewImg] = useState(null);

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-16"
      style={{ fontFamily: "'Prompt', 'Sarabun', sans-serif" }}
    >
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
          ทีมผู้บริหาร
        </div>
        <h3 className="text-4xl font-black text-gray-900 mb-6">ผู้นำที่มีประสบการณ์</h3>
        <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {executives.map((e, i) => (
          <div
            key={i}
            className="group bg-gradient-to-br from-white to-emerald-50/50 p-8 rounded-3xl border border-emerald-100 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform"></div>

                <div
                  className="relative w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl group-hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => setPreviewImg(e.photo)}
                >
                  <img src={e.photo} alt={e.name} className="w-full h-full object-cover object-top" />
                </div>
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  {e.name}
                </h4>
                <p className="text-sm text-gray-500 mb-3">{e.title}</p>
                <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {previewImg && (
        <div
          // เปลี่ยน bg-black เป็น bg-white และผมลองปรับ opacity เป็น 90 ให้ดูสะอาดตาขึ้น
          className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setPreviewImg(null)}
        >
          {/* เพิ่ม shadow-2xl ให้รูปดูลอยเด่นขึ้นมาจากพื้นขาว */}
          <img src={previewImg} alt="Preview" className="max-h-[80%] max-w-[80%] rounded-xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}
