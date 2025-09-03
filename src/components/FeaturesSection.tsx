"use client";

import { Noto_Kufi_Arabic } from "next/font/google";
const noto = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400","500","700"],
});
export default function FeaturesSection() {
  return (
<section className="mt-6 bg-white flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 sm:gap-8 md:gap-12 px-4 py-16 ">
{/* الميزة ١: الجودة */}
{/* الميزة ١: الجودة */}
<div className="text-black flex flex-col items-center text-center flex-shrink-0 max-w-[150px]">
  <span className="text-7xl sm:text-5xl md:text-6xl">
    <i className="fa-solid fa-medal"></i>
  </span>
  <h3 className={`${noto.className} mt-3 text-2xl sm:text-base md:text-lg font-bold`}>
    الجودة
  </h3>
  <p className={`${noto.className} mt-2 text-[17px] sm:text-xs md:text-sm`}>
    كل منتجاتنا بجودة عالية مع الضمان ✅
  </p>
</div>

{/* الميزة ٢: الضمان */}
<div className="text-black flex flex-col items-center text-center flex-shrink-0 max-w-[150px]">
  <span className="text-7xl sm:text-5xl md:text-6xl">
    <i className="fa-solid fa-square-check"></i>
  </span>
  <h3 className={`${noto.className} mt-3 text-2xl sm:text-base md:text-lg font-bold`}>
    ضمان حقيقي
  </h3>
  <p className={`${noto.className} mt-2 text-[17px] sm:text-xs md:text-sm`}>
    ضمان استعادة الاموال ✅
  </p>
</div>

{/* الميزة ٣: المقاس */}
<div className="text-black flex flex-col items-center text-center flex-shrink-0 max-w-[150px]">
  <span className="text-7xl sm:text-5xl md:text-6xl">
    <i className="fa-solid fa-shirt"></i>
  </span>
  <h3 className={`${noto.className} mt-3 text-2xl sm:text-base md:text-lg font-bold`}>
    المقاس
  </h3>
  <p className={`${noto.className} mt-2 text-[17px] sm:text-xs md:text-sm`}>
    ضمان استبدال المقاس
  </p>
</div>

{/* الميزة ٤: الدفع */}
<div className="text-black flex flex-col items-center text-center flex-shrink-0 max-w-[150px]">
  <span className="text-7xl sm:text-5xl md:text-6xl">
    <i className="fa-solid fa-truck-fast"></i>
  </span>
  <h3 className={`${noto.className} mt-3 text-2xl sm:text-base md:text-lg font-bold`}>
    الدفع عند الاستلام
  </h3>
  <p className={`${noto.className} mt-2 text-[17px] sm:text-xs md:text-sm`}>
    توصيل متوفر 58 ولاية
  </p>
</div>

</section>


  );
}
