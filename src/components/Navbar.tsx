"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bungee } from "next/font/google";
import { Noto_Kufi_Arabic } from "next/font/google";
const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
});
const noto = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400","500","700"],
});


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" sticky top-0 bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* Logo + Store name */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpg" alt="Logo" width={60} height={60} />
            <span className={`${bungee.className} ml-5 pl-3 text-xl font-bold text-black`}>Nord Drip</span>
          </Link>


          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 text-black">
            <Link href="/contact" className={`${noto.className} hover:text-gray-900`}>تواصل معنا</Link>
            <Link href="/" className={`${noto.className} hover:text-gray-900`}>الرئيسية</Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            >
              <span
                className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-black my-1 transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-2 pt-2 pb-3 space-y-1 font-bold text-black">
          <Link href="/contact" className={`${noto.className} block px-3 py-2 rounded-md hover:bg-black-100` }>تواصل معنا</Link>
          <Link href="/" className={`${noto.className} block px-3 py-2 rounded-md hover:bg-black-100` }>الرئيسية</Link>
        </div>
      )}
    </nav>
  );
}
