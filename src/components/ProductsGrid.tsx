// components/ProductsGrid.jsx
import ProductCard from "./ProductCard";
import { products } from "@/data/products"


export default function ProductsGrid() {
  return (
    <section className="px-6 py-4">
      <h2 className="text-3xl font-bold text-center mb-8 !text-black">منتجاتنا</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />

        ))}
      </div>
    </section>
  );
}
