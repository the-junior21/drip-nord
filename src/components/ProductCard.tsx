import Link from "next/link";
import { Bungee } from "next/font/google";

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"], // Bungee has only 400
  variable: "--font-en",
});

export default function ProductCard({ id, name, price, image }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center 
                 hover:shadow-xl transform transition duration-300 hover:scale-105 cursor-pointer"
    >
      {/* Image with zoom on hover */}
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <h3
        className={`${bungee.className} mt-3 text-lg font-bold`}
        style={{ color: "black" }}
      >
        {name}
      </h3>
      <p className="text-xl font-semibold text-green-600 mt-2">{price} دج</p>

      {/* Button → Go to details */}
      <Link
        href={`/product/${id}`}
        className="mt-3 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
      >
        اطلب الآن
      </Link>
    </div>
  );
}
