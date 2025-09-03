import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProductsGrid from "@/components/ProductsGrid";

import { Noto_Kufi_Arabic } from "next/font/google";
const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],   // must include "arabic"
  weight: ["400", "500", "700"], // pick the weights you need
  variable:"--font-ar"
});

import { Bungee } from "next/font/google";
const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"], // Bungee has only 400
  variable:"--font-en"
});
export const metadata = {
  title: "Nord Drip pappi",
  description: "E-commerce store for clothes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 text-gray-900 ${bungee.variable} ${notoKufi.variable}`}>
        <Navbar />
       
        <main className="bg-white min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
