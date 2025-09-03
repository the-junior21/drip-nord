import FeaturesSection from "@/components/FeaturesSection";
import ProductsGrid from "@/components/ProductsGrid"

export default function Home() {
  return (
    <div className="bg-white">
         <FeaturesSection/>
             <section className="py-12 px-4">
                 <h2 className="text-2xl font-bold mb-6 text-center">منتجاتنا</h2>
                 <ProductsGrid />
               </section>
    </div>
  );
}
