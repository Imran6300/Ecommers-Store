"use client";

import { useEffect, useState } from "react";
import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLocalProducts() {
      try {
        const allProducts = await getProducts();

        // Shuffle randomly
        const shuffled = [...allProducts].sort(() => Math.random() - 0.5);

        // Pick 8 items
        const selected = shuffled.slice(0, 8);

        // Mark first 3 as trending
        const trendingData = selected.map((item, index) => ({
          ...item,
          istrending: index < 3,
          image: item.image,
          thumbnail: item.thumbnail,
        }));

        setProducts(trendingData);
      } catch (err) {
        console.log("Trending load error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadLocalProducts();
  }, []);

  return (
    <section className="w-full py-16 px-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#6c5ce7]/10 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00cec9]/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* 🔥 HEADING RESTORED HERE */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] bg-clip-text text-transparent pb-1">
              Trending Products
            </h2>
            <div className="h-1 bg-gradient-to-r from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] rounded-full" />
          </div>
          <p className="text-[#2d3436]/70 text-lg">
            Discover what everyone is loving right now
          </p>
        </div>

        {/* Products */}
        {!loading && products.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6">
            {products.map((item, index) => (
              <div
                key={item.id}
                className="animate-in slide-in-from-bottom-4 fade-in"
                style={{
                  animationDelay: `${index * 120}ms`,
                  animationFillMode: "both",
                }}
              >
                <Card Data={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
